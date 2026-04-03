import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", uz: "Xizmatlar", en: "Services" },
    { href: "#process", uz: "Jarayon", en: "Process" },
    { href: "#about", uz: "Biz haqimizda", en: "About" },
    { href: "#contact", uz: "Aloqa", en: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <span className={`text-2xl font-serif font-bold tracking-tight cursor-pointer ${isScrolled ? "text-foreground" : "text-white"}`}>
            AuraClean
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {t(link.uz, link.en)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border/30 pl-4">
            <button
              onClick={() => setLanguage(language === "uz" ? "en" : "uz")}
              className={`text-sm font-medium uppercase transition-colors hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {language === "uz" ? "EN" : "UZ"}
            </button>
            <Button
              className={
                isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-primary hover:bg-white/90"
              }
              asChild
            >
              <a href="#contact">{t("Buyurtma berish", "Order Cleaning")}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground py-2 border-b border-border/50"
              >
                {t(link.uz, link.en)}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => {
                  setLanguage(language === "uz" ? "en" : "uz");
                  setIsMobileMenuOpen(false);
                }}
                className="text-base font-medium uppercase text-foreground"
              >
                {language === "uz" ? "Switch to English" : "O'zbek tiliga o'tish"}
              </button>
              <Button asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("Buyurtma berish", "Order Cleaning")}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
