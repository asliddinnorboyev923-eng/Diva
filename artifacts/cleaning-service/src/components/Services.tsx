import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sofa, Wind, Bed } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Sofa className="w-8 h-8 stroke-1" />,
      titleUz: "Mebel tozalash",
      titleEn: "Furniture Cleaning",
      descUz: "Yumshoq mebellarni chuqur tozalash, dog'larni ketkazish va asl rangini tiklash.",
      descEn: "Deep cleaning for upholstered furniture, stain removal, and restoring original colors.",
    },
    {
      icon: <Wind className="w-8 h-8 stroke-1" />,
      titleUz: "Gilam tozalash",
      titleEn: "Carpet Cleaning",
      descUz: "Gilamlarni joyida yuvish, chang va bakteriyalarni 99% gacha yo'q qilish.",
      descEn: "On-site carpet washing, eliminating up to 99% of dust and bacteria.",
    },
    {
      icon: <Bed className="w-8 h-8 stroke-1" />,
      titleUz: "Matras tozalash",
      titleEn: "Mattress Cleaning",
      descUz: "Sog'lom uyqu uchun matraslarni gigiyenik tozalash va hidlarni yo'qotish.",
      descEn: "Hygienic mattress cleaning and odor removal for a healthy sleep environment.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">
            {t("Bizning Xizmatlar", "Our Services")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Har bir detalga alohida e'tibor qaratamiz. Eng zamonaviy uskunalar yordamida uyingiz pokizaligini ta'minlaymiz.",
              "We pay attention to every detail. Using the most modern equipment, we ensure the purity of your home."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card p-8 group hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-card-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">
                {t(service.titleUz, service.titleEn)}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t(service.descUz, service.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
