import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const quickLinks = [
  { label: "Výcvik skupiny B", href: "/vycvik-b" },
  { label: "Výcvik motocyklů", href: "/motocykly" },
  { label: "Ceník kurzů", href: "/cenik" },
  { label: "O nás & tým", href: "/o-nas" },
  { label: "Kontakt & rezervace", href: "/kontakt" },
];

const socials = [
  {
    label: "Instagram (@as_best_driver)",
    href: "https://www.instagram.com/as_best_driver/",
    Icon: InstagramIcon,
    short: "Instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100093295539910",
    Icon: FacebookIcon,
    short: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + socials */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="size-7 rounded-sm overflow-hidden shrink-0" aria-hidden>
                <div className="grid grid-cols-2 grid-rows-2 size-full">
                  <div className="bg-charcoal" />
                  <div className="bg-white border border-zinc-300" />
                  <div className="bg-white border border-zinc-300" />
                  <div className="bg-charcoal" />
                </div>
              </div>
              <span className="text-sm font-semibold text-charcoal leading-tight">
                Best Driver
                <span className="block text-[11px] font-normal text-zinc-400 tracking-wide">
                  AUTOŠKOLA · CB
                </span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Pomůžeme vám ke kvalitnímu řidičskému průkazu s individuálním
              přístupem a klidnou atmosférou.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon, short }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 hover:text-brand hover:border-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <Icon className="size-3.5" />
                  {short}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Stránky
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-500 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                <span>
                  M. Chlajna 1287/5
                  <br />
                  370 05 České Budějovice
                </span>
              </li>
              <li>
                <a
                  href="tel:+420775952393"
                  className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  <Phone size={15} className="shrink-0 text-brand" aria-hidden />
                  +420 775 952 393
                </a>
              </li>
              <li>
                <a
                  href="mailto:asbestdriver@email.cz"
                  className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                >
                  <Mail size={15} className="shrink-0 text-brand" aria-hidden />
                  asbestdriver@email.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Autoškola Best Driver CB. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-zinc-400">Jiří Mareček · IČO na vyžádání</p>
        </div>
      </div>
    </footer>
  );
}
