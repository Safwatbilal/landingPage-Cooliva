import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد المحمد",
      position: "مدير مطاعم الذواقة",
      company: "سلسلة مطاعم الذواقة",
      rating: 5,
      text: "خدمة متميزة وجودة عالية في تنفيذ مشاريع التبريد. الفريق محترف والالتزام بالمواعيد ممتاز. أنصح بالتعامل معهم بقوة.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "سارة العتيبي",
      position: "مديرة المشتريات",
      company: "مصانع الألبان المتحدة",
      rating: 5,
      text: "تعاملنا معهم في مشروع كبير لتجهيز مصنع الألبان وكانت النتيجة فوق التوقعات. السرعة والجودة والأسعار التنافسية كلها مميزات رائعة.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1-47ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "محمد الراشد",
      position: "مدير العمليات",
      company: "شركة النقل البارد",
      rating: 5,
      text: "أفضل شركة تعاملت معها في مجال عزل وتجهيز سيارات النقل المبرد. الخدمة ممتازة والدعم الفني متواصل.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "فاطمة الزهراني",
      position: "مالكة",
      company: "سوبر ماركت الزهراني",
      rating: 5,
      text: "تركيب غرف التبريد تم بمهنية عالية وبأسعار معقولة. فريق العمل مدرب جيداً وخدمة ما بعد البيع ممتازة.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "خالد البراك",
      position: "مدير المشاريع",
      company: "شركة المواد الغذائية الكبرى",
      rating: 5,
      text: "شركة موثوقة ومتخصصة. نفذوا لنا مشروع ضخم لتجهيز مستودعات التبريد وتسليمه في الوقت المحدد تماماً.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "نورا القحطاني",
      position: "مديرة التشغيل",
      company: "فندق المرجان",
      rating: 5,
      text: "خدمة الصيانة والدعم الفني ممتازة. يردون على أي مشكلة بسرعة البرق وحلولهم دائماً فعالة.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">
            آراء عملائنا
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            ماذا يقول
            <span className="text-primary"> عملاؤنا</span> عنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة عملائنا وتقديرهم لخدماتنا المتميزة في مجال التبريد
            والتجميد
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">رضا العملاء</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">عميل سعيد</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">دعم مستمر</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
