import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "@remixicon/react";

interface PortfolioCardProps {
  img: string;
  title: string;
  date: string;
}

const PortfolioCard = ({ img, title, date }: PortfolioCardProps) => {
  return (
    <div>
      {/* cardn image */}
      <figure className="mb-5">
        <Image
          src={img}
          alt={title}
          width={519}
          height={499}
          className="rounded-4xl w-full h-full object-cover"
        />
      </figure>
      {/* card content */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h4 className="text-xl">{title}</h4>
          <p>{date}</p>
        </div>
        <Link href="/portfolio" className="flex items-center gap-2 uppercase hover:underline">
          View Project
          <span>
            <RiArrowRightUpLongLine />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
