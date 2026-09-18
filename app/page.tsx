"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Sparkles, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((m) => m.ThemeToggle), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/20" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>СТО Універсал</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/admin">Адмін</Link>
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-12 text-center sm:pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Sparkles className="h-3 w-3" />
            MVP демо · Next.js 14
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Ремонт мікроавтобусів та легкових авто
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
            Евакуатор 24/7. Спеціалізація: Mercedes Sprinter, VW Crafter, Ford Transit. Досвід з 2014 року.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />Велика Кільцева, 4л, Петропавлівська Борщагівка</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />Пн-Пт 9:00-20:00, Сб 9:00-16:00, Нд вихідний</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="tel:0674493430">
                <Phone className="h-4 w-4" />
                067 449 34 30
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/book/diagnostyka-mikroavtobus">
                <CalendarDays className="h-4 w-4" />
                Записатись онлайн
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-3 text-sm text-zinc-500"></div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Наші послуги</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/book/diagnostyka-mikroavtobus" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Діагностика мікроавтобуса</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Комп&apos;ютерна діагностика Sprinter, Crafter, Transit, Master.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">600 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/zamina-oleni-micro" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Заміна оливи (мікроавтобус)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Заміна оливи та фільтрів на мікроавтобусах.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">1200 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/diagnostyka-hodovoi-micro" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Діагностика ходової</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Перевірка ходової, гальм, рульового на великих авто.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">800 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/remont-dvyhuna-micro" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Ремонт дизельного двигуна</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Капітальний ремонт дизельних двигунів мікроавтобусів.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">25000 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/remont-kpp-micro" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Ремонт КПП мікроавтобуса</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Ремонт МКПП/АКПП мікроавтобусів. Заміна зчеплення.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">15000 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/evakuator-24-7" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Евакуатор 24/7</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Цілодобовий евакуатор по Києву та області.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">2500 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/zamina-zcheplennya" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Заміна зчеплення</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Заміна зчеплення на мікроавтобусах та легкових.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">8000 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/rozval-sxozhdennya-micro" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Розвал-сходження</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Розвал-сходження мікроавтобусів на 3D стенді.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">1000 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
          <Link href="/book/servis-kondycionera" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Сервіс кондиціонера</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Заправка, діагностика, ремонт автокондиціонерів.</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">1500 ₴</div>
              <div className="mt-1 text-xs text-zinc-500">Записатись →</div>
            </div>
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          MVP by <a href="https://t.me/Zhuk_Mykhailo" className="text-indigo-600 hover:underline dark:text-indigo-400">Mykhailo Zhuk</a> · Next.js 14 · MIT License
        </div>
      </footer>
    </main>
  );
}
