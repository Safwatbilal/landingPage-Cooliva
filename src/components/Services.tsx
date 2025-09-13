import { motion } from "framer-motion";
import {
  Snowflake,
  Truck,
  Factory,
  Wrench,
  Thermometer,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Snowflake,
      title: "غرف التبريد والتجميد",
    },
    {
      id: 2,
      icon: Truck,
      title: "سيارات النقل المبرد",
    },
    {
      id: 3,
      icon: Factory,
      title: "وحدات التبريد الصناعية",
    },
    {
      id: 4,
      icon: Wrench,
      title: "الصيانة والعقود",
    },
    {
      id: 5,
      icon: Thermometer,
      title: "أنظمة التحكم والمراقبة",
    },
    {
      id: 6,
      icon: Settings,
      title: "الاستشارات التقنية",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" dir="rtl">
      <div className="main-title">خدماتنا</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>

              <div className="p-8">
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon
                      size={40}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-center text-gray-700 mb-8 leading-relaxed">
                  {service.title}
                </h3>

                {/* Info Section */}
                <div className="relative bg-gray-50 p-4 -mx-8 -mb-8">
                  {/* Service Counter */}
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-primary text-white flex items-center justify-center font-bold text-2xl">
                    {service.id.toString().padStart(2, "0")}
                  </div>

                  {/* Skewed Divider */}
                  <div className="absolute right-20 top-0 bottom-0 w-12 bg-gray-300 transform skew-x-12"></div>

                  {/* Details Link */}
                  <div className="text-left pr-32">
                    <a
                      href="#"
                      className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center"
                    >
                      {/* <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg> */}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
