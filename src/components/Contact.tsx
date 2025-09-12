import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 11 234 5678", "+966 50 123 4567"],
      description: "متاحون للرد على استفساراتكم",
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@cooliva-sa.com", "sales@cooliva-sa.com"],
      description: "نرد على رسائلكم خلال 24 ساعة",
    },
    {
      icon: MapPin,
      title: "موقعنا",
      details: [
        "الرياض، المملكة العربية السعودية",
        "حي الملك فهد، شارع الأمير محمد",
      ],
      description: "زوروا مقرنا الرئيسي",
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["السبت - الخميس: 8ص - 6م", "الجمعة: مغلق"],
      description: "دعم فني 24/7 للطوارئ",
    },
  ];

  const services = [
    "غرف التبريد والتجميد",
    "عزل سيارات النقل المبرد",
    "وحدات التبريد",
    "الصيانة والعقود",
    "استشارة فنية",
    "أخرى",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("تم إرسال طلبكم بنجاح!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">
            اتصل بنا
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            احصل على
            <span className="text-primary"> عرض سعر مجاني</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-primary font-medium mb-1"
                        >
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Quick Contact */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">واتساب مباشر</h3>
                <p className="mb-4 text-white/90">
                  للاستفسارات السريعة والطوارئ
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 w-full">
                  تواصل عبر واتساب
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  نموذج طلب عرض سعر
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="05xxxxxxxx"
                        required
                        className="text-right"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="example@email.com"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">نوع الخدمة المطلوبة *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger className="text-right">
                        <SelectValue placeholder="اختر نوع الخدمة" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">تفاصيل المشروع *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="اكتب تفاصيل مشروعك هنا (المساحة، نوع التبريد المطلوب، الموقع، إلخ...)"
                      rows={5}
                      required
                      className="text-right resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-3"
                  >
                    إرسال طلب العرض
                    <Send className="w-5 h-5 mr-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">موقعنا على الخريطة</h3>
                <p className="text-muted-foreground">
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
