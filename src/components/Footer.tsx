import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks, footerList } from "@/data/data";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="container py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mb-12">
          {footerList.map((group) => (
            <div key={group.id}>
              <h4 className="text-xl font-semibold mb-4 text-white">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="hover:underline hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-neutral-800 pt-8">
          {/* Logo or brand text */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold text-white">Doom Pictures</h3>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item: any, index: number) => (
              <a
                key={index}
                href="#"
                className="size-10 grid place-items-center rounded-full border border-neutral-800 hover:bg-neutral-800 transition"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center text-neutral-500 text-sm">
          <p>
            © 2025 Shubham Doom Photography. All rights reserved.
          </p>
          <p className="mt-1">
            <Link href="/" className="hover:underline">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
