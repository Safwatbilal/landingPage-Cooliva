import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  User,
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "مجمع تجاري كبير - الرياض",
      description:
        "تنفيذ نظام تبريد متكامل لمجمع تجاري يضم 50 متجر ومطعم مع غرف تبريد مركزية وأنظمة توفير الطاقة المتقدمة",
      image:
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80",
      category: "تجاري",
      location: "الرياض",
      year: "2024",
      client: "مجموعة الراشد التجارية",
      features: [
        "15 غرفة تبريد متنوعة",
        "نظام مراقبة ذكي",
        "توفير 40% في استهلاك الطاقة",
      ],
    },
    {
      id: 2,
      title: "مستشفى المملكة - جدة",
      description:
        "تجهيز غرف تبريد للأدوية والمستحضرات الطبية مع أنظمة أمان متقدمة وأنظمة إنذار طوارئ متطورة",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
      category: "طبي",
      location: "جدة",
      year: "2024",
      client: "مستشفى المملكة",
      features: [
        "غرف تبريد دقيقة للأدوية",
        "إنذار طوارئ متطور",
        "نسخ احتياطية للطاقة",
      ],
    },
    {
      id: 3,
      title: "مصنع الأغذية المجمدة - الدمام",
      description:
        "إنشاء مجمع تجميد صناعي بطاقة 1000 طن مع خطوط إنتاج متكاملة وأنظمة تحكم آلي كامل",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
      category: "صناعي",
      location: "الدمام",
      year: "2023",
      client: "شركة الأغذية المتطورة",
      features: ["مجمد صناعي عملاق", "خطوط إنتاج مبردة", "تحكم آلي كامل"],
    },
    {
      id: 4,
      title: "سلسلة مطاعم فاخرة - الرياض",
      description:
        "تجهيز 12 فرع لسلسلة مطاعم فاخرة بأنظمة تبريد متطورة وغرف تخزين مبردة عالية الكفاءة",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      category: "مطاعم",
      location: "الرياض",
      year: "2023",
      client: "مجموعة المذاق الراقي",
      features: ["12 فرع متكامل", "تبريد سريع", "كفاءة عالية"],
    },
    {
      id: 5,
      title: "مركز التوزيع المبرد - جدة",
      description:
        "إنشاء مركز توزيع مبرد بمساحة 5000 متر مربع مع أحدث أنظمة إدارة المخزون المبرد",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      category: "لوجستي",
      location: "جدة",
      year: "2023",
      client: "شركة التوزيع السريع",
      features: ["مساحة 5000 متر", "إدارة ذكية", "توزيع سريع"],
    },
    {
      id: 6,
      title: "فندق خمس نجوم - مكة",
      description:
        "تجهيز مطابخ فندق 5 نجوم بأنظمة تبريد احترافية وغرف تخزين متعددة الأغراض",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      category: "ضيافة",
      location: "مكة المكرمة",
      year: "2024",
      client: "فندق الحرمين الشريف",
      features: ["مطابخ احترافية", "تخزين متعدد", "خدمة 24/7"],
    },
  ];

  return (
    <section id="projects" className="py-20 " dir="rtl">
      <div className="main-title">مشاريعنا المنجزة</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative px-8 py-4"
            >
              {/* Background Layers */}
              <div className="absolute right-4 top-4 w-[calc(100%-80px)] h-[calc(100%-32px)] bg-gray-100 rounded-lg -z-20 transition-all duration-500"></div>
              <div className="absolute right-4 top-4 w-0 h-[calc(100%-32px)] bg-gray-200 rounded-lg -z-10 transition-all duration-500 group-hover:w-[calc(100%-80px)]"></div>

              {/* Main Content */}
              <div className="relative">
                {/* Image and Social Section */}
                <div className="flex items-center pt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[calc(100%-80px)] h-48 object-cover rounded-lg transition-all duration-500 group-hover:grayscale"
                  />

                  {/* Social Links */}
                  <div className=" w-16 flex flex-col items-center gap-3 ">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                    >
                      <ExternalLink
                        size={18}
                        className="text-gray-500 hover:text-primary"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                    >
                      <Instagram
                        size={18}
                        className="text-gray-500 hover:text-primary"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                    >
                      <Linkedin
                        size={18}
                        className="text-gray-500 hover:text-primary"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                    >
                      <Youtube
                        size={18}
                        className="text-gray-500 hover:text-primary"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="pr-4 pt-4 pb-4">
                  <h3 className="text-lg font-bold text-primary mb-2 transition-colors group-hover:text-gray-600 leading-6">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <User size={14} />
                    <span>{project.client}</span>
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

export default Projects;
