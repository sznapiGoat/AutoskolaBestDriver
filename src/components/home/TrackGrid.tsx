import Link from "next/link";
import {
  Bike,
  Car,
  Gift,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";

const tracks = [
  {
    icon: Bike,
    title: "Výcvik Motocyklů",
    subtitle: "AM, A1, A2, A",
    description:
      "Řidičský průkaz na motocykl od 50 ccm (AM) až po neomezený výkon (A). Spolupracujeme s motozem.cz.",
    href: "/motocykly",
    accent: true,
  },
  {
    icon: Car,
    title: "Výcvik Osobních Automobilů",
    subtitle: "Skupina B",
    description:
      "Standardní i intenzivní kurz skupiny B. Moderní vozový park, trpělivý přístup instruktorů.",
    href: "/vycvik-b",
    accent: false,
  },
];

const extras = [
  {
    icon: Phone,
    title: "Kondiční jízdy",
    subtitle: "& Vrácení ŘP",
    href: "/cenik",
  },
  {
    icon: Users,
    title: "O nás",
    subtitle: "& Náš tým",
    href: "/o-nas",
  },
  {
    icon: Gift,
    title: "Dárkové poukazy",
    subtitle: "Ideální dárek",
    href: "/cenik#darkove-poukazy",
  },
];

export default function TrackGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
            Nabídka kurzů
          </p>
          <h2 className="text-2xl font-semibold text-charcoal md:text-3xl tracking-tight">
            Zvolte svůj kurz
          </h2>
        </div>

        {/* Main two tracks */}
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <Link
                key={track.href}
                href={track.href}
                className={`group relative flex flex-col gap-4 rounded-xl p-6 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                  track.accent
                    ? "bg-brand border-brand hover:bg-brand-dark"
                    : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center size-10 rounded-lg ${
                    track.accent
                      ? "bg-white/20"
                      : "bg-brand-muted"
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
                    className={`text-[11px] font-semibold uppercase tracking-widest mb-1 ${
                      track.accent ? "text-white/60" : "text-zinc-400"
                    }`}
                  >
                    {track.subtitle}
                  </p>
                  <h3
                    className={`text-lg font-semibold leading-snug tracking-tight mb-2 ${
                      track.accent ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {track.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      track.accent ? "text-white/75" : "text-zinc-500"
                    }`}
                  >
                    {track.description}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-1.5 text-sm font-medium transition-gap duration-200 ${
                    track.accent ? "text-white" : "text-brand"
                  }`}
                >
                  Zjistit více
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Extras row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {extras.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 transition-all hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <div className="inline-flex items-center justify-center size-8 rounded-lg bg-brand-muted shrink-0">
                  <Icon size={16} className="text-brand" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-charcoal truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-400">{item.subtitle}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto text-zinc-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-400 shrink-0"
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
