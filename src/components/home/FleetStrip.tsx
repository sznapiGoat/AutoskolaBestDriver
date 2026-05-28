"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const photos = [
  {
    src: "/images/BestCb1.webp",
    alt: "Černá Škoda s označením autoškoly Best Driver CB, panorama Českých Budějovic",
    span: "tall",
  },
  {
    src: "/images/BestCb2.webp",
    alt: "Modrá Škoda Fabia výcvikový automobil autoškoly Best Driver CB",
    span: "normal",
  },
  {
    src: "/images/BestCb3.webp",
    alt: "Dva modré motocykly výcvikového vozového parku Best Driver CB",
    span: "normal",
  },
  {
    src: "/images/BestCb4.webp",
    alt: "Suzuki a modrý motocykl výcvikového vozového parku Best Driver CB",
    span: "normal",
  },
  {
    src: "/images/BestCb5.webp",
    alt: "Žlutý Yamaha motocykl na lesní silnici – jízda v kurzu skupiny A",
    span: "normal",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export default function FleetStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section ref={ref} className="bg-white py-16 md:py-20 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-2">
            Naše vybavení
          </p>
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl tracking-tight">
            Vozový park
          </h2>
        </motion.div>

        {/* Desktop: asymmetric grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="hidden md:grid grid-cols-2 gap-3"
        >
          {/* Left — tall portrait (BestCb1) */}
          <motion.div variants={item} className="relative rounded-2xl overflow-hidden row-span-2">
            <div className="relative h-full min-h-[480px]">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
          </motion.div>

          {/* Right — 2 × 2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {photos.slice(1).map((photo) => (
              <motion.div
                key={photo.src}
                variants={item}
                className="relative rounded-2xl overflow-hidden aspect-square"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="25vw"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: horizontal scroll strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="md:hidden flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory scrollbar-none"
        >
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] w-[72vw] shrink-0 snap-start"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="72vw"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
