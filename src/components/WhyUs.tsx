import { motion } from "framer-motion";
import { Search, Wrench, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "تحليل المتطلبات والمعاينة",
      description:
        "نقوم بدراسة شاملة لاحتياجاتك وزيارة الموقع لتحديد أفضل الحلول التقنية المناسبة لمشروعك",
    },
    {
      id: 2,
      icon: Wrench,
      title: "التصميم والتنفيذ",
      description:
        "فريق متخصص يقوم بتصميم النظام وتنفيذه باستخدام أحدث التقنيات وأعلى معايير الجودة والأمان",
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "التشغيل والصيانة",
      description:
        "تسليم المشروع مع التدريب والدعم المستمر وخدمات الصيانة الدورية لضمان الأداء الأمثل",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl" id="work">
      <div className="main-title">كيف نعمل؟</div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2 lg:ml-25 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                  alt="خطوات العمل"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Steps Info */}
          <div className="lg:order-1 flex-1 max-w-2xl">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-gray-100 p-8 mb-5 rounded-lg flex items-center border-2 border-white transition-all duration-500 hover:shadow-lg z-10 overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gray-200 scale-0 transition-transform duration-500 group-hover:scale-100 -z-10"></div>

                {/* Step Icon */}
                <div className="flex-shrink-0 ml-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <step.icon size={32} />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
