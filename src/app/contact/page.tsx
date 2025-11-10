"use client";
import Image from "next/image";
import Title from "@/components/Title";
import { socialLinks } from "@/data/data";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired; show a friendly confirmation
    setStatus("Thanks! Your message has been recorded locally. Connect email/Slack backend to receive it.");
  }

  return (
    <section className="section">
      <div className="container">
        <Title subtitle="Contact" title="Let’s Work Together" link="View Services" />
        {/* Banner */}
        <figure className="relative w-full aspect-[16/6] rounded-2xl border border-neutral-800 overflow-hidden mt-8">
          <Image src="/images/contact-page-banner.png" alt="Contact banner" fill className="object-cover" priority />
        </figure>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-800 p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Name</label>
                <input className="w-full rounded-lg bg-transparent border border-neutral-800 p-3 outline-none" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-neutral-400">Email</label>
                <input type="email" className="w-full rounded-lg bg-transparent border border-neutral-800 p-3 outline-none" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">Subject</label>
              <input className="w-full rounded-lg bg-transparent border border-neutral-800 p-3 outline-none" placeholder="Project inquiry" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-neutral-400">Message</label>
              <textarea rows={6} className="w-full rounded-lg bg-transparent border border-neutral-800 p-3 outline-none" placeholder="Tell me about your project..." required />
            </div>
            <button className="primary-btn" type="submit">Send Message</button>
            {status && <p className="text-sm text-neutral-400">{status}</p>}
          </form>

          {/* Info */}
          <div className="rounded-2xl border border-neutral-800 p-6 space-y-6">
            <h3 className="text-2xl font-semibold">Reach me</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>Email: <a className="underline" href="mailto:hello@example.com">hello@example.com</a></li>
              <li>Phone: <a className="underline" href="tel:+919999999999">+91 99999 99999</a></li>
              <li>Location: Mumbai, India</li>
            </ul>
            <div>
              <p className="text-neutral-400 mb-3">Social</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s:any)=>(
                  <a key={s.id} href={s.path ?? "#"} className="size-10 rounded-full border border-neutral-800 grid place-items-center hover:opacity-80">
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
