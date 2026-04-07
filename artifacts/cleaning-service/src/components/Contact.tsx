import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_TOKEN = "8623785697:AAFLIPX2MSTsdmrHYhcFONTjE031ZHDk7lM";
const TELEGRAM_CHAT_ID = "-1003880455939";

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text =
      `📋 *Yangi ariza / Новая заявка*\n\n` +
      `👤 *Ism / Имя:* ${name}\n` +
      `📞 *Telefon / Телефон:* ${phone}\n` +
      `💬 *Xabar / Сообщение:* ${message || "—"}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!res.ok) throw new Error("Telegram API error");

      toast({
        title: t("Arizangiz qabul qilindi!", "Заявка принята!"),
        description: t("Tez orada siz bilan bog'lanamiz.", "Мы свяжемся с вами в ближайшее время."),
      });
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      toast({
        title: t("Xatolik yuz berdi", "Ошибка отправки"),
        description: t("Iltimos, qayta urinib ko'ring.", "Пожалуйста, попробуйте снова."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 text-foreground">
              {t("Biz Bilan Bog'laning", "Свяжитесь с нами")}
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              {t(
                "Savollaringiz bormi yoki xizmatga buyurtma bermoqchimisiz? Biz sizga yordam berishdan xursandmiz.",
                "Есть вопросы или хотите заказать услугу? Мы рады вам помочь."
              )}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("Telefon", "Телефон")}</p>
                  <a href="tel:+998997554633" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                    +998 99 755 46 33
                  </a>
                  <a href="tel:+998770394242" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                    +998 77 039 42 42
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telegram / WhatsApp</p>
                  <a href="tel:+998997554633" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                    +998 99 755 46 33
                  </a>
                  <a href="tel:+998770394242" className="block text-lg font-medium text-foreground hover:text-primary transition-colors">
                    +998 77 039 42 42
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("Manzil", "Адрес")}</p>
                  <p className="text-lg font-medium text-foreground">
                    Termez, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-sm border border-card-border shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {t("Ismingiz", "Ваше имя")}
                </label>
                <Input
                  required
                  placeholder={t("Ism", "Имя")}
                  className="bg-background"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {t("Telefon raqamingiz", "Номер телефона")}
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="+998"
                  className="bg-background"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {t("Xabar", "Сообщение")}
                </label>
                <Textarea
                  placeholder={t("Qanday xizmat kerak?", "Какая услуга вас интересует?")}
                  className="bg-background min-h-[120px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base mt-2" disabled={isSubmitting}>
                {isSubmitting ? t("Yuborilmoqda...", "Отправка...") : t("Yuborish", "Отправить")}
              </Button>
            </form>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-sm border border-card-border shadow-sm"
          style={{ height: "380px" }}
        >
          <iframe
            title="Diva Clean Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=67.252806%2C37.211611%2C67.272806%2C37.231611&layer=mapnik&marker=37.221611%2C67.262806"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
