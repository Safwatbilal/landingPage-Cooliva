import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "جودة عالية",
      description: "نستخدم أفضل المواد والتقنيات الحديثة في جميع مشاريعنا",
    },
    {
      icon: Clock,
      title: "سرعة الاستجابة",
      description: "فريق دعم فني جاهز لحل أي مشكلة في وقت قياسي",
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "خبراء في مجال التبريد والتجميد مع سنوات من الخبرة",
    },
  ];

  const strengths = [
    "خبرة واسعة في تنفيذ مشاريع التبريد والتجميد",
    "استخدام أحدث التقنيات والمعدات العالمية",
    "التزام بالمواعيد المحددة وجودة التنفيذ",
    "أسعار تنافسية مع ضمان مستمر",
    "خدمة ما بعد البيع والصيانة الدورية",
    "فريق عمل مدرب ومؤهل",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">من نحن</Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            نحن شركة رائدة في مجال
            <span className="text-primary"> التبريد والتجميد</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مؤسسة متخصصة في توريد وتركيب غرف التبريد والتجميد بجميع أنواعها،
            نعمل على تقديم خدمات متميزة تلبي احتياجات عملائنا في مختلف القطاعات
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              رؤيتنا ورسالتنا
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              نسعى لأن نكون الخيار الأول في مجال حلول التبريد والتجميد، من خلال
              تقديم خدمات متكاملة تتميز بالجودة العالية والابتكار، مع الالتزام
              بالمعايير العالمية والاستدامة البيئية.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              رسالتنا هي تقديم حلول تبريد مبتكرة وموثوقة تساعد عملاءنا على تحقيق
              أهدافهم التشغيلية بكفاءة عالية، مع ضمان أعلى مستويات الخدمة والدعم
              الفني.
            </p>

            {/* Strengths */}
            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">مشروع منجز بنجاح</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">سنة من الخبرة</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-white/90">عميل راضٍ</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">دعم فني متواصل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
