"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

export default function Header() {
  const { t } = useI18n();

  const navLinks = [
    { label: t.header.nav.browseCars, href: "/#inventory" },
    { label: t.header.nav.howItWorks, href: "#how-it-works" },
    { label: t.header.nav.financing, href: "#financing" },
    { label: t.header.nav.about, href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/80 supports-[backdrop-filter]:dark:bg-zinc-950/60">
      <div className="mx-auto flex h-16 w-full items-center px-4 lg:px-6">
        {/* Brand */}
        <Link className="flex items-center gap-2" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white">
            C
          </span>
          <span className="text-xl font-bold tracking-tight">CarBuy</span>
          <span className="hidden text-xs font-medium text-zinc-500 sm:inline dark:text-zinc-400">
            {t.header.marketplace}
          </span>
        </Link>

        {/* Primary navigation (buy side) */}
        <nav className="ml-8 hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Account + sell actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher />
          <Link
            className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 sm:inline dark:text-zinc-300 dark:hover:text-white"
            href="#signin"
          >
            {t.header.signIn}
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-sm font-medium text-white shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 sm:px-5"
            href="/sell"
          >
            <span aria-hidden="true">+</span>
            {t.header.sellYourCar}
          </Link>
        </div>
      </div>
    </header>
  );
}
