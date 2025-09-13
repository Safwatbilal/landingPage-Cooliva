import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Calculator,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here

    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      location: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف الرئيسي",
      value: "966-11-123-4567+",
      description: "متاح من 8 صباحاً حتى 6 مساءً",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "966-50-987-6543+",
      description: "متاح 24/7 للاستفسارات السريعة",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@cooling-company.com",
      description: "للاستفسارات والعروض التجارية",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، حي النخيل، شارع الملك فهد",
      description: "مقر الشركة الرئيسي",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            اتصل بنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            احصل على عرض سعر مجاني لمشروعك أو تواصل معنا للاستفسار عن خدماتنا
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-3">
                  <Calculator className="w-7 h-7 text-primary" />
                  طلب عرض سعر مجاني
                </CardTitle>
                <p className="text-muted-foreground">
                  املأ النموذج وسنتواصل معك خلال 24 ساعة بعرض سعر مفصل
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="966-5X-XXX-XXXX+"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@domain.com"
                      className="mt-2"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">نوع المشروع *</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="مطعم، مستشفى، مصنع، إلخ"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">الموقع *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="المدينة أو المنطقة"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">تفاصيل المشروع</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب تفاصيل مشروعك أو متطلباتك الخاصة..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال طلب العرض
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">
                  معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-secondary">ساعات العمل</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      السبت - الخميس:
                    </span>
                    <span className="font-medium">8:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الجمعة:</span>
                    <span className="font-medium">مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">خدمة الطوارئ:</span>
                    <span className="font-medium text-primary">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-4"
                onClick={() =>
                  window.open("https://wa.me/966509876543", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساب
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl py-4"
                onClick={() => window.open("tel:+966111234567")}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصال مباشر
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
