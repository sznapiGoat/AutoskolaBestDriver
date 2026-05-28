"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle checkerboard accent — top-right decoration */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-[0.035]"
        aria-hidden
      >
        <div className="grid size-full grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "bg-charcoal" : ""}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-6 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text column */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand"
            >
              <span className="inline-block size-1.5 rounded-full bg-brand" aria-hidden />
              České Budějovice
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-charcoal md:text-5xl lg:text-6xl leading-[1.1]"
            >
              Autoškola
              <br />
              <span className="text-brand">Best Driver</span>
              <br />
              CB
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-lg text-zinc-500 leading-relaxed max-w-md"
            >
              Jsme tady, abychom vám kvalitní výukou a výcvikem pomohli
              k&nbsp;úspěšnému získání řidičského oprávnění.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Rezervovat kurz
                <ArrowRight size={16} aria-hidden />
              </Link>
              <a
                href="tel:+420775952393"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <Phone size={16} className="text-brand" aria-hidden />
                +420 775 952 393
              </a>
            </motion.div>
          </div>

          {/* Stats / visual column */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "A, B", label: "Skupiny řidičských průkazů" },
              { value: "3×", label: "Instruktoři s dlouhou praxí" },
              { value: "100%", label: "Individuální přístup" },
              { value: "CB", label: "Centrum Českých Budějovic" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 space-y-1"
              >
                <p className="text-2xl font-semibold text-charcoal tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-400 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-zinc-100 mx-auto max-w-6xl" aria-hidden />
    </section>
  );
}
