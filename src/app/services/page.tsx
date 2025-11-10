import Image from "next/image";
import Title from "@/components/Title";
import {
  servicesHeightligts,
  servicePriceItems,
  servicePriceItemsSecond,
  servicePriceItemsThird,
} from "@/data/data";

function PriceCard({ subtitle, price, texts }: { subtitle: string; price: string | number; texts: { text: string }[] }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-6 flex flex-col gap-4">
      <div>
        <p className="text-sm uppercase tracking-wide text-neutral-400">{subtitle}</p>
        <h4 className="text-3xl font-semibold mt-1">{typeof price === "number" ? `₹${price}` : price}</h4>
      </div>
      <ul className="flex-1 space-y-2">
        {texts?.map((t, i) => (
          <li key={i} className="text-neutral-300">• {t.text}</li>
        ))}
      </ul>
      <button className="primary-btn w-full">Book Now</button>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <Title subtitle="Services" title="What I Offer" link="Contact Me" />
        {/* Banner */}
        <figure className="relative w-full aspect-[16/6] rounded-2xl border border-neutral-800 overflow-hidden mt-8">
          <Image src="/images/services-page-banner.png" alt="Services banner" fill className="object-cover" priority />
        </figure>

        {/* Highlights */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesHeightligts.map((h: { id: number; label: string }) => (
            <div key={h.id} className="rounded-xl border border-neutral-800 p-5 text-neutral-200">{h.label}</div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePriceItems.map((p: any) => (
              <PriceCard key={`p1-${p.id}`} subtitle={p.subtitle} price={p.price} texts={p.texts} />
            ))}
            {servicePriceItemsSecond.map((p: any) => (
              <PriceCard key={`p2-${p.id}`} subtitle={p.subtitle} price={p.price} texts={p.texts} />
            ))}
            {servicePriceItemsThird.map((p: any) => (
              <PriceCard key={`p3-${p.id}`} subtitle={p.subtitle} price={p.price} texts={p.texts} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
