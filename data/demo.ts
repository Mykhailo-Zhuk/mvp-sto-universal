import type { Restaurant, Service } from "@/lib/schemas";

/**
 * СТО Універсал — каталог послуг
 * Ремонт мікроавтобусів та легкових авто. Евакуатор 24/7. Працюємо з 2014 року. Великий досвід роботи з Mercedes Sprinter, VW Crafter, Ford Transit.
 */

export const DEMO_RESTAURANT: Restaurant = {
  id: "sto-universal",
  name: "СТО Універсал",
  description: "Ремонт мікроавтобусів та легкових авто. Евакуатор 24/7. Працюємо з 2014 року. Великий досвід роботи з Mercedes Sprinter, VW Crafter, Ford Transit.",
  logo: "/images/demo-logo.svg",
  address: "Велика Кільцева, 4л, Петропавлівська Борщагівка, Київська обл.",
  phone: "067 449 34 30",
  currency: "UAH",
  categories: [],
  items: [],
};

export const DEMO_SERVICES: Service[] = [
  {
    id: "diagnostyka-mikroavtobus",
    name: "Діагностика мікроавтобуса",
    description: "Повна комп'ютерна діагностика мікроавтобусів Mercedes Sprinter, VW Crafter, Ford Transit, Renault Master.",
    duration: 60,
    price: 600,
    provider: "СТО Універсал",
    category: "diagnostyka",
    masterName: "Віктор Бондар",
    available: true,
  },
  {
    id: "zamina-oleni-micro",
    name: "Заміна оливи (мікроавтобус)",
    description: "Заміна моторної оливи та фільтрів на мікроавтобусах. Великий досвід роботи з дизельними двигунами.",
    duration: 60,
    price: 1200,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Віктор Бондар",
    available: true,
  },
  {
    id: "diagnostyka-hodovoi-micro",
    name: "Діагностика ходової (мікроавтобус)",
    description: "Перевірка ходової частини, гальм, рульового. Спеціалізація на великих авто - підвищена увага до несучої рами.",
    duration: 90,
    price: 800,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Сергій Кравченко",
    available: true,
  },
  {
    id: "remont-dvyhuna-micro",
    name: "Ремонт дизельного двигуна",
    description: "Капітальний та поточний ремонт дизельних двигунів мікроавтобусів. Турбіни, форсунки, ГРМ.",
    duration: 1440,
    price: 25000,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Віктор Бондар",
    available: true,
  },
  {
    id: "remont-kpp-micro",
    name: "Ремонт КПП мікроавтобуса",
    description: "Ремонт механічних та автоматичних коробок передач мікроавтобусів. Заміна зчеплення.",
    duration: 480,
    price: 15000,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Віктор Бондар",
    available: true,
  },
  {
    id: "evakuator-24-7",
    name: "Евакуатор 24/7",
    description: "Цілодобовий евакуатор по Києву та області. Перевезення мікроавтобусів, легкових авто, мототехніки.",
    duration: 60,
    price: 2500,
    provider: "СТО Універсал",
    category: "evakuator",
    masterName: "Цілодобово",
    available: true,
  },
  {
    id: "zamina-zcheplennya",
    name: "Заміна зчеплення",
    description: "Заміна зчеплення на мікроавтобусах та легкових авто. Оригінальні комплектуючі.",
    duration: 240,
    price: 8000,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Сергій Кравченко",
    available: true,
  },
  {
    id: "rozval-sxozhdennya-micro",
    name: "Розвал-сходження (мікроавтобус)",
    description: "Розвал-сходження мікроавтобусів на 3D стенді. Спеціальні знання кутів установки коліс.",
    duration: 90,
    price: 1000,
    provider: "СТО Універсал",
    category: "slyusar",
    masterName: "Сергій Кравченко",
    available: true,
  },
  {
    id: "servis-kondycionera",
    name: "Сервіс кондиціонера",
    description: "Заправка, діагностика, ремонт автокондиціонерів. Антибактеріальна обробка.",
    duration: 90,
    price: 1500,
    provider: "СТО Універсал",
    category: "kondycioner",
    masterName: "Андрій Лисенко",
    available: true,
  }
];

export const ADMIN_LOG = [
  {
    id: "l1",
    timestamp: "2026-09-17T10:23:11Z",
    level: "info" as const,
    message: "Booking created: sto-universal service",
  },
  {
    id: "l2",
    timestamp: "2026-09-17T09:18:42Z",
    level: "success" as const,
    message: "Booking confirmed: sto-universal",
  },
];
