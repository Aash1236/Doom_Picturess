import Image from "next/image";
import Title from "@/components/Title";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <Title subtitle="About Me" title="Get to Know Me" link="Download CV" />
        {/* Banner */}
        <figure className="relative w-full aspect-[16/6] rounded-2xl border border-neutral-800 overflow-hidden mt-8">
          <Image src="/images/about-page-banner.png" alt="About page banner" fill className="object-cover" priority />
        </figure>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold">Crafting stories with light & composition</h3>
            <p className="text-neutral-300 leading-relaxed">
              I’m Ashutosh — a photographer focused on timeless, clean and intentional visuals.
              Weddings, portraits, brands and events — I love capturing moments that feel real.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {["Weddings • Events • Brands","Fast, friendly delivery","Pan‑India availability","Retouching included"].map((i,idx)=>(
                <li key={idx} className="rounded-xl border border-neutral-800 p-4 text-neutral-200">{i}</li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-2">
              <button className="primary-btn">Let’s Work Together</button>
              <a href="mailto:hello@example.com" className="underline">hello@example.com</a>
            </div>
          </div>
          <figure className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-800">
            <Image src="/images/about-section-banner.png" alt="About section" fill className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
