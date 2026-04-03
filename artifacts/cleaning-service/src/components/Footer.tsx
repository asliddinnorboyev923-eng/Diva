import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-serif font-bold tracking-tight mb-2 block text-white">
            Diva Clean
          </span>
          <p className="text-background/60 text-sm max-w-sm font-light">
            {t("Premium tozalash xizmatlari. Uyingiz uchun mukammal poklik.", "Премиум-услуги уборки. Безупречная чистота для вашего дома.")}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6 text-sm text-background/80">
            <a href="#services" className="hover:text-white transition-colors">{t("Xizmatlar", "Услуги")}</a>
            <a href="#about" className="hover:text-white transition-colors">{t("Biz haqimizda", "О нас")}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t("Aloqa", "Контакты")}</a>
          </div>
          <p className="text-xs text-background/40">
            © {year} Diva Clean. {t("Barcha huquqlar himoyalangan.", "Все права защищены.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
