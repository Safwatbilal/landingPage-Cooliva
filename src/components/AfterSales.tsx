import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield,
  Headphones,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  Settings,
  Award,
} from "lucide-react";

const AfterSales = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: "خط الطوارئ",
      description: "متاح 24/7 لحالات الطوارئ والأعطال الحرجة",
      contact: "966-50-123-4567+",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-500",
      borderColor: "border-red-500/20",
    },
    {
      icon: MessageCircle,
      title: "واتساب الدعم الفني",
      description: "استجابة فورية عبر تطبيق واتساب",
      contact: "966-55-987-6543+",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      borderColor: "border-green-500/20",
    },
    {
      icon: Headphones,
      title: "مركز الاتصال",
      description: "من السبت إلى الخميس 8 صباحاً - 6 مساءً",
      contact: "966-11-456-7890+",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/20",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "ضمان شامل 3 سنوات",
      description:
        "ضمان كامل على جميع المعدات والأجهزة مع قطع غيار أصلية مضمونة",
    },
    {
      icon: Settings,
      title: "صيانة دورية مجانية",
      description:
        "خدمة صيانة دورية كل 6 أشهر لضمان الأداء الأمثل والكفاءة العالية",
    },
    {
      icon: Clock,
      title: "استجابة سريعة",
      description:
        "أوقات استجابة قياسية: 30 دقيقة للطوارئ و 4 ساعات للأعطال العادية",
    },
    {
      icon: Award,
      title: "خدمة متميزة",
      description:
        "فريق متخصص من الفنيين المدربين وتدريب مجاني لفريقكم التشغيلي",
    },
  ];

  const warrantyFeatures = [
    "ضمان شامل لمدة 3 سنوات على جميع المعدات",
    "صيانة دورية مجانية كل 6 أشهر",
    "قطع غيار أصلية مضمونة",
    "خدمة استبدال فوري في حالة الأعطال الكبيرة",
    "تدريب مجاني للفريق التشغيلي",
    "نظام مراقبة عن بُعد لمنع الأعطال",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="aftersales" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            خدمات ما بعد البيع
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            نحن معكم حتى بعد انتهاء المشروع بخدمات صيانة ودعم فني متميزة لضمان
            استمرارية التشغيل بأعلى كفاءة
          </p>
        </motion.div>

        {/* Main After Sales Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              دعم فني متواصل وضمان شامل
            </h3>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                نؤمن بأن التميز لا يقف عند تسليم المشروع، بل يمتد لسنوات طويلة
                من الدعم المستمر. نقدم أشمل باقة خدمات ما بعد البيع في المملكة
                العربية السعودية.
              </p>
              <p>
                فريقنا المتخصص متاح على مدار الساعة لضمان استمرارية عمل أنظمة
                التبريد والتجميد دون انقطاع، مع خدمات صيانة وقائية تمنع حدوث
                الأعطال.
              </p>
              <p>
                نقدم ضماناً شاملاً لمدة 3 سنوات مع إمكانية التمديد، بالإضافة إلى
                خدمات مراقبة عن بُعد وتدريب شامل لفرق التشغيل لدى عملائنا.
              </p>
            </div>

            {/* Warranty Features List */}
            <div className="mt-8 space-y-3">
              {warrantyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <img
                  src="/maintenance.jpg"
                  alt="فريق الصيانة"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary/40">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 border border-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              قنوات التواصل والدعم الفني
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              تواصل معنا عبر قنوات متعددة للحصول على الدعم الفني السريع والموثوق
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {supportChannels.map((channel, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 border ${channel.borderColor} hover:border-opacity-60`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${channel.bgColor} rounded-xl mb-4 border ${channel.borderColor}`}
                    >
                      <channel.icon
                        className={`w-8 h-8 ${channel.iconColor}`}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {channel.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {channel.description}
                    </p>
                    <div className="bg-gray-100 rounded-lg py-3 px-4">
                      <p className="font-mono text-primary font-semibold">
                        {channel.contact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Response Times */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  أوقات الاستجابة المضمونة
                </h4>
                <p className="text-gray-600">
                  نلتزم بأسرع أوقات استجابة في السوق
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  30 دقيقة
                </div>
                <div className="text-sm text-red-800 font-semibold">
                  حالات الطوارئ
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  4 ساعات
                </div>
                <div className="text-sm text-yellow-800 font-semibold">
                  الأعطال العادية
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  24 ساعة
                </div>
                <div className="text-sm text-green-800 font-semibold">
                  الصيانة الدورية
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              اطلب خدمة صيانة الآن
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterSales;
