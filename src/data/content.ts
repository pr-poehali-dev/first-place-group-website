export interface CaseItem {
  client: string;
  industry: string;
  metric: string;
  result: string;
  period: string;
  icon: string;
}

export const cases: CaseItem[] = [
  { client: 'Интернет-магазин мебели', industry: 'E-commerce', metric: '+340%', result: 'органического трафика', period: '6 мес', icon: 'Sofa' },
  { client: 'Частная медицинская клиника', industry: 'Медицина', metric: 'ТОП-3', result: 'по 180 запросам', period: '8 мес', icon: 'Stethoscope' },
  { client: 'Юридическая компания', industry: 'Юр. услуги', metric: '+5.2x', result: 'заявок с сайта', period: '5 мес', icon: 'Scale' },
  { client: 'Сеть автосервисов', industry: 'Авто', metric: '+210%', result: 'звонков в месяц', period: '4 мес', icon: 'Car' },
  { client: 'Школа иностранных языков', industry: 'Образование', metric: 'ТОП-1', result: 'по 45 ключам', period: '7 мес', icon: 'GraduationCap' },
  { client: 'Служба доставки еды', industry: 'Food', metric: '+430%', result: 'заказов онлайн', period: '6 мес', icon: 'Pizza' },
  { client: 'Сеть фитнес-клубов', industry: 'Спорт', metric: '+180%', result: 'продаж абонементов', period: '5 мес', icon: 'Dumbbell' },
  { client: 'Строительный гипермаркет', industry: 'Стройматериалы', metric: '+290%', result: 'трафика по СНГ', period: '9 мес', icon: 'Hammer' },
  { client: 'Туристическое агентство', industry: 'Туризм', metric: '+6.1x', result: 'броней онлайн', period: '6 мес', icon: 'Plane' },
  { client: 'Центр косметологии', industry: 'Бьюти', metric: 'ТОП-3', result: 'по 92 запросам', period: '5 мес', icon: 'Sparkles' },
  { client: 'IT-аутсорсинговая компания', industry: 'IT/B2B', metric: '+260%', result: 'лидов с поиска', period: '8 мес', icon: 'Code' },
  { client: 'Розничный цветочный магазин', industry: 'Ритейл', metric: '+380%', result: 'заказов к праздникам', period: '4 мес', icon: 'Flower' },
  { client: 'Стоматологическая клиника', industry: 'Медицина', metric: 'ТОП-1', result: 'в своём городе', period: '7 мес', icon: 'Smile' },
  { client: 'Магазин бытовой техники', industry: 'Электроника', metric: '+225%', result: 'выручки за квартал', period: '6 мес', icon: 'Zap' },
  { client: 'Аутсорсинговая бухгалтерия', industry: 'Финансы', metric: '+4.4x', result: 'обращений', period: '5 мес', icon: 'Calculator' },
  { client: 'Зоомагазин с доставкой', industry: 'Зоотовары', metric: '+310%', result: 'трафика', period: '6 мес', icon: 'PawPrint' },
  { client: 'Ремонт квартир и офисов', industry: 'Услуги', metric: '+275%', result: 'заявок на ремонт', period: '5 мес', icon: 'Wrench' },
  { client: 'Ювелирный интернет-магазин', industry: 'Luxury', metric: 'ТОП-3', result: 'по премиум-запросам', period: '9 мес', icon: 'Gem' },
  { client: 'Сеть кофеен по франшизе', industry: 'HoReCa', metric: '+195%', result: 'трафика по франшизе', period: '7 мес', icon: 'Coffee' },
  { client: 'Платформа онлайн-курсов', industry: 'EdTech', metric: '+520%', result: 'регистраций', period: '8 мес', icon: 'BookOpen' },
];

export interface Plan {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export const plans: Plan[] = [
  {
    name: 'Старт',
    price: '18 000',
    period: '₽ / мес',
    tagline: 'Для малого бизнеса и новых сайтов',
    features: [
      'SEO-аудит сайта',
      'Сбор семантики до 300 запросов',
      'Оптимизация 10 страниц / мес',
      'Базовая техническая оптимизация',
      'Отчёт по позициям 1 раз в месяц',
      'Поддержка по email',
    ],
  },
  {
    name: 'Рост',
    price: '32 000',
    period: '₽ / мес',
    tagline: 'Оптимальный выбор для масштабирования',
    highlighted: true,
    badge: 'Хит продаж',
    features: [
      'Всё из тарифа «Старт»',
      'Семантика до 1000 запросов',
      'Оптимизация 30 страниц / мес',
      'Контент-маркетинг: 4 статьи',
      'Линкбилдинг и крауд-маркетинг',
      'Контекстная реклама (настройка)',
      'Отчёты 2 раза в месяц + созвоны',
      'Персональный менеджер',
    ],
  },
  {
    name: 'Доминирование',
    price: '48 000',
    period: '₽ / мес',
    tagline: 'Максимум для лидеров рынка',
    features: [
      'Всё из тарифа «Рост»',
      'Семантика без ограничений',
      'Оптимизация всего сайта',
      'Контент-маркетинг: 10+ статей',
      'Комплексный digital: SEO + PPC + SMM',
      'Сквозная аналитика и дашборды',
      'A/B тесты и работа над конверсией',
      'Выделенная команда специалистов',
      'Поддержка 24/7',
    ],
  },
];