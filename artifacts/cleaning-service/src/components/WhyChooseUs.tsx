import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, Clock, Award, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      titleUz: "Ekologik Toza",
      titleEn: "Eco-Friendly",
      descUz: "Sog'liq uchun zararsiz, allergiya chaqirmaydigan vositalar.",
      descEn: "Safe for health, hypoallergenic cleaning solutions.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titleUz: "Tezkor Xizmat",
      titleEn: "Fast Service",
      descUz: "O'z vaqtida yetib borish va ishni tez fursatda tugatish.",
      descEn: "On-time arrival and completing work swiftly.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      titleUz: "Premium Sifat",
      titleEn: "Premium Quality",
      descUz: "Eng yuqori darajadagi xizmat ko'rsatish kafolati.",
      descEn: "Guarantee of the highest level of service.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      titleUz: "Tajribali Jamoa",
      titleEn: "Experienced Team",
      descUz: "Malakali va maxsus tayyorgarlikdan o'tgan ustalar.",
      descEn: "Qualified and specially trained professionals.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">
            {t("Nima Uchun Biz?", "Why Choose Us?")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">
                {t(feature.titleUz, feature.titleEn)}
              </h3>
              <p className="text-muted-foreground font-light">
                {t(feature.descUz, feature.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
