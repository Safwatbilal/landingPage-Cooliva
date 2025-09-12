import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "مجمع غرف التبريد - الرياض",
      location: "الرياض، المملكة العربية السعودية",
      date: "2024",
      type: "غرف تبريد",
      description:
        "تصميم وتركيب 12 غرفة تبريد وتجميد لمجمع تجاري كبير بمساحة إجمالية 2000 متر مربع",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      features: [
        "ساندوتش بنل عالي الكفاءة",
        "أنظمة تحكم ذكية",
        "عزل حراري متطور",
        "ضمان 5 سنوات",
      ],
    },
    {
      title: "أسطول سيارات النقل المبرد",
      location: "جدة، المملكة العربية السعودية",
      date: "2024",
      type: "سيارات نقل مبرد",
      description:
        "عزل وتجهيز 25 سيارة نقل مبرد بوحدات تبريد متطورة لشركة توزيع المواد الغذائية",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
      features: [
        "وحدات تبريد عالية الكفاءة",
        "مراقبة درجة الحرارة",
        "عزل متعدد الطبقات",
        "صيانة شاملة",
      ],
    },
    {
      title: "مصنع الألبان - الدمام",
      location: "الدمام، المملكة العربية السعودية",
      date: "2023",
      type: "وحدات تبريد صناعية",
      description:
        "تركيب نظام تبريد متكامل لمصنع ألبان بطاقة إنتاجية 50 طن يومياً",
      image:
        "https://images.unsplash.com/photo-1563379091863-c4d49d812db2?w=600&h=400&fit=crop",
      features: [
        "كمبريسورات صناعية",
        "أنظمة تحكم مركزية",
        "كفاءة طاقة عالية",
        "صيانة دورية",
      ],
    },
    {
      title: "سلسلة مطاعم - مكة المكرمة",
      location: "مكة المكرمة، المملكة العربية السعودية",
      date: "2023",
      type: "حلول تبريد متكاملة",
      description:
        "تجهيز 8 فروع مطاعم بأنظمة تبريد وتجميد شاملة مع خدمات الصيانة",
      image:
        "https://images.unsplash.com/photo-1577308856961-8e0ac271e5de?w=600&h=400&fit=crop",
      features: ["تصميم مخصص", "كفاءة عالية", "تشغيل هادئ", "دعم فني مستمر"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">
            مشاريعنا
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            مشاريع نفخر
            <span className="text-primary"> بإنجازها</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اطلع على باقة من مشاريعنا المنجزة بنجاح والتي تعكس خبرتنا وجودة
            خدماتنا في مجال التبريد والتجميد
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary text-white">
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="group w-full">
                  عرض تفاصيل المشروع
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            هل لديك مشروع جديد؟
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            نحن مستعدون لتنفيذ مشروعك القادم بأعلى معايير الجودة والاحترافية
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300"
          >
            ابدأ مشروعك الآن
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
