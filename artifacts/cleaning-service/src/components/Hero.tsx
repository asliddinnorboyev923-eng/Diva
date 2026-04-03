import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Luxury clean living room"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl -mt-12"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            {t(
              "Mebelingizni yangi holatga qaytaramiz — 1 kunda toza, yangi va yoqimli hid bilan",
              "Вернем вашей мебели новый вид — чистота, свежесть и приятный запах всего за 1 день"
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
            {t(
              "Bizning mutaxassislarimiz mebel va gilamlaringizni dog', bakteriya va changlardan tozalab, uyingizga musaffolik baxsh etadi.",
              "Наши специалисты очистят мебель и ковры от пятен, бактерий и пыли, вернув вашему дому свежесть и чистоту."
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
