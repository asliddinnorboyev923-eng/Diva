import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, Clock, Award, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      titleUz: "Ekologik Toza",
      titleRu: "Экологически чисто",
      descUz: "Sog'liq uchun zararsiz, allergiya chaqirmaydigan vositalar.",
      descRu: "Безопасные для здоровья, гипоаллергенные чистящие средства.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titleUz: "Tezkor Xizmat",
      titleRu: "Быстрый сервис",
      descUz: "O'z vaqtida yetib borish va ishni tez fursatda tugatish.",
      descRu: "Приезжаем вовремя и выполняем работу в кратчайшие сроки.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      titleUz: "Premium Sifat",
      titleRu: "Премиум качество",
      descUz: "Eng yuqori darajadagi xizmat ko'rsatish kafolati.",
      descRu: "Гарантия обслуживания на высочайшем уровне.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      titleUz: "Tajribali Jamoa",
      titleRu: "Опытная команда",
      descUz: "Malakali va maxsus tayyorgarlikdan o'tgan ustalar.",
      descRu: "Квалифицированные специалисты с профессиональной подготовкой.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">
            {t("Nima Uchun Biz?", "Почему мы?")}
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
                {t(feature.titleUz, feature.titleRu)}
              </h3>
              <p className="text-muted-foreground font-light">
                {t(feature.descUz, feature.descRu)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
