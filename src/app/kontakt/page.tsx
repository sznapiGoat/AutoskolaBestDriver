import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Download, FileText } from "lucide-react";
import ContactForm from "@/components/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt & Rezervace",
  description:
    "Kontaktujte autoškolu Best Driver CB. Adresa: M. Chlajna 1287/5, České Budějovice. Telefon: +420 775 952 393.",
};

const contacts = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "M. Chlajna 1287/5\n370 05 České Budějovice",
    href: "https://maps.google.com/?q=M.+Chlajna+1287%2F5,+370+05+%C4%8Cesk%C3%A9+Bud%C4%9Bjovice",
    external: true,
  },
  {
    icon: Phone,
    label: "Jiří Mareček",
    value: "+420 775 952 393",
    href: "tel:+420775952393",
    external: false,
  },
  {
    icon: Phone,
    label: "Iveta Sedláčková",
    value: "+420 704 604 033",
    href: "tel:+420704604033",
    external: false,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "asbestdriver@email.cz",
    href: "mailto:asbestdriver@email.cz",
    external: false,
  },
];

const downloads = [
  {
    filename: "zadost_o_prijeti_k_vyuce_a_vycviku.pdf",
    label: "Přihláška k výuce a výcviku",
    description: "Vyplňte a přineste při prvním setkání",
  },
  {
    filename: "lekar_posudek_zdrav_zpusobilosti.pdf",
    label: "Lékařský posudek zdravotní způsobilosti",
    description: "Nechte potvrdit u svého praktického lékaře",
  },
];

export default function KontaktPage() {
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
            <span className="text-charcoal">Kontakt</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold text-charcoal tracking-tight md:text-5xl leading-[1.1] mb-4">
              Kontakt & Rezervace
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Máte zájem o kurz nebo jen otázky? Neváhejte nás kontaktovat — rádi
              vám pomůžeme vybrat ten správný kurz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-zinc-50 py-16 md:py-20 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Kde nás najdete
              </p>
              <h2 className="text-2xl font-semibold text-charcoal tracking-tight mb-6">
                Kontaktní údaje
              </h2>

              <div className="space-y-4 mb-8">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.value}
                      className="flex items-start gap-3.5 rounded-xl bg-white border border-zinc-200 p-4"
                    >
                      <div className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted shrink-0 mt-0.5">
                        <Icon size={16} className="text-brand" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-zinc-400 mb-0.5">{c.label}</p>
                        {c.external ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-charcoal hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded whitespace-pre-line"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <a
                            href={c.href}
                            className="text-sm font-medium text-charcoal hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                          >
                            {c.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin size={32} className="mx-auto text-zinc-300" aria-hidden />
                  <p className="text-xs text-zinc-400 px-4">
                    M. Chlajna 1287/5, České Budějovice
                  </p>
                  <a
                    href="https://maps.google.com/?q=M.+Chlajna+1287%2F5,+370+05+%C4%8Cesk%C3%A9+Bud%C4%9Bjovice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-brand underline hover:text-brand-dark transition-colors"
                  >
                    Otevřít v Mapách
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                Rezervace
              </p>
              <h2 className="text-2xl font-semibold text-charcoal tracking-tight mb-6">
                Rezervujte online
              </h2>
              <div className="rounded-xl bg-white border border-zinc-200 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
              Dokumenty
            </p>
            <h2 className="text-2xl font-semibold text-charcoal tracking-tight md:text-3xl">
              Ke stažení
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              Před zahájením kurzu budete potřebovat vyplněnou přihlášku a zdravotní posudek.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {downloads.map((doc) => (
              <a
                key={doc.filename}
                href={`/${doc.filename}`}
                download
                className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition-colors hover:border-brand hover:bg-brand-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand shrink-0 mt-0.5">
                  <FileText size={18} className="text-white" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-charcoal mb-0.5 group-hover:text-brand transition-colors">
                    {doc.label}
                  </p>
                  <p className="text-xs text-zinc-400">{doc.description}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                    <Download size={12} aria-hidden />
                    STÁHNOUT PDF
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
