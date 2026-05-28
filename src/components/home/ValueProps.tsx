import { Users, Clock, Heart, Smile, Leaf } from "lucide-react";

const props = [
  {
    icon: Users,
    title: "Profesionální tým",
    body: "Zkušení instruktoři s mnohaletou praxí, kteří vám vždy pomohou.",
  },
  {
    icon: Clock,
    title: "Dlouholeté zkušenosti",
    body: "Pomáháme studentům úspěšně získat řidičský průkaz již řadu let.",
  },
  {
    icon: Heart,
    title: "Individuální přístup",
    body: "Každý student je jiný – přizpůsobíme tempo i styl výuky vašim potřebám.",
  },
  {
    icon: Smile,
    title: "Vstřícnost",
    body: "Otevřená komunikace, ochota odpovídat na dotazy a podpora po celou dobu kurzu.",
  },
  {
    icon: Leaf,
    title: "Klidné prostředí",
    body: "Výuka probíhá v přátelské atmosféře – bez zbytečného stresu.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-zinc-50 py-16 md:py-20 border-y border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
            Proč nás zvolit
          </p>
          <h2 className="text-2xl font-semibold text-charcoal md:text-3xl tracking-tight">
            Naše hodnoty
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex gap-4 rounded-xl bg-white border border-zinc-100 p-5"
              >
                <div className="mt-0.5 shrink-0 inline-flex size-9 items-center justify-center rounded-lg bg-brand-muted">
                  <Icon size={18} className="text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            );
          })}

          {/* CTA card fills the 6th spot on large screens */}
          <div className="hidden lg:flex flex-col justify-center rounded-xl bg-brand p-5 text-white">
            <p className="text-sm font-medium mb-1">Máte otázky?</p>
            <p className="text-2xl font-semibold tracking-tight mb-4">
              Zavolejte nám
            </p>
            <a
              href="tel:+420775952393"
              className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              +420 775 952 393
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
