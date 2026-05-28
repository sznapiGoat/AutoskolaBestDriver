import type { Metadata } from "next";
import Link from "next/link";
import { Bike, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Výcvik Motocyklů – AM, A1, A2, A",
  description:
    "Řidičský průkaz na motocykl všech skupin v Českých Budějovicích. AM, A1, A2, A. Spolupráce s motozem.cz.",
};

const categories = [
  {
    code: "AM",
    title: "Moped & lehký čtyřkolka",
    age: "od 16 let",
    limit: "max. 45 km/h, do 50 ccm",
    price: "18 000 Kč",
    description:
      "Základ motoristického průkazu. Povoluje jízdu na mopedech a lehkých čtyřkolkách.",
  },
  {
    code: "A1",
    title: "Malý motocykl",
    age: "od 16 let",
    limit: "do 125 ccm, max. 11 kW",
    price: "18 000 Kč",
    description:
      "Průkaz pro motocykly s nižším výkonem. Ideální vstupní bod do světa motocyklů.",
  },
  {
    code: "A2",
    title: "Střední motocykl",
    age: "od 18 let",
    limit: "max. 35 kW",
    price: "18 000 Kč",
    description:
      "Motocykly středního výkonu. Lze získat přímým kurzem nebo doplněním z A1 (6 000 Kč).",
  },
  {
    code: "A",
    title: "Neomezený motocykl",
    age: "od 24 let (nebo 2 roky A2)",
    limit: "bez omezení výkonu",
    price: "18 000 Kč",
    description:
      "Plný motocyklový průkaz bez omezení. Přístup ke všem motocyklům na trhu.",
  },
];

const progressionPaths = [
  { from: "A1", to: "A2", price: "6 000 Kč", label: "Doplňovací zkouška" },
  { from: "A2", to: "A", price: "6 000 Kč", label: "Doplňovací zkouška" },
];

export default function MotocyklyPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-white border-b border-zinc-100 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
            <Link href="/" className="hover:text-brand transition-colors">
              Úvod
            </Link>
            <span>/</span>
            <span className="text-charcoal">Motocykly</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand mb-5">
              <Bike size={13} aria-hidden />
              AM · A1 · A2 · A
            </div>
            <h1 className="text-4xl font-semibold text-charcoal tracking-tight md:text-5xl leading-[1.1] mb-4">
              Výcvik Motocyklů
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-6">
              Od mopedů po neomezené motorky — provedeme vás celou škálou skupin. Výcvik
              probíhá ve spolupráci s odborným partnerem motozem.cz.
            </p>
            <a
              href="https://www.motozem.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              Navštívit motozem.cz
              <ExternalLink size={13} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Skupiny průkazů
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Všechny kategorie
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.code}
                className="rounded-xl bg-white border border-zinc-200 p-5 flex flex-col gap-4"
              >
                <div>
                  <div className="inline-flex items-center justify-center size-10 rounded-lg bg-brand text-white font-bold text-sm mb-3">
                    {cat.code}
                  </div>
                  <h3 className="text-sm font-semibold text-charcoal leading-snug mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{cat.age}</p>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  {cat.description}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 size={13} className="text-brand shrink-0" aria-hidden />
                    {cat.limit}
                  </div>
                  <p className="text-base font-semibold text-charcoal">{cat.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression paths */}
      <section className="bg-white py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Kariérní cesta
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Doplňovací zkoušky
            </h2>
            <p className="mt-3 text-zinc-500 max-w-lg">
              Máte-li již průkaz A1 nebo A2, můžete se rozšířit na vyšší skupinu
              za zvýhodněnou cenu — bez nutnosti absolvovat celý kurz znovu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            {progressionPaths.map((path) => (
              <div
                key={`${path.from}-${path.to}`}
                className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center size-8 rounded bg-zinc-200 text-xs font-bold text-charcoal">
                    {path.from}
                  </span>
                  <ArrowRight size={14} className="text-zinc-400" aria-hidden />
                  <span className="inline-flex items-center justify-center size-8 rounded bg-brand text-xs font-bold text-white">
                    {path.to}
                  </span>
                </div>
                <p className="text-sm font-medium text-charcoal mb-0.5">{path.label}</p>
                <p className="text-lg font-semibold text-charcoal">{path.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner note */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Partnerství
              </p>
              <h3 className="text-xl font-semibold text-charcoal tracking-tight mb-2">
                Výcvik s motozem.cz
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm max-w-lg">
                Pro motocyklový výcvik spolupracujeme s odborníky z motozem.cz, kteří
                zajišťují špičkové zázemí, profesionální instruktory a bezpečné cvičiště.
              </p>
            </div>
            <a
              href="https://www.motozem.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              motozem.cz
              <ExternalLink size={14} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold text-charcoal tracking-tight mb-3">
            Zájem o motocyklový kurz?
          </h2>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            Kontaktujte nás a rádi vám poradíme, která skupina je pro vás ta pravá.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Kontaktovat nás
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/cenik"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Zobrazit ceník
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
