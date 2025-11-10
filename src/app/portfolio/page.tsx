import Image from "next/image";
import Title from "@/components/Title";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioSectionItems } from "@/data/data";

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container">
        <Title subtitle="Portfolio" title="Selected Works" link="Get a Quote" />
        {/* Banner */}
        <figure className="relative w-full aspect-[16/6] rounded-2xl border border-neutral-800 overflow-hidden mt-8">
          <Image src="/images/portfolio-page-banner.png" alt="Portfolio banner" fill className="object-cover" priority />
        </figure>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {portfolioSectionItems.map((item:any) => (
            <PortfolioCard key={item.id} img={item.imgUrl} title={item.title} date={item.date} />
          ))}
        </div>
      </div>
    </section>
  );
}
