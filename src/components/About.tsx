import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      id: 1,
      title: "الخدمات الرئيسية",
      description:
        "تصميم وتوريد وتركيب غرف التبريد والتجميد. عزل سيارات النقل المبرد وتجهيزها بأنظمة تبريد حديثة.",
      image:
        "https://images.unsplash.com/photo-1614358612763-6d65704fbf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // غرفة تبريد
      color: "red",
      bgColor: "bg-red-500",
      textColor: "text-red-500",
      borderColor: "border-red-500",
      link: "#services",
    },
    {
      id: 2,
      title: "مشاريعنا المنجزة",
      description:
        "نفخر بتنفيذ مئات المشاريع الناجحة في مختلف القطاعات. مشاريع متنوعة تشمل المطاعم والفنادق والمستشفيات والمصانع.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // مشاريع ومباني
      color: "teal",
      bgColor: "bg-teal-600",
      textColor: "text-teal-600",
      borderColor: "border-teal-600",
      link: "#projects",
    },
    {
      id: 3,
      title: "كيف نعمل",
      description:
        "منهجية عمل احترافية تبدأ بالدراسة والتخطيط، ثم التنفيذ بأعلى المعايير، وتنتهي بالمتابعة والصيانة الدورية.",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f9b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // فريق عمل
      color: "blue",
      bgColor: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      link: "#work",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" dir="rtl">
      <h2 className="main-title">من نحن</h2>

      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            نحن شركة متخصصة في أنظمة التبريد والتجميد مع خبرة واسعة في تنفيذ
            المشاريع وفق أعلى معايير الجودة.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group border border-gray-300 text-center overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                {/* Overlay */}
                <div
                  className={`absolute inset-0 ${
                    feature.color === "red"
                      ? "bg-red-500/60"
                      : feature.color === "teal"
                      ? "bg-teal-600/60"
                      : "bg-blue-500/60"
                  } z-10`}
                ></div>

                {/* Triangle Effect */}
                <div
                  className="absolute bottom-0 right-0 w-0 h-0 border-solid border-transparent border-b-white transition-all duration-500 group-hover:border-r-0 group-hover:border-l-[500px] group-hover:border-b-[170px] z-20"
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

              {/* Content */}
              <div className="p-6">
                <h3 className={`relative text-3xl font-bold mb-8 inline-block`}>
                  {feature.title}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-1 ${
                      feature.color === "red"
                        ? "bg-red-500"
                        : feature.color === "teal"
                        ? "bg-teal-600"
                        : "bg-blue-500"
                    } -mb-5`}
                  ></span>
                </h3>

                <p className="text-gray-600 text-lg leading-8 mb-8 px-2">
                  {feature.description}
                </p>

                <a
                  href={feature.link}
                  className={`inline-block border-3 ${feature.borderColor} ${feature.textColor} font-bold text-xl px-8 py-3 rounded-md transition-all duration-500 relative overflow-hidden group/link`}
                  style={{
                    background: `linear-gradient(to right, ${
                      feature.color === "red"
                        ? "#f44036"
                        : feature.color === "teal"
                        ? "#009688"
                        : "#03a9f4"
                    } 50%, white 50%)`,
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
