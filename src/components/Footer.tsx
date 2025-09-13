import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Clock,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "المشاريع", href: "#projects" },
    { label: "اتصل بنا", href: "#contact" },
  ];

  const services = [
    "غرف التبريد والتجميد",
    "سيارات النقل المبرد",
    "وحدات التبريد الصناعية",
    "الصيانة والعقود",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "فيسبوك",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "تويتر",
      hoverColor: "hover:bg-sky-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "إنستجرام",
      hoverColor: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "لينكد إن",
      hoverColor: "hover:bg-blue-700",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "الرياض، حي النخيل، شارع الملك فهد",
    },
    {
      icon: Clock,
      text: "ساعات العمل: من 8:00 صباحاً إلى 6:00 مساءً",
    },
    {
      icon: Phone,
      text: ["966-11-123-4567+", "966-11-765-4321+"],
    },
    {
      icon: Mail,
      text: "info@cooling-company.com",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=78&h=78&fit=crop", // Cold storage room
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=78&h=78&fit=crop", // Refrigerated truck
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=78&h=78&fit=crop", // Industrial cooling unit
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=78&h=78&fit=crop", // Freezer installation
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=78&h=78&fit=crop", // HVAC maintenance
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=78&h=78&fit=crop", // Commercial refrigeration
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-0" dir="rtl ">
      {/* Main Footer Content */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="mb-6">
              <img
                src="/public/logo/PNG/MainLogo.png"
                alt="شعار الشركة"
                className="h-[300px] w-[300px] mb-4 mx-auto md:mx-0"
              />
            </div>

            {/* Social Media Links */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <ul className="space-y-0">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="py-4 border-b border-gray-600 last:border-b-0 transition-all duration-300 hover:pr-3 group"
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
                  >
                    <ChevronRight
                      size={16}
                      className="text-blue-500 ml-3 flex-shrink-0 rotate-180"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-3"
                >
                  <info.icon
                    size={24}
                    className="text-blue-500 flex-shrink-0 mb-4 md:mb-0"
                  />
                  <div className="text-gray-400 leading-relaxed flex-1">
                    {Array.isArray(info.text)
                      ? info.text.map((item, i) => (
                          <span key={i} className="block">
                            {item}
                          </span>
                        ))
                      : info.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-white text-lg font-bold mb-6 text-center md:text-right">
              معرض أعمالنا
            </h4>
            <div className="grid grid-cols-3 gap-1">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={`معرض ${index + 1}`}
                    className="w-full h-20 object-cover border-2 border-white hover:opacity-80 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start gap-2 mt-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`bg-gray-700 text-gray-400 w-12 h-12 flex items-center justify-center text-xl transition-all duration-300 ${social.hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-right order-2 md:order-1">
              <p>
                <span className="font-bold text-gray-500 ml-2">COOLIVA</span>{" "}
                جميع الحقوق محفوظة © 2025
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm order-1 md:order-2">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                الشروط والأحكام
              </a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white shadow-lg order-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="العودة للأعلى"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
