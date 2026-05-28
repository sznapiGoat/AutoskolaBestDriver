import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás & Tým",
  description:
    "Poznejte tým autoškoly Best Driver CB — Jiří Mareček, Iveta Sedláčková, Michal Vondrášek. Zkušení instruktoři v Českých Budějovicích.",
};

const team = [
  {
    name: "Jiří Mareček",
    role: "Hlavní instruktor & vedoucí",
    phone: "+420 775 952 393",
    initial: "JM",
    bio: "Zakladatel autoškoly Best Driver CB s bohatými zkušenostmi ve výuce řízení. Specializace na skupiny A a B.",
  },
  {
    name: "Iveta Sedláčková",
    role: "Instruktorka skupiny B",
    phone: "+420 704 604 033",
    initial: "IS",
    bio: "Trpělivá a zkušená instruktorka, která pomáhá studentům překonat obavy z jízdy a získat sebedůvěru za volantem.",
  },
  {
    name: "Michal Vondrášek",
    role: "Instruktor skupiny B & A",
    phone: null,
    initial: "MV",
    bio: "Odborník na jízdu v náročných podmínkách. Vede kurzy pro skupinu B i motocyklové skupiny.",
  },
];

const faqs = [
  {
    q: "Jak se přihlásit do kurzu?",
    a: "Stáhněte si přihlášku z naší stránky Kontakt, zajděte k lékaři pro zdravotní posudek a poté nás kontaktujte telefonicky nebo e-mailem. Domluvíme se na termínu a způsobu platby zálohy.",
  },
  {
    q: "Jaký zdravotní posudek potřebuji?",
    a: "Před zahájením kurzu je nutný lékařský posudek o zdravotní způsobilosti k řízení. Formulář ke stažení je na naší stránce Kontakt. Posudek vydá váš praktický lékař.",
  },
  {
    q: "Jak probíhá závěrečná zkouška?",
    a: "Zkouška se skládá ze dvou částí: teoretického testu (CDV, poplatek 100 Kč) a praktické jízdy s komisařem (CDV, poplatek 400 Kč). Po úspěšném složení obou částí zaplatíte správní poplatek 700 Kč na magistrátu a obdržíte průkaz.",
  },
  {
    q: "Jaké jsou poplatky u státní zkoušky?",
    a: "Správní poplatek magistrátu: 700 Kč. Zkouška z teorie (CDV): 100 Kč. Zkouška z jízdy (CDV): 400 Kč. Celkem tedy přibližně 1 200 Kč nad rámec ceny kurzu.",
  },
  {
    q: "Mohu přijít na kondiční jízdy bez absolvování celého kurzu?",
    a: "Ano. Nabízíme kondiční jízdy pro skupiny A i B za 1 000 Kč za jízdu. Vhodné pro ty, kteří chtějí osvěžit řidičské dovednosti nebo se připravit na vrácení průkazu.",
  },
  {
    q: "Nabízíte dárkové poukazy?",
    a: "Ano, vystavujeme dárkové poukazy na libovolnou částku nebo celý kurz. Ideální dárek k narozeninám, Vánocům nebo maturitě. Kontaktujte nás pro více informací.",
  },
];

export default function ONasPage() {
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
            <span className="text-charcoal">O nás</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-charcoal tracking-tight md:text-5xl leading-[1.1] mb-4">
              O nás & Tým
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Jsme malý a sehraný tým instruktorů v Českých Budějovicích, kteří staví
              na individuálním přístupu a klidném prostředí výuky.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Instruktoři
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Náš tým
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-xl bg-white border border-zinc-200 overflow-hidden"
              >
                {/* Avatar header */}
                <div className="h-32 bg-brand-muted flex items-center justify-center">
                  <div className="size-20 rounded-full bg-brand flex items-center justify-center text-white text-xl font-semibold tracking-tight">
                    {member.initial}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-charcoal">{member.name}</h3>
                  <p className="text-xs text-brand font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{member.bio}</p>

                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                    >
                      <Phone size={14} className="text-brand" aria-hidden />
                      {member.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              FAQ
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Otázky a odpovědi
            </h2>
          </div>

          <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-xl overflow-hidden">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-charcoal hover:bg-zinc-50 transition-colors list-none">
                  {faq.q}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-zinc-100 bg-zinc-50 px-5 py-4">
                  <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-zinc-500 mb-4">
              Nenašli jste odpověď na svou otázku?
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Kontaktujte nás
              <Phone size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
