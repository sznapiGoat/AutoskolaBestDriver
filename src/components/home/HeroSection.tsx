"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-[0.03]"
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

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-0 md:px-6 md:pt-16">
        <div className="grid items-end gap-10 md:grid-cols-2">
          {/* Text column */}
          <div className="pb-12 md:pb-20 space-y-8">
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

            {/* Stat strip */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-6 pt-2"
            >
              {[
                { value: "Skupiny A + B", label: "Motocykly i automobily" },
                { value: "3 instruktoři", label: "Zkušený tým" },
                { value: "Individuálně", label: "Přizpůsobíme se vám" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-sm font-semibold text-charcoal">{s.value}</p>
                  <p className="text-xs text-zinc-400">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo column — black Škoda with landscape */}
          <motion.div
            custom={5}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="relative hidden md:block"
          >
            {/* Card frame */}
            <div className="relative rounded-t-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-zinc-200">
              <Image
                src="/images/BestCb1.webp"
                alt="Výcvikové auto autoškoly Best Driver CB – černá Škoda s výukovým znamením na střeše, panorama Českých Budějovic v pozadí"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 0px, 50vw"
              />
              {/* Subtle gradient to blend into white bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/30 to-transparent" />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-3 left-5 rounded-xl bg-white border border-zinc-200 shadow-lg px-4 py-2.5 flex items-center gap-2.5">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
              <span className="text-xs font-medium text-charcoal">Přijímáme přihlášky</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-px bg-zinc-100 mx-auto max-w-6xl mt-8 md:mt-0" aria-hidden />
    </section>
  );
}
