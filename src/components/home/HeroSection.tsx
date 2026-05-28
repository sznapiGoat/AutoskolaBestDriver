"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  }),
};

const stats = [
  { value: "AM · A1 · A2 · A · B", label: "Všechny skupiny" },
  { value: "Osobní instruktor", label: "Stejný od začátku do konce" },
  { value: "Vaše tempo", label: "Žádný spěch, žádný tlak" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-0 md:px-6 md:pt-16">
        <div className="grid items-end gap-10 md:grid-cols-2">

          {/* Text column */}
          <div className="pb-12 md:pb-20 space-y-7">

            <motion.p
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400"
            >
              Autoškola · České Budějovice
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-heading font-bold leading-[1.0] tracking-[-0.03em] text-charcoal"
              style={{ fontSize: "clamp(3rem, 7vw, 5.25rem)" }}
            >
              Best<br />
              <span className="text-brand">Driver CB</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-[1.05rem] text-zinc-500 leading-[1.8] max-w-sm"
            >
              Od první teorie až po zkoušku s komisařem. Provázíme vás každým krokem, ve vašem tempu, bez spěchu.
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
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Zajistit si místo
                <ArrowRight size={15} aria-hidden />
              </Link>
              <a
                href="tel:+420775952393"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <Phone size={15} className="text-brand" aria-hidden />
                Zavolejte nám
              </a>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-x-7 gap-y-3 pt-1 border-t border-zinc-100"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[0.8rem] font-semibold text-charcoal">{s.value}</p>
                  <p className="text-[0.7rem] text-zinc-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            custom={5}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-t-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-zinc-200/70">
              <Image
                src="/images/BestCb1.webp"
                alt="Výcvikový automobil autoškoly Best Driver CB s panoramatem Českých Budějovic v pozadí"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 0px, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            <div className="absolute -bottom-3 left-5 rounded-xl bg-white border border-zinc-200 shadow-lg px-4 py-2.5 flex items-center gap-2.5">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
              <span className="text-xs font-semibold text-charcoal">Volná místa k dispozici</span>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="h-px bg-zinc-100 mx-auto max-w-6xl mt-8 md:mt-0" aria-hidden />
    </section>
  );
}
