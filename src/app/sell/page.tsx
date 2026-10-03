"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CarService } from "@/services/CarService";
import { useI18n } from "@/i18n/LanguageProvider";

export default function SellPage() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const carData = {
      name: formData.get("name") as string,
      price: `$${formData.get("price")}`,
      description: formData.get("description") as string,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", // Placeholder
      specs: {
        year: parseInt(formData.get("year") as string),
        mileage: formData.get("mileage") as string,
      }
    };

    try {
      await CarService.submitCarListing(carData);
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to submit listing:", error);
      alert(t.sell.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-white dark:bg-zinc-950">
          <div className="text-center p-8 border rounded-2xl bg-zinc-50 dark:bg-zinc-900">
            <h2 className="text-3xl font-bold mb-4">{t.sell.successTitle}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">{t.sell.successMessage}</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2 bg-zinc-900 text-white rounded-md dark:bg-zinc-50 dark:text-zinc-900"
            >
              {t.sell.sellAnother}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white dark:bg-zinc-950">
        <div className="container px-4 py-12 mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t.sell.title}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {t.sell.subtitle}
            </p>
          </div>

          <div className="rounded-2xl border p-8 bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.sell.makeModel}</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder={t.sell.makeModelPlaceholder} 
                    className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.sell.year}</label>
                  <input 
                    name="year"
                    type="number" 
                    placeholder={t.sell.yearPlaceholder} 
                    className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.sell.price}</label>
                  <input 
                    name="price"
                    type="text" 
                    placeholder={t.sell.pricePlaceholder} 
                    className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.sell.mileage}</label>
                  <input 
                    name="mileage"
                    type="text" 
                    placeholder={t.sell.mileagePlaceholder} 
                    className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.sell.description}</label>
                <textarea 
                  name="description"
                  placeholder={t.sell.descriptionPlaceholder} 
                  rows={4}
                  className="w-full rounded-md border p-2 text-sm dark:bg-zinc-950 dark:border-zinc-800"
                  required
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.sell.photos}</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md dark:border-zinc-800">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-zinc-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-zinc-600 dark:text-zinc-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-zinc-900 hover:text-zinc-800 dark:text-zinc-50"
                      >
                        <span>{t.sell.uploadFile}</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">{t.sell.dragDrop}</p>
                    </div>
                    <p className="text-xs text-zinc-500">{t.sell.fileHint}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-zinc-900 py-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 disabled:opacity-50"
                >
                  {isSubmitting ? t.sell.submitting : t.sell.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
