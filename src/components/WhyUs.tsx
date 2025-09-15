import { motion } from "framer-motion";
import { Search, Wrench, CheckCircle, Sparkles } from "lucide-react";
import Squares from "./bits/Galaxy";

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
    <section
      className="relative py-10 bg-gray-900 min-h-screen"
      dir="rtl"
      id="work"
    >
      <div className="absolute inset-0 opacity-30">
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

      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-3 gradient text-white font-bold text-2xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
          <Sparkles className="w-6 h-6 animate-spin text-slate-400" />
          <span>كيف نعمل</span>
          <Sparkles
            className="w-6 h-6 animate-spin "
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          نحن فريق متخصص في تصميم وتنفيذ حلول التبريد الحديثة، نركز على الجودة
          والابتكار لتقديم أفضل الخدمات لعملائنا.
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2 lg:ml-25 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 gradient rounded-2xl transform rotate-6"></div>
              <div className="relative bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                  alt="خطوات العمل"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:order-1 flex-1 max-w-2xl">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800 p-8 mb-5 rounded-lg flex items-center border-2 border-slate-700 transition-all duration-500 hover:shadow-lg hover:shadow-slate-900/50 z-10 overflow-hidden hover:border-slate-600"
              >
                <div className="absolute inset-0 bg-slate-700 scale-0 transition-transform duration-500 group-hover:scale-100 -z-10"></div>

                <div className="flex-shrink-0 ml-8">
                  <div className="w-16 h-16 gradient rounded-full flex items-center justify-center text-white shadow-lg">
                    <step.icon size={32} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
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
