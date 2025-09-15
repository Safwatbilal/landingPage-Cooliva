import { motion } from "framer-motion";
import { Building, Sparkles, Users } from "lucide-react";
import LightRays from "./bits/lights";

const About = () => {
  const features = [
    {
      id: 1,
      title: "الخدمات الرئيسية",
      description:
        "تصميم وتوريد وتركيب غرف التبريد والتجميد. عزل سيارات النقل المبرد وتجهيزها بأنظمة تبريد حديثة.",
      image: "/about.jpg",
      color: "purple",
      bgColor: "bg-purple-600",
      textColor: "text-purple-400",
      borderColor: "border-purple-500",
      overlayColor: "bg-purple-900/70",
      gradientColor: "#9333ea",
      link: "#services",
    },
    {
      id: 2,
      title: "مشاريعنا المنجزة",
      description:
        "نفخر بتنفيذ مئات المشاريع الناجحة في مختلف القطاعات. مشاريع متنوعة تشمل المطاعم والفنادق والمستشفيات والمصانع.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      color: "blue",
      bgColor: "bg-cyan-600",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500",
      overlayColor: "bg-cyan-900/70",
      gradientColor: "#0891b2",
      link: "#projects",
    },
    {
      id: 3,
      title: "كيف نعمل",
      description:
        "منهجية عمل احترافية تبدأ بالدراسة والتخطيط، ثم التنفيذ بأعلى المعايير، وتنتهي بالمتابعة والصيانة الدورية.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      color: "teal",
      bgColor: "bg-emerald-600",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500",
      overlayColor: "bg-emerald-900/70",
      gradientColor: "#059669",
      link: "#work",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-900 py-20"
      dir="rtl"
      style={{ fontFamily: "'Tajawal', 'Cairo', 'Amiri', sans-serif" }}
    >
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#20bdff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 gradient text-white font-bold text-2xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <Sparkles className="w-6 h-6 animate-spin t" />
            <span>من نحن</span>
            <Sparkles
              className="w-6 h-6 animate-spin  "
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            نحن فريق متخصص في تصميم وتنفيذ حلول التبريد الحديثة، نركز على الجودة
            والابتكار لتقديم أفضل الخدمات لعملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-slate-800 border border-slate-700 rounded-lg text-center overflow-hidden hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-500 hover:border-slate-600"
            >
              <div className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${feature.overlayColor} z-10`}
                ></div>

                <div
                  className="absolute bottom-0 right-0 w-0 h-0 border-solid border-transparent border-b-slate-800 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:border-l-[500px] group-hover:border-b-[170px] z-20"
                  style={{
                    borderBottomWidth: "170px",
                    borderLeftWidth: "500px",
                    borderRightWidth: "0px",
                  }}
                ></div>

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3
                  className={`relative text-3xl font-bold mb-8 inline-block text-slate-200`}
                >
                  {feature.title}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-1 ${feature.bgColor} -mb-5`}
                  ></span>
                </h3>

                <p className="text-slate-400 text-lg leading-8 mb-8 px-2">
                  {feature.description}
                </p>

                <a
                  href={feature.link}
                  className={`inline-block border-2 ${feature.borderColor} ${feature.textColor} font-bold text-xl px-8 py-3 rounded-md transition-all duration-500 relative overflow-hidden group/link hover:text-white`}
                  style={{
                    background: `linear-gradient(to right, ${feature.gradientColor} 50%, transparent 50%)`,
                    backgroundSize: "200% 100%",
                    backgroundPosition: "right bottom",
                  }}
                >
                  <span className="relative z-10 group-hover/link:text-white transition-colors duration-500">
                    اقرأ المزيد
                  </span>
                  <div
                    className={`absolute inset-0 ${feature.bgColor} transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
