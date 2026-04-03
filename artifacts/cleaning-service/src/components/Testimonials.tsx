import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Malika K.",
      role: "Tashkent",
      textUz: "Gilamlarim xuddi yangidek bo'lib ketdi. Xizmat sifati a'lo darajada, barchaga tavsiya qilaman.",
      textEn: "My carpets look brand new. The quality of service is excellent, highly recommended.",
    },
    {
      name: "Rustam A.",
      role: "Tashkent",
      textUz: "Mebellarni tozalash jarayoni juda tez va professional tarzda amalga oshirildi. Rahmat!",
      textEn: "The furniture cleaning process was very fast and professional. Thank you!",
    },
    {
      name: "Aziza S.",
      role: "Tashkent",
      textUz: "Hid va dog'lardan asar ham qolmadi. Uydagi havo butunlay o'zgardi, pokiza va toza.",
      textEn: "Not a trace of odors or stains left. The air in the house completely changed, pure and clean.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">
            {t("Mijozlar Fikri", "Customer Testimonials")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-sm shadow-sm"
            >
              <p className="text-muted-foreground font-light italic mb-6">
                "{t(testi.textUz, testi.textEn)}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{testi.name}</h4>
                  <p className="text-sm text-muted-foreground">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
