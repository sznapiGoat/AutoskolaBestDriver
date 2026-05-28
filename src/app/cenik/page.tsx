import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Gift, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Ceník kurzů",
  description:
    "Přehledný ceník všech kurzů autoškoly Best Driver CB. Skupina B, motocykly AM/A1/A2/A, intenzivní kurz, doplňovací zkoušky a kondiční jízdy.",
};

const pricing = [
  {
    label: "Řidičský průkaz AM, A1 nebo A",
    price: "18 000 Kč",
    note: "Platí pro každou skupinu zvlášť",
    featured: false,
  },
  {
    label: "Řidičský průkaz B",
    price: "22 000 Kč",
    note: "Standardní kurz skupiny B",
    featured: false,
  },
  {
    label: "Intenzivní kurz skupiny B",
    price: "29 000 Kč",
    note: "Zhuštěný harmonogram — hotovo rychleji",
    featured: true,
  },
  {
    label: "Doplňovací zkouška A1 → A2",
    price: "6 000 Kč",
    note: "Rozšíření stávajícího průkazu A1",
    featured: false,
  },
  {
    label: "Doplňovací zkouška A2 → A",
    price: "6 000 Kč",
    note: "Rozšíření stávajícího průkazu A2",
    featured: false,
  },
  {
    label: "Vrácení ŘP (skupina A nebo B)",
    price: "4 000 Kč",
    note: "Kondiční jízdy po odnětí průkazu",
    featured: false,
  },
  {
    label: "Kondiční jízdy (skupina A nebo B)",
    price: "1 000 Kč",
    note: "Cena za jednu jízdu",
    featured: false,
  },
];

const examFees = [
  { label: "Správní poplatek magistrát", price: "700 Kč" },
  { label: "Zkouška z teorie (CDV)", price: "100 Kč" },
  { label: "Zkouška z jízdy (CDV)", price: "400 Kč" },
];

export default function CenikPage() {
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
            <span className="text-charcoal">Ceník</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-charcoal tracking-tight md:text-5xl leading-[1.1] mb-4">
              Ceník kurzů
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Transparentní ceny bez skrytých poplatků. Ceny zahrnují veškerou výuku
              a přípravu — správní poplatky a CDV poplatky jsou uvedeny zvlášť.
            </p>
          </div>
        </div>
      </section>

      {/* Main pricing table */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Kurzy & služby
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Přehled cen
            </h2>
          </div>

          <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white divide-y divide-zinc-100">
            {pricing.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-4 px-5 py-4 ${
                  item.featured ? "bg-brand-muted" : ""
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p
                      className={`text-sm font-medium ${
                        item.featured ? "text-brand" : "text-charcoal"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-white">
                        <Star size={9} aria-hidden />
                        Oblíbený
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.note}</p>
                </div>
                <p
                  className={`text-base font-semibold shrink-0 ${
                    item.featured ? "text-brand" : "text-charcoal"
                  }`}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam fees */}
      <section className="bg-white py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Státní zkouška
              </p>
              <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl mb-4">
                Poplatky při zkoušce
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Tyto poplatky jsou hrazeny přímo příslušným orgánům při závěrečné
                zkoušce a nejsou součástí ceny kurzu.
              </p>
              <div className="rounded-xl border border-zinc-200 divide-y divide-zinc-100 overflow-hidden">
                {examFees.map((fee) => (
                  <div
                    key={fee.label}
                    className="flex items-center justify-between px-4 py-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-brand shrink-0" aria-hidden />
                      <p className="text-sm text-zinc-600">{fee.label}</p>
                    </div>
                    <p className="text-sm font-semibold text-charcoal">{fee.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                Jak se přihlásit?
              </h3>
              <ol className="space-y-3">
                {[
                  "Stáhněte si přihlášku na stránce Kontakt.",
                  "Zajděte k lékaři pro zdravotní posudek.",
                  "Kontaktujte nás a domluvte se na termínu.",
                  "Zaplatte zálohu a začněte theorii.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand text-white text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Přejít na kontakt
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift vouchers */}
      <section id="darkove-poukazy" className="bg-zinc-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Dárkové poukazy
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Darujte zážitek svobody
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Voucher card */}
            <div className="md:col-span-2 rounded-xl bg-charcoal p-6 md:p-8 text-white relative overflow-hidden">
              {/* Decoration */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 opacity-[0.04]"
                aria-hidden
              >
                <div className="grid size-full grid-cols-6 grid-rows-6">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={(Math.floor(i / 6) + (i % 6)) % 2 === 0 ? "bg-white" : ""}
                    />
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center justify-center size-10 rounded-lg bg-brand mb-5">
                <Gift size={20} className="text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                Dárkový poukaz na kurz
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-md">
                Ideální dárek k narozeninám nebo pod stromeček. Poukaz lze vystavit
                na celý kurz nebo na libovolnou částku podle vašeho přání.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Libovolná nominální hodnota",
                  "Platnost dle dohody",
                  "Možnost věnování osobě podle výběru",
                  "Vhodný pro skupinu B i motocykly",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 size={14} className="text-brand-light shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Objednat poukaz
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>

            {/* Voucher use cases */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 flex flex-col gap-4">
              <p className="text-sm font-semibold text-charcoal">Skvělý pro každou příležitost</p>
              {[
                { emoji: "🎂", label: "Narozeniny" },
                { emoji: "🎄", label: "Vánoce" },
                { emoji: "🎓", label: "Maturita & promoce" },
                { emoji: "💝", label: "Výročí" },
              ].map((oc) => (
                <div
                  key={oc.label}
                  className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5"
                >
                  <span className="text-lg" aria-hidden>{oc.emoji}</span>
                  <p className="text-sm text-charcoal">{oc.label}</p>
                </div>
              ))}
              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                Kontaktujte nás a rádi vám poukaz připravíme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
