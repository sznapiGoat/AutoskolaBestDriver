"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navEnter = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const linkStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const linkItem = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

const drawerVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15, ease: EASE } },
};

const drawerLinkStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
};

const drawerLinkItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: EASE } },
};

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
    <motion.header
      variants={navEnter}
      initial="hidden"
      animate="show"
      className={cn(
        "sticky top-0 z-50 w-full transition-[border-color,box-shadow,background-color] duration-300",
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
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
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
          <span className="font-heading text-[15px] font-bold tracking-tight text-charcoal leading-tight">
            Best Driver
            <span className="block text-[10px] font-normal text-zinc-400 tracking-[0.15em] uppercase leading-none mt-0.5">
              Autoškola · CB
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <motion.ul
          variants={linkStagger}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-0.5"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <motion.li key={link.href} variants={linkItem}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand inline-block",
                    active
                      ? "text-brand font-semibold"
                      : "text-zinc-500 hover:text-charcoal hover:bg-zinc-50"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-brand"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Desktop: socials + CTA */}
        <motion.div
          variants={linkItem}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-2"
          style={{ transitionDelay: "0.3s" }}
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 text-zinc-400 hover:text-charcoal transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Icon className="size-[17px]" />
            </a>
          ))}
          <div className="w-px h-4 bg-zinc-200 mx-1" aria-hidden />
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Zajistit si místo
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-1 p-2 rounded-md text-charcoal hover:bg-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden border-t border-zinc-100 bg-white px-4 pb-6 pt-3 shadow-md"
          >
            <motion.ul
              variants={drawerLinkStagger}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-0.5"
            >
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.li key={link.href} variants={drawerLinkItem}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-base transition-colors",
                        active
                          ? "bg-brand-muted text-brand font-semibold"
                          : "text-zinc-500 hover:bg-zinc-50 hover:text-charcoal"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              variants={drawerLinkItem}
              className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3"
            >
              <Link
                href="/kontakt"
                className="block w-full text-center rounded-lg bg-brand px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Zajistit si místo
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
