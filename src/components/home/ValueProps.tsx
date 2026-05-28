import { Users, Clock, Heart, Smile, Leaf } from "lucide-react";

const props = [
  {
    icon: Users,
    title: "Profesionální tým",
    body: "Instruktoři, kteří vědí, kde studenti nejčastěji chybují. A jak tomu předejít ještě před zkouškou.",
  },
  {
    icon: Clock,
    title: "Dlouholeté zkušenosti",
    body: "Léta praxe přetavená do výuky, která funguje. Víme přesně, na co se komise zaměřuje.",
  },
  {
    icon: Heart,
    title: "Individuální přístup",
    body: "Bojíte se dálnice nebo nočních jízd? Není problém. Jedeme přesně tak rychle, jak vám to vyhovuje.",
  },
  {
    icon: Smile,
    title: "Vstřícnost",
    body: "Žádná otázka není hloupá. Ptejte se kdykoli. Jsme tu od první lekce až po den zkoušky.",
  },
  {
    icon: Leaf,
    title: "Klidné prostředí",
    body: "Strach z řízení je přirozený. U nás si dáme čas. Bez honění, bez křiku, bez zbytečného tlaku.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-zinc-50 py-16 md:py-20 border-y border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand mb-2">
            Proč nás zvolit
          </p>
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl tracking-tight">
            Co od nás dostanete
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex gap-4 rounded-xl bg-white border border-zinc-100 p-5"
              >
                <div className="mt-0.5 shrink-0 inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted">
                  <Icon size={17} className="text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="font-heading text-[0.9rem] font-bold text-charcoal mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-[1.7]">{item.body}</p>
                </div>
              </div>
            );
          })}

          {/* CTA card — 6th slot on large screens */}
          <div className="hidden lg:flex flex-col justify-center rounded-xl bg-brand p-5 text-white">
            <p className="text-sm font-medium text-white/70 mb-1">Máte otázky?</p>
            <p className="font-heading text-2xl font-bold tracking-tight mb-4 leading-tight">
              Zavolejte nám
            </p>
            <a
              href="tel:+420775952393"
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              +420 775 952 393
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
