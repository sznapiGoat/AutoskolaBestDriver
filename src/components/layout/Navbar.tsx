"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { cn } from "@/lib/utils";

const links = [
  { label: "Úvod", href: "/" },
  { label: "Výcvik B", href: "/vycvik-b" },
  { label: "Motocykly", href: "/motocykly" },
  { label: "Ceník", href: "/cenik" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/as_best_driver/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100093295539910",
    Icon: FacebookIcon,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : "bg-white border-b border-zinc-100"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6"
        aria-label="Hlavní navigace"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
          aria-label="Autoškola Best Driver CB – domů"
        >
          <div className="size-7 rounded-sm overflow-hidden shrink-0" aria-hidden>
            <div className="grid grid-cols-2 grid-rows-2 size-full">
              <div className="bg-charcoal" />
              <div className="bg-white border border-zinc-300" />
              <div className="bg-white border border-zinc-300" />
              <div className="bg-charcoal" />
            </div>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-charcoal leading-tight">
            Best Driver
            <span className="block text-[11px] font-normal text-zinc-400 tracking-wide leading-none">
              AUTOŠKOLA · CB
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                    active
                      ? "text-brand font-medium"
                      : "text-charcoal-muted hover:text-charcoal hover:bg-zinc-50"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop: socials + CTA */}
        <div className="hidden md:flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 text-zinc-400 hover:text-charcoal transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
          <div className="w-px h-5 bg-zinc-200 mx-1" aria-hidden />
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Rezervovat kurz
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-1 p-2 rounded-md text-charcoal hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 pb-6 pt-3 shadow-md">
          <ul className="flex flex-col gap-0.5">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-base transition-colors",
                      active
                        ? "bg-brand-muted text-brand font-medium"
                        : "text-charcoal-muted hover:bg-zinc-50 hover:text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3">
            <Link
              href="/kontakt"
              className="block w-full text-center rounded-lg bg-brand px-4 py-3 text-base font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Rezervovat kurz
            </Link>
            <div className="flex justify-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-brand transition-colors"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
