import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SITE_TYPES = [
  { id: 'landing', label: 'Лендинг', base: 18000, icon: 'FileText' },
  { id: 'corporate', label: 'Корпоративный', base: 28000, icon: 'Building2' },
  { id: 'shop', label: 'Интернет-магазин', base: 42000, icon: 'ShoppingCart' },
  { id: 'portal', label: 'Портал / Маркетплейс', base: 60000, icon: 'Globe' },
];

const REGIONS = [
  { id: 'city', label: 'Один город', mult: 1 },
  { id: 'region', label: 'Регион', mult: 1.25 },
  { id: 'russia', label: 'Вся Россия', mult: 1.55 },
];

const GOALS = [
  { id: 'seo', label: 'SEO-продвижение', add: 0, icon: 'Search' },
  { id: 'ppc', label: 'Контекстная реклама', add: 12000, icon: 'MousePointerClick' },
  { id: 'smm', label: 'SMM и таргет', add: 9000, icon: 'Share2' },
  { id: 'content', label: 'Контент-маркетинг', add: 8000, icon: 'PenLine' },
];

const COMPETITION = [
  { id: 'low', label: 'Низкая', mult: 1 },
  { id: 'mid', label: 'Средняя', mult: 1.2 },
  { id: 'high', label: 'Высокая', mult: 1.45 },
];

const fmt = (n: number) => n.toLocaleString('ru-RU');

const Calculator = () => {
  const [siteType, setSiteType] = useState(SITE_TYPES[1]);
  const [region, setRegion] = useState(REGIONS[0]);
  const [competition, setCompetition] = useState(COMPETITION[1]);
  const [goals, setGoals] = useState<string[]>(['seo']);
  const [pages, setPages] = useState(20);

  const toggleGoal = (id: string) => {
    if (id === 'seo') return;
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));
  };

  const total = useMemo(() => {
    const base = siteType.base * region.mult * competition.mult;
    const goalsAdd = GOALS.filter((g) => goals.includes(g.id)).reduce((s, g) => s + g.add, 0);
    const pagesAdd = Math.max(0, pages - 10) * 350;
    return Math.round((base + goalsAdd + pagesAdd) / 1000) * 1000;
  }, [siteType, region, competition, goals, pages]);

  const Chip = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
        active
          ? 'border-primary bg-primary/15 text-primary shadow-[0_0_20px_-6px_hsl(var(--electric))]'
          : 'border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="calculator" className="relative py-24 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Калькулятор</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 uppercase">
            Узнайте <span className="text-gradient-anim">стоимость</span> за минуту
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Настройте параметры проекта — мы покажем ориентировочную цену продвижения прямо сейчас.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="glass rounded-3xl p-7 md:p-9 border border-border space-y-8">
            <div>
              <p className="font-display uppercase tracking-wide text-sm mb-3 text-muted-foreground">Тип сайта</p>
              <div className="grid grid-cols-2 gap-3">
                {SITE_TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSiteType(t)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-300 ${
                      siteType.id === t.id
                        ? 'border-primary bg-primary/10 shadow-[0_0_24px_-8px_hsl(var(--electric))]'
                        : 'border-border bg-muted/30 hover:border-primary/50'
                    }`}
                  >
                    <Icon name={t.icon} size={22} className={siteType.id === t.id ? 'text-primary' : 'text-muted-foreground'} />
                    <span className="font-medium text-sm">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display uppercase tracking-wide text-sm mb-3 text-muted-foreground">География</p>
              <div className="flex flex-wrap gap-3">
                {REGIONS.map((r) => (
                  <Chip key={r.id} active={region.id === r.id} onClick={() => setRegion(r)}>
                    {r.label}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display uppercase tracking-wide text-sm mb-3 text-muted-foreground">Конкуренция в нише</p>
              <div className="flex flex-wrap gap-3">
                {COMPETITION.map((c) => (
                  <Chip key={c.id} active={competition.id === c.id} onClick={() => setCompetition(c)}>
                    {c.label}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display uppercase tracking-wide text-sm mb-3 text-muted-foreground">Услуги</p>
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => toggleGoal(g.id)}
                    className={`flex items-center gap-2.5 p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                      goals.includes(g.id)
                        ? 'border-secondary bg-secondary/15'
                        : 'border-border bg-muted/30 hover:border-secondary/50'
                    } ${g.id === 'seo' ? 'opacity-90 cursor-default' : ''}`}
                  >
                    <Icon name={g.icon} size={18} className={goals.includes(g.id) ? 'text-secondary' : 'text-muted-foreground'} />
                    <span className="font-medium text-sm">{g.label}</span>
                    {g.id === 'seo' && <span className="ml-auto text-[10px] text-muted-foreground">базово</span>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-display uppercase tracking-wide text-sm text-muted-foreground">Объём работ (страниц)</p>
                <span className="font-display text-primary text-lg">{pages}</span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full accent-[hsl(var(--electric))] cursor-pointer"
              />
            </div>
          </div>

          <div className="relative">
            <div className="glow-border glass rounded-3xl p-8 sticky top-24 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary/30 blur-3xl animate-glow-pulse" />
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-display">Ваша цена от</p>
              <div className="my-4">
                <span className="font-display text-5xl md:text-6xl font-bold text-gradient-anim">{fmt(total)}</span>
                <span className="text-2xl text-muted-foreground ml-1">₽/мес</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Финальная стоимость зависит от детального аудита. Расчёт ориентировочный.
              </p>
              <ul className="space-y-2.5 mb-7 text-sm">
                {[
                  'Бесплатный аудит вашего сайта',
                  'Стратегия продвижения за 3 дня',
                  'Прозрачные отчёты каждый месяц',
                  'Договор и гарантия результата',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full font-display uppercase tracking-wide text-base bg-orange text-white hover:bg-orange-soft transition-colors h-13 py-6 shadow-[0_10px_40px_-8px_hsl(var(--orange))]"
              >
                Получить точный расчёт
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;