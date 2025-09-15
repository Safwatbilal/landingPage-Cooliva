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
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Squares from "./bits/Galaxy";
import LightRays from "./bits/lights";
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
    <section
      id="projects"
      className="relative py-10 bg-gray-900 min-h-screen"
      dir="rtl"
    >
      {/* Dark background with galaxy effect */}
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
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="bottom-center"
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

      <div className="relative z-10 text-center mb-16">
        <div className="text-center mb-16">
          {/* Dark mode header with glowing effect */}
          <div className="inline-flex items-center gap-3 gradient text-white font-bold text-2xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <Sparkles className="w-6 h-6 animate-spin text-slate-400" />
            <span className="drop-shadow-lg">مشاريعنا المنجزة</span>
            <Sparkles
              className="w-6 h-6 animate-spin "
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Dark mode description */}
          <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            نقدم مجموعة من المشاريع المنجزة التي تعكس خبرتنا وجودة عملنا في
            تصميم وتنفيذ حلول التبريد الحديثة.
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Dark mode card with enhanced styling */}
                <Card className="group relative overflow-hidden bg-gray-800/90 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* Enhanced background layers for dark mode */}
                  <div className="absolute right-4 top-4 w-[calc(100%-80px)] h-[calc(100%-32px)] bg-gray-700/50 rounded-lg -z-20 transition-all duration-500 group-hover:bg-gray-600/30"></div>
                  <div className="absolute right-4 top-4 w-0 h-[calc(100%-32px)] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg -z-10 transition-all duration-500 group-hover:w-[calc(100%-80px)]"></div>

                  <CardContent className="p-4 relative z-10">
                    {/* Image with dark mode overlay */}
                    <div className="flex items-center justify-center mb-4 relative ">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg transition-all duration-500 group-hover:bg-black/10"></div>
                    </div>

                    {/* Project Info with dark mode colors */}
                    <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-blue-300 leading-6 drop-shadow-sm">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-green-400" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <User size={14} className="text-purple-400" />
                      <span>{project.client}</span>
                    </div>

                    {/* Category badge */}
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full border border-gray-600 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all duration-300">
                        {project.category}
                      </span>
                    </div>
                  </CardContent>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-lg"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
