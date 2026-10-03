"use client";

import { useI18n } from "./LanguageProvider";
import { locales, localeNames } from "./dictionaries";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.header.language}
      className="flex items-center rounded-md border border-zinc-200 p-0.5 dark:border-zinc-800"
    >
      {locales.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            }`}
          >
            {localeNames[code]}
          </button>
        );
      })}
    </div>
  );
}
