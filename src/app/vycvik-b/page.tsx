import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  CheckCircle2,
  ArrowRight,
  Zap,
  BookOpen,
  MapPin,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Výcvik skupiny B",
  description:
    "Standardní i intenzivní kurz řidičského průkazu skupiny B v Českých Budějovicích. Moderní Škoda Fabia, zkušení instruktoři.",
};

const standardIncludes = [
  "Teortetická výuka (zákony, dopravní předpisy)",
  "Výuka první pomoci",
  "Praktická jízda na cvičišti",
  "Jízdy v provozu – město, dálnice, noční jízda",
  "Příprava na závěrečnou zkoušku",
  "Přihlášení ke státní zkoušce",
];

const intenzivniIncludes = [
  "Vše ze standardního kurzu",
  "Zhuštěný harmonogram – kurz dokončíte rychleji",
  "Intenzivní bloky praktických jízd",
  "Ideální pro studenty a pracovně zaneprázdněné",
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Registrace",
    body: "Vyplňte přihlášku (ke stažení na /kontakt), přineste zdravotní posudek a zaplaťte zálohu.",
  },
  {
    icon: BookOpen,
    title: "Teoretická výuka",
    body: "Lekce dopravních předpisů, znaků a první pomoci v přátelském prostředí.",
  },
  {
    icon: Car,
    title: "Praktický výcvik",
    body: "Jízdy na cvičišti i v ostrém provozu s trpělivým instruktorem.",
  },
  {
    icon: MapPin,
    title: "Závěrečná zkouška",
    body: "Teoretický test (100 Kč), jízda s komisařem (400 Kč) a výdej ŘP magistrátem (700 Kč).",
  },
];

export default function VycvikBPage() {
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
            <span className="text-charcoal">Výcvik B</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand mb-5">
              <Car size={13} aria-hidden />
              Osobní automobily
            </div>
            <h1 className="text-4xl font-semibold text-charcoal tracking-tight md:text-5xl leading-[1.1] mb-4">
              Výcvik skupiny B
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Získejte řidičský průkaz skupiny B v klidném prostředí s individuálním
              přístupem. Naučíme vás jezdit bezpečně a s jistotou.
            </p>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Standard */}
            <div className="rounded-xl bg-white border border-zinc-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                      Standardní kurz
                    </p>
                    <h2 className="text-xl font-semibold text-charcoal tracking-tight">
                      Řidičský průkaz B
                    </h2>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-semibold text-charcoal">22 000 Kč</p>
                    <p className="text-xs text-zinc-400">celková cena kurzu</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {standardIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-brand"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-zinc-100 bg-zinc-50 p-4 md:p-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Přihlásit se
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>

            {/* Intensive */}
            <div className="rounded-xl bg-charcoal border border-charcoal overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">
                      Intenzivní kurz
                    </p>
                    <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
                      Skupina B
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-white">
                        <Zap size={10} aria-hidden />
                        Rychlý
                      </span>
                    </h2>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl font-semibold text-white">29 000 Kč</p>
                    <p className="text-xs text-white/40">celková cena kurzu</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {intenzivniIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-light"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 bg-white/5 p-4 md:p-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Přihlásit se
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet highlight */}
      <section className="bg-white py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Vozový park
              </p>
              <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl mb-4">
                Náš vozový park
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Výcvik probíhá na Škodě Fabii — spolehlivém a bezpečném voze ideálním
                pro výuku. Ovládání je intuitivní, kabina prostorná a přátelská jak
                pro začátečníky, tak pro pokročilé studenty.
              </p>
              <ul className="space-y-2.5">
                {["Bezpečnostní systémy ESP a ABS", "Pohodlná kabina pro nerušenou výuku", "Dual kontrola pro instruktora", "Výcvikové označení schválené MDI"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-600">
                      <CheckCircle2 size={15} className="text-brand shrink-0" aria-hidden />
                      {f}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Fleet photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1">
                <Image
                  src="/images/BestCb1.webp"
                  alt="Výcvikový automobil autoškoly Best Driver CB – černá Škoda s označením autoškoly a panoramatem Českých Budějovic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1">
                <Image
                  src="/images/BestCb2.webp"
                  alt="Výcvikový automobil autoškoly Best Driver CB – modrá Škoda Fabia v Českých Budějovicích"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Postup
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Jak kurz probíhá
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="rounded-xl bg-white border border-zinc-200 p-5 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted">
                        <Icon size={17} className="text-brand" aria-hidden />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">
                        Krok {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold text-charcoal tracking-tight mb-3">
            Připraveni začít?
          </h2>
          <p className="text-zinc-500 mb-8 max-w-md mx-auto">
            Kontaktujte nás nebo si stáhněte přihlášku na stránce kontaktu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Rezervovat kurz
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
