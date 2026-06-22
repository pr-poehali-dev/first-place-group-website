import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Calculator from '@/components/Calculator';
import HeroChart from '@/components/HeroChart';
import { cases, plans } from '@/data/content';

const HERO_BG =
  'https://cdn.poehali.dev/projects/a028d389-49b8-49a1-9092-639f7a3d594c/files/e0855e37-0190-473e-b6aa-fa202564004e.jpg';

const NAV = [
  { id: 'cases', label: 'Кейсы' },
  { id: 'calculator', label: 'Калькулятор' },
  { id: 'pricing', label: 'Тарифы' },
  { id: 'contacts', label: 'Контакты' },
];

const stats = [
  { value: '500+', label: 'проектов в ТОПе' },
  { value: '9 лет', label: 'на рынке SEO' },
  { value: '94%', label: 'клиентов с нами 2+ года' },
  { value: '24/7', label: 'поддержка' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen mesh-bg text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/60">
        <div className="container max-w-7xl flex items-center justify-between h-16 md:h-18">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-display font-bold text-white">
              1
            </div>
            <div className="leading-none text-left">
              <p className="font-display font-bold text-base tracking-wide">FIRST PLACE GROUP</p>
              <p className="text-[10px] text-muted-foreground tracking-wider">Фёрст Плейс Групп</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo('contacts')}
              className="hidden sm:flex font-display uppercase tracking-wide bg-orange text-white hover:bg-orange-soft"
            >
              Связаться
            </Button>
            <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden glass border-t border-border/60 px-4 py-4 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-1.5 text-muted-foreground">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 hero-dark text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240_30%_6%)]/40 via-[hsl(240_30%_6%)]/75 to-background" />
          <HeroChart />
        </div>

        <div className="container max-w-7xl relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8 border border-white/10 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-orange animate-glow-pulse" />
              <span className="text-sm text-white/70">Группа компаний по SEO и Digital маркетингу</span>
            </div>

            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl md:text-7xl lg:text-8xl animate-fade-in">
              Выводим сайты <br />
              <span className="text-gradient-anim">на первое место</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mt-7 max-w-2xl animate-fade-in" style={{ animationDelay: '0.15s' }}>
              First Place Group — это рост трафика, заявок и продаж. Берём ваш сайт в ТОП поисковой выдачи
              и превращаем посетителей в клиентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                onClick={() => scrollTo('calculator')}
                className="font-display uppercase tracking-wide text-base h-14 px-8 bg-orange text-white hover:bg-orange-soft shadow-[0_10px_40px_-8px_hsl(var(--orange))]"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('cases')}
                className="font-display uppercase tracking-wide text-base h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Смотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.45s' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</p>
                  <p className="text-sm text-white/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-5 border-y border-border/60 overflow-hidden glass">
        <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10 items-center text-muted-foreground font-display uppercase tracking-widest text-sm">
              {['SEO-продвижение', '•', 'Контекст', '•', 'SMM', '•', 'Контент-маркетинг', '•', 'Аналитика', '•', 'Линкбилдинг', '•'].map(
                (w, j) => (
                  <span key={j} className={w === '•' ? 'text-primary' : ''}>
                    {w}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cases */}
      <section id="cases" className="py-24 px-4 bg-muted/50">
        <div className="container max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Кейсы</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 uppercase">
                20 историй <span className="text-gradient-anim">роста</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Реальные результаты наших клиентов из разных ниш — от медицины до e-commerce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cases.map((c, i) => (
              <div
                key={c.client}
                className="group bg-card rounded-2xl p-6 border border-border hover-lift cursor-default shadow-sm"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-orange/15 flex items-center justify-center">
                    <Icon name={c.icon} size={20} className="text-orange" />
                  </div>
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted">
                    {c.industry}
                  </span>
                </div>
                <p className="font-display text-4xl font-bold text-gradient">{c.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">{c.result}</p>
                <div className="border-t border-border/60 mt-5 pt-4 flex items-center justify-between">
                  <p className="font-medium text-sm">{c.client}</p>
                  <span className="text-xs text-muted-foreground shrink-0 ml-2">{c.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Тарифы</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 uppercase">
              Планы <span className="text-gradient-anim">продвижения</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Гибкие тарифы под любой бюджет и задачу. Можно изменить состав услуг под ваш проект.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border flex flex-col ${
                  p.highlighted
                    ? 'bg-gradient-to-br from-[hsl(240_30%_8%)] to-[hsl(245_35%_14%)] text-white border-orange/40 scale-[1.03] shadow-[0_30px_80px_-28px_hsl(var(--orange))]'
                    : 'bg-card border-border shadow-sm'
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-display uppercase tracking-wide bg-orange text-white whitespace-nowrap shadow-[0_8px_24px_-6px_hsl(var(--orange))]">
                    {p.badge}
                  </span>
                )}
                <p className="font-display text-2xl font-bold uppercase">{p.name}</p>
                <p className={`text-sm mt-1 mb-6 ${p.highlighted ? 'text-white/60' : 'text-muted-foreground'}`}>{p.tagline}</p>
                <div className="mb-6">
                  <span className={`font-display text-5xl font-bold ${p.highlighted ? 'text-orange' : ''}`}>
                    {p.price}
                  </span>
                  <span className={`ml-1 ${p.highlighted ? 'text-white/60' : 'text-muted-foreground'}`}>{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Icon name="Check" size={17} className="text-orange mt-0.5 shrink-0" />
                      <span className={p.highlighted ? 'text-white/80' : 'text-muted-foreground'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  onClick={() => scrollTo('contacts')}
                  className={`w-full font-display uppercase tracking-wide ${
                    p.highlighted
                      ? 'bg-orange text-white hover:bg-orange-soft'
                      : 'bg-muted text-foreground hover:bg-muted/70'
                  }`}
                >
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 px-4 bg-muted/50">
        <div className="container max-w-6xl">
          <div className="rounded-[2rem] p-8 md:p-14 overflow-hidden relative bg-gradient-to-br from-[hsl(240_30%_8%)] to-[hsl(245_35%_13%)] text-white border border-orange/30 shadow-[0_40px_100px_-40px_hsl(var(--orange))]">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange/30 blur-3xl animate-glow-pulse" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-orange/40 blur-3xl animate-glow-pulse" />

            <div className="grid lg:grid-cols-2 gap-12 relative">
              <div>
                <span className="text-orange font-display uppercase tracking-[0.3em] text-sm">Контакты</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 uppercase leading-tight">
                  Обсудим ваш <span className="text-orange">проект?</span>
                </h2>
                <p className="text-white/70 mt-5 max-w-md">
                  Оставьте заявку — проведём бесплатный аудит сайта и подготовим стратегию роста в течение 3 дней.
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    { icon: 'Phone', label: '+7 (495) 123-45-67', sub: 'Звонки по будням 9:00–20:00' },
                    { icon: 'Mail', label: 'hello@firstplace.group', sub: 'Ответим в течение часа' },
                    { icon: 'MapPin', label: 'Москва, Сити, башня «Федерация»', sub: 'Работаем по всей России' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-orange/20 border border-orange/30 flex items-center justify-center shrink-0">
                        <Icon name={c.icon} size={20} className="text-orange" />
                      </div>
                      <div>
                        <p className="font-medium">{c.label}</p>
                        <p className="text-sm text-white/60">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    placeholder="Ваше имя"
                    className="w-full h-13 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-orange outline-none transition-colors"
                  />
                  <input
                    placeholder="Телефон"
                    className="w-full h-13 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-orange outline-none transition-colors"
                  />
                </div>
                <input
                  placeholder="Сайт или ниша"
                  className="w-full h-13 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-orange outline-none transition-colors"
                />
                <textarea
                  placeholder="Кратко о задаче"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:border-orange outline-none transition-colors resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-display uppercase tracking-wide text-base h-14 bg-orange text-white hover:bg-orange-soft shadow-[0_10px_40px_-8px_hsl(var(--orange))]"
                >
                  Получить бесплатный аудит
                </Button>
                <p className="text-xs text-white/50 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(240_30%_7%)] text-white py-10 px-4 border-t-4 border-orange">
        <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center font-display font-bold text-white text-sm">
              1
            </div>
            <span className="font-display font-bold tracking-wide">FIRST PLACE GROUP</span>
          </div>
          <p className="text-sm text-white/60">© 2026 Фёрст Плейс Групп. SEO и Digital маркетинг.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;