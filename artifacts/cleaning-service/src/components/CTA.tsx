import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            {t("Bugunoq tozalikka buyurtma bering", "Book your cleaning today")}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 font-light">
            {t(
              "Uyingizga qulaylik va poklik olib kirishga tayyormiz. Birgina qo'ng'iroq va biz xizmatingizdamiz.",
              "We are ready to bring comfort and purity to your home. Just one call and we are at your service."
            )}
          </p>
          <Button size="lg" className="text-lg h-14 px-10 bg-background text-primary hover:bg-background/90" asChild>
            <a href="#contact">{t("Buyurtma berish", "Order Cleaning")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
