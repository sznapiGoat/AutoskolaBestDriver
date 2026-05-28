"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Bike,
  Car,
  Gift,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const extrasContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const tracks = [
  {
    icon: Bike,
    title: "Výcvik Motocyklů",
    subtitle: "AM, A1, A2, A",
    description:
      "Od prvního mopedo-průkazu po plnohodnotnou skupinu A bez výkonového limitu. Každý krok blíž ke svobodě na silnici.",
    cta: "Vybrat skupinu",
    href: "/motocykly",
    accent: true,
  },
  {
    icon: Car,
    title: "Výcvik Osobních Automobilů",
    subtitle: "Skupina B",
    description:
      "Naučíme vás řídit s jistotou — v centru města, na dálnici i v noci. Standardní nebo intenzivní tempo: vyberte si sami.",
    cta: "Prohlédnout kurzy",
    href: "/vycvik-b",
    accent: false,
  },
];

const extras = [
  { icon: Phone, title: "Kondiční jízdy", subtitle: "& Vrácení ŘP", href: "/cenik" },
  { icon: Users, title: "O nás", subtitle: "& Náš tým", href: "/o-nas" },
  { icon: Gift, title: "Dárkové poukazy", subtitle: "Ideální dárek", href: "/cenik#darkove-poukazy" },
];

export default function TrackGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section ref={ref} className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-2">
            Nabídka kurzů
          </p>
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl tracking-tight">
            Zvolte svůj kurz
          </h2>
        </motion.div>

        {/* Main two track cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-4 md:grid-cols-2 mb-4"
        >
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.href} variants={item}>
                <Link
                  href={track.href}
                  className={`group relative flex flex-col gap-5 rounded-xl p-6 border h-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    track.accent
                      ? "bg-brand border-brand hover:bg-brand-dark"
                      : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center size-10 rounded-lg ${
                      track.accent ? "bg-white/20" : "bg-brand-muted"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={track.accent ? "text-white" : "text-brand"}
                      aria-hidden
                    />
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 ${
                        track.accent ? "text-white/75" : "text-zinc-400"
                      }`}
                    >
                      {track.subtitle}
                    </p>
                    <h3
                      className={`font-heading text-xl font-bold leading-snug tracking-tight mb-2.5 ${
                        track.accent ? "text-white" : "text-charcoal"
                      }`}
                    >
                      {track.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        track.accent ? "text-stone-100" : "text-zinc-500"
                      }`}
                    >
                      {track.description}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 text-sm font-semibold ${
                      track.accent ? "text-white" : "text-brand"
                    }`}
                  >
                    {track.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extras row */}
        <motion.div
          variants={extrasContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {extras.map((extra) => {
            const Icon = extra.icon;
            return (
              <motion.div key={extra.href} variants={item}>
                <Link
                  href={extra.href}
                  className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 transition-all hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <div className="inline-flex items-center justify-center size-8 rounded-lg bg-brand-muted shrink-0">
                    <Icon size={16} className="text-brand" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-charcoal truncate">{extra.title}</p>
                    <p className="text-xs text-zinc-400">{extra.subtitle}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="ml-auto text-zinc-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-400 shrink-0"
                    aria-hidden
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
