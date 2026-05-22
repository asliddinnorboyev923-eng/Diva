import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80&auto=format&fit=crop",
    alt: "Clean luxury sofa",
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80&auto=format&fit=crop",
    alt: "Clean carpet and furniture",
  },
  {
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80&auto=format&fit=crop",
    alt: "Clean mattress and bedroom",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop",
    alt: "Professional cleaning service",
  },
];

export function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={slides[current].url}
            alt={slides[current].alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl -mt-12"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-white leading-[1.15] mb-4">
            {t(
              "Mebel va gilamlaringizni yangi holatga qaytaramiz — 1 kunda toza, yangi va yoqimli hid bilan",
              "Вернем вашей мебели и коврам новый вид — чистота, свежесть и приятный запах всего за 1 день"
            )}
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl font-light">
            {t(
              "Bizning mutaxassislarimiz mebel, gilam va matraslaringizni dog', bakteriya va changlardan tozalab, uyingizga musaffolik baxsh etadi.",
              "Наши специалисты очистят мебель, ковры и матрасы от пятен, бактерий и пыли, вернув вашему дому свежесть и чистоту."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg h-14 px-8 bg-white text-foreground hover:bg-white/90" asChild>
              <a href="#contact">{t("Buyurtma berish", "Заказать уборку")}</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-white text-white hover:bg-white/10" asChild>
              <a href="#services">{t("Xizmatlarimiz", "Наши услуги")}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
