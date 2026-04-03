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
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-white/30 text-white text-sm font-medium tracking-widest uppercase backdrop-blur-sm">
            {t("Premium Tozalash Xizmati", "Premium Cleaning Service")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            {t("Chuqur tozalash. Yangi uy. Premium xizmat.", "Deep Clean. Fresh Home. Premium Service.")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light">
            {t(
              "Bizning mutaxassislarimiz mebel va gilamlaringizni dog', bakteriya va changlardan tozalab, uyingizga musaffolik baxsh etadi.",
              "Our experts restore your furniture and carpets, removing stains, bacteria, and dust to bring pure freshness back to your home."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg h-14 px-8 bg-white text-foreground hover:bg-white/90" asChild>
              <a href="#contact">{t("Buyurtma berish", "Order Cleaning")}</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-white text-white hover:bg-white/10" asChild>
              <a href="#services">{t("Xizmatlarimiz", "Our Services")}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
