import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Snowflake,
  Truck,
  Settings,
  Wrench,
  Building,
  Shield,
  ArrowLeft,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "غرف التبريد والتجميد",
      description:
        "توريد وتركيب جميع الأنواع بمقاسات مختلفة باستخدام أفضل العوازل والمعدات",
      features: [
        "ساندوتش بنل عازل عالي الجودة",
        "أبواب مفصلية وأبواب سحاب",
        "أنظمة تحكم حديثة",
        "عزل الأرضيات ببوليسترين 5 مم",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Truck,
      title: "عزل سيارات النقل المبرد",
      description:
        "تجهيز وعزل سيارات النقل المبرد مع تركيب وحدات تبريد عالية الكفاءة",
      features: [
        "عزل كامل للصندوق",
        "وحدات تبريد متطورة",
        "أنظمة مراقبة درجة الحرارة",
        "ضمان ضد التسرب الحراري",
      ],
      gradient: "from-secondary to-tertiary",
    },
    {
      icon: Settings,
      title: "وحدات التبريد",
      description: "تركيب وحدات تبريد متنوعة للمصانع، المخازن، والمطاعم",
      features: [
        "كمبريسورات عالمية الجودة",
        "مبخرات متطورة",
        "لوحات كهربائية ذكية",
        "وحدات تحكم رقمية",
      ],
      gradient: "from-tertiary to-primary",
    },
    {
      icon: Wrench,
      title: "الصيانة والعقود",
      description:
        "خدمات صيانة دورية وسريعة مع إمكانية عقود سنوية أو حسب الطلب",
      features: [
        "صيانة دورية مجدولة",
        "استجابة سريعة للطوارئ",
        "قطع غيار أصلية",
        "تقارير صيانة تفصيلية",
      ],
      gradient: "from-primary via-secondary to-tertiary",
    },
  ];

  const suppliers = [
    {
      category: "المبخرات والكمبريسورات",
      brands: ["Copeland", "Danfoss", "Bitzer", "Embraco"],
      icon: Snowflake,
    },
    {
      category: "لوحات الكهرباء",
      brands: ["Schneider Electric", "ABB", "Siemens", "Eaton"],
      icon: Settings,
    },
    {
      category: "وحدات التحكم",
      brands: ["Dixell", "Eliwell", "Carel", "Johnson Controls"],
      icon: Settings,
    },
    {
      category: "مواد العزل",
      brands: ["Kingspan", "Metecno", "Marcegaglia", "ArcelorMittal"],
      icon: Shield,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">خدماتنا</Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            حلول متكاملة في
            <span className="text-primary"> التبريد والتجميد</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال التبريد والتجميد
            لتلبية جميع احتياجاتكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="group">
                  اعرف المزيد
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suppliers Section */}
        <div className="bg-card rounded-3xl p-8 shadow-elegant">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              شركاؤنا العالميون
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نتعامل مع أفضل الشركات العالمية لضمان جودة المعدات والمواد
              المستخدمة في مشاريعنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.map((supplier, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <supplier.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-3 text-foreground">
                    {supplier.category}
                  </h4>
                  <div className="space-y-2">
                    {supplier.brands.map((brand, brandIndex) => (
                      <Badge
                        key={brandIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
