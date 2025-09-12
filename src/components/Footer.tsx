import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Snowflake,
  Send,
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
    "عزل سيارات النقل المبرد",
    "وحدات التبريد الصناعية",
    "الصيانة والعقود",
    "الاستشارات الفنية",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "إنستغرام" },
    { icon: Linkedin, href: "#", label: "لينكدإن" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Snowflake className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">كوليفا للتبريد</h3>
                <p className="text-white/80 text-sm">حلول التبريد المتكاملة</p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed">
              مؤسسة متخصصة في توريد وتركيب غرف التبريد والتجميد بجميع أنواعها،
              نقدم خدمات متميزة بأعلى معايير الجودة والاحترافية.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/90">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/90">info@cooliva-sa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/90">
                  الرياض، المملكة العربية السعودية
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-white/80 text-sm leading-relaxed"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              اشترك في النشرة الإخبارية
            </h4>
            <p className="text-white/80 mb-4 text-sm">
              احصل على آخر الأخبار والعروض الخاصة
            </p>

            <div className="flex gap-2 mb-6">
              <Input
                placeholder="أدخل بريدك الإلكتروني"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-right"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-4">تابعنا على</h5>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-secondary transition-all duration-300 rounded-full flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm text-center md:text-right">
            © 2024 كوليفا للتبريد. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-white/80 hover:text-secondary transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-secondary transition-colors"
            >
              الشروط والأحكام
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-secondary transition-colors"
            >
              سياسة الاستبدال والاسترداد
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
