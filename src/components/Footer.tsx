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
  const solutions = [
    "غرف التبريد والتجميد",
    "سيارات النقل المبرد",
    "وحدات التبريد الصناعية",
    "الصيانة والعقود",
  ];

  const companyLinks = ["من نحن", "عملياتنا", "قصص النجاح", "الوظائف"];

  const resources = ["المدونة", "دراسات الحالة", "الوثائق", "الدعم"];

  const legalLinks = [
    "سياسة الخصوصية",
    "الشروط والأحكام",
    "سياسة ملفات تعريف الارتباط",
    "اللائحة العامة لحماية البيانات",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" bg-gray-900  relative z-50" dir="rtl">
      <div className="absolute inset-0 -z-1 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5433ff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#20bdff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a5fecb" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Network lines */}
          <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
            <path d="M100,200 L300,150 L500,250 L700,100 L900,200 L1100,150 L1300,250" />
            <path d="M150,400 L350,350 L550,450 L750,300 L950,400 L1150,350 L1350,450" />
            <path d="M200,600 L400,550 L600,650 L800,500 L1000,600 L1200,550 L1400,650" />
            <path d="M100,800 L300,750 L500,850 L700,700 L900,800 L1100,750 L1300,850" />

            {/* Vertical connections */}
            <path d="M300,150 L350,350 L400,550 L300,750" />
            <path d="M700,100 L750,300 L800,500 L700,700" />
            <path d="M1100,150 L1150,350 L1200,550 L1100,750" />
          </g>

          {/* Network nodes */}
          <g>
            {[
              [300, 150],
              [500, 250],
              [700, 100],
              [900, 200],
              [1100, 150],
              [350, 350],
              [550, 450],
              [750, 300],
              [950, 400],
              [1150, 350],
              [400, 550],
              [600, 650],
              [800, 500],
              [1000, 600],
              [1200, 550],
              [300, 750],
              [500, 850],
              [700, 700],
              [900, 800],
              [1100, 750],
            ].map(([x, y], index) => (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="url(#lineGradient)"
                className="animate-pulse"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="z-50">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-secondary mb-6">
                  كوليفا
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                  نحول الأفكار إلى حقيقة من خلال أحدث تقنيات التبريد والتجميد،
                  والمحتوى الإبداعي، والتعليم التحويلي.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-400" />
                    <span className="text-gray-400">info@cooliva.com.sa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-blue-400" />
                    <span className="text-gray-400">
                      الرياض، المملكة العربية السعودية
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-lg font-bold mb-6">الحلول</h4>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-lg font-bold mb-6">الشركة</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-lg font-bold mb-6">الموارد</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-lg font-bold mb-6">قانوني</h4>
              <ul className="space-y-3">
                {legalLinks.map((legal, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {legal}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  ابق على اطلاع مع كوليفا
                </h3>
                <p className="text-gray-400 max-w-md">
                  احصل على أحدث الرؤى حول التكنولوجيا والإبداع والتطوير الشخصي
                  مباشرة في صندوق الوارد.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="أدخل عنوان بريدك الإلكتروني"
                  className="flex-1 px-6 py-3 gradient  rounded-lg text-white placeholder-white focus:outline-none focus:border-blue-500 transition-colors"
                  dir="rtl"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 gradient text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  اشتراك ←
                </motion.button>
              </div>
            </div>

            <p className="text-sm text-white mt-4">
              لا توجد رسائل مزعجة، يمكن إلغاء الاشتراك في أي وقت.
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-500"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-white font-bold mb-2">تابعنا</h4>
                <p className="text-gray-400 text-sm">
                  ابق على تواصل عبر وسائل التواصل الاجتماعي
                </p>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="gradient  text-white hover:text-white w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 order-2 md:order-1">
                <p>© 2025 كوليفا. جميع الحقوق محفوظة. </p>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="bg-secondary hover:secondary p-3 rounded-full text-white shadow-lg order-1 md:order-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="العودة للأعلى"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
