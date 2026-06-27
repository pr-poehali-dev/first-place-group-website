import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-sm bg-card border border-border rounded-xl shadow-lg p-4">
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        На сайте используются файлы cookie. Продолжая использовать сайт, вы соглашаетесь с{" "}
        <a href="/privacy" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
          политикой конфиденциальности
        </a>
        .
      </p>
      <button
        onClick={accept}
        className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Разрешить
      </button>
    </div>
  );
};

export default CookieBanner;
