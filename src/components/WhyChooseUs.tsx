"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function WhyChooseUs() {
  const { t } = useI18n();

  const reasons = [
    { title: t.whyChooseUs.reason1Title, description: t.whyChooseUs.reason1Desc },
    { title: t.whyChooseUs.reason2Title, description: t.whyChooseUs.reason2Desc },
    { title: t.whyChooseUs.reason3Title, description: t.whyChooseUs.reason3Desc },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">{t.whyChooseUs.title}</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
