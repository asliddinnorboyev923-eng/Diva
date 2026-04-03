import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Wind, Droplets, Sun } from "lucide-react";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      titleUz: "Ko'zdan kechirish",
      titleEn: "Inspection",
      descUz: "Mato turi va ifloslanish darajasini aniqlaymiz.",
      descEn: "We determine the fabric type and level of soiling.",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      titleUz: "Changdan tozalash",
      titleEn: "Vacuuming",
      descUz: "Kuchli changyutgich bilan quruq tozalash o'tkazamiz.",
      descEn: "Dry cleaning with a powerful industrial vacuum.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      titleUz: "Chuqur tozalash",
      titleEn: "Deep Cleaning",
      descUz: "Maxsus vositalar bilan dog' va kirlarni yuvamiz.",
      descEn: "Washing away stains and dirt with special solutions.",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      titleUz: "Quritish",
      titleEn: "Drying",
      descUz: "Qisqa vaqt ichida to'liq quritib, foydalanishga topshiramiz.",
      descEn: "Complete drying in a short time, ready for use.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-4/3 overflow-hidden rounded-sm"
            >
              <img
                src="/process-vacuum.png"
                alt="Cleaning process"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl mb-6 text-foreground">
              {t("Ish Jarayoni", "Cleaning Process")}
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              {t(
                "Har bir bosqich qat'iy nazorat ostida, xalqaro standartlarga muvofiq amalga oshiriladi.",
                "Every step is under strict control, carried out in accordance with international standards."
              )}
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary relative z-10 bg-background">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-medium mb-1 text-foreground">
                      {t(step.titleUz, step.titleEn)}
                    </h4>
                    <p className="text-muted-foreground font-light">
                      {t(step.descUz, step.descEn)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
