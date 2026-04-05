import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function BeforeAfter() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">
            {t("Natijalar", "Результаты")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Farqni o'zingiz ko'ring. Dog'lar va kirlar o'rnini toza va musaffo muhit egallaydi.",
              "Убедитесь сами. Пятна и загрязнения уходят — остаётся чистота и свежесть."
            )}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative select-none group cursor-ew-resize rounded-sm overflow-hidden"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          <div className="relative aspect-video">
            {/* After Image (Background) */}
            <img
              src="/carpet-after.png"
              alt="Clean carpet"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 text-sm rounded-sm font-medium">
              {t("Keyin", "После")}
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/carpet-before.png"
                alt="Dirty carpet"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 text-sm rounded-sm font-medium">
                {t("Oldin", "До")}
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-primary">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-primary absolute rotate-180">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
