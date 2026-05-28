import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrackGrid from "@/components/home/TrackGrid";
import FleetStrip from "@/components/home/FleetStrip";
import ValueProps from "@/components/home/ValueProps";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Autoškola Best Driver CB | Domů",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrackGrid />
      <FleetStrip />
      <ValueProps />

      {/* Bottom CTA banner */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-2xl bg-charcoal px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white tracking-tight md:text-3xl">
                Připraveni začít?
              </h2>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed max-w-md">
                Stáhněte si přihlášku a zdravotní posudek, nebo nám rovnou zavolejte a
                domluvíme se na dalším postupu.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                Rezervovat online
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/cenik"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                Zobrazit ceník
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
