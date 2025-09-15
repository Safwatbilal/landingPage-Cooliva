import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import Squares from "./bits/Galaxy";
import LightRays from "./bits/lights";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  colorIndex: number;
  duplicateKey: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد المالكي",
      title: "مدير مطاعم الواحة",
      company: "مجموعة الواحة للمطاعم",
      content:
        "خدمة ممتازة وجودة عالية في التنفيذ. تم تركيب غرف التبريد في مطاعمنا بمهنية عالية وفي الوقت المحدد.",
      rating: 5,
      avatar: "AM",
    },
    {
      id: 2,
      name: "فاطمة الزهراني",
      title: "مديرة المشتريات",
      company: "مستشفى الملك فيصل",
      content:
        "نثق بهم في تبريد الأدوية والمستحضرات الطبية. النظام يعمل بكفاءة عالية منذ 3 سنوات بدون أي مشاكل.",
      rating: 5,
      avatar: "فز",
    },
    {
      id: 3,
      name: "محمد العتيبي",
      title: "المدير التنفيذي",
      company: "مصنع الأغذية المتطورة",
      content:
        "شركة موثوقة ومتخصصة. نفذوا لنا نظام تبريد صناعي كامل بطاقة إنتاجية عالية. الجودة فاقت توقعاتنا.",
      rating: 5,
      avatar: "مع",
    },
    {
      id: 4,
      name: "سارة القحطاني",
      title: "مالكة محل الحلويات",
      company: "حلويات القحطاني",
      content:
        "تعاملت معهم في تجهيز محل الحلويات بغرف عرض مبردة. النتيجة رائعة والحلويات تحافظ على جودتها لفترة أطول.",
      rating: 5,
      avatar: "سق",
    },
    {
      id: 5,
      name: "عبدالله الراشد",
      title: "مدير العمليات",
      company: "سوبر ماركت الراشد",
      content:
        "أفضل شركة تبريد تعاملنا معها. جهزوا لنا 20 فرع بأنظمة تبريد متطورة. التوفير في فاتورة الكهرباء ملحوظ.",
      rating: 4,
      avatar: "عر",
    },
    {
      id: 6,
      name: "نورا الشمري",
      title: "مديرة المشاريع",
      company: "فندق الياسمين",
      content:
        "نفذوا لنا أنظمة تبريد لمطبخ الفندق وغرف التخزين. المشروع اكتمل في الوقت المحدد والجودة عالية جداً.",
      rating: 4,
      avatar: "نش",
    },
    {
      id: 7,
      name: "خالد الأحمدي",
      title: "صاحب مصنع الألبان",
      company: "مصنع الروابي للألبان",
      content:
        "خبرة رائعة في التبريد الصناعي. الأنظمة تعمل بكفاءة عالية والصيانة الدورية ممتازة.",
      rating: 5,
      avatar: "خأ",
    },
    {
      id: 8,
      name: "منى الحربي",
      title: "مديرة العمليات",
      company: "مركز التوزيع الطبي",
      content:
        "أنظمة التبريد الطبي المتخصصة تحافظ على الأدوية بدرجة حرارة مثالية. فريق محترف ومتجاوب.",
      rating: 5,
      avatar: "مح",
    },
    {
      id: 9,
      name: "يوسف الغامدي",
      title: "مالك السلسلة",
      company: "كافيهات الغامدي",
      content:
        "حلول تبريد مبتكرة للمشروبات والحلويات. التصميم جميل والأداء ممتاز. أنصح بالتعامل معهم.",
      rating: 4,
      avatar: "يغ",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={14}
        className={
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
        }
      />
    ));
  };

  const avatarColors: string[] = [
    "bg-gradient-to-br from-blue-500 to-blue-600",
    "bg-gradient-to-br from-green-500 to-emerald-600",
    "bg-gradient-to-br from-purple-500 to-indigo-600",
    "bg-gradient-to-br from-red-500 to-rose-600",
    "bg-gradient-to-br from-orange-500 to-amber-600",
    "bg-gradient-to-br from-teal-500 to-cyan-600",
    "bg-gradient-to-br from-pink-500 to-rose-600",
    "bg-gradient-to-br from-indigo-500 to-purple-600",
    "bg-gradient-to-br from-violet-500 to-purple-600",
  ];

  // تقسيم الشهادات إلى 3 صفوف
  const rows: Testimonial[][] = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];

  const TestimonialCard: React.FC<TestimonialCardProps> = ({
    testimonial,
    colorIndex,
    duplicateKey,
  }) => (
    <div
      key={duplicateKey}
      className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 min-w-[380px] max-w-[380px] border border-gray-700/50 hover:border-blue-500/50 group hover:transform hover:scale-105 mx-3"
    >
      {/* Header مع الـ Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 ${avatarColors[colorIndex]} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ring-2 ring-gray-600/30 group-hover:ring-blue-400/50`}
        >
          {testimonial.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-sm">
            {testimonial.name}
          </h3>
          <p className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
            {testimonial.title}
          </p>
          <p className="text-blue-400 text-sm font-bold group-hover:text-blue-300 transition-colors duration-300">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {renderStars(testimonial.rating)}
        <span className="text-gray-400 text-sm mr-2 font-medium group-hover:text-gray-300 transition-colors duration-300">
          ({testimonial.rating}/5)
        </span>
      </div>

      {/* Review Text */}
      <div className="relative">
        <p className="text-gray-200 leading-relaxed text-sm font-medium group-hover:text-white transition-colors duration-300">
          "{testimonial.content}"
        </p>

        {/* Quote decoration */}
        <div className="absolute -top-2 -right-2 text-blue-500/30 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
          </svg>
        </div>
      </div>

      {/* زخرفة */}
      <div className="absolute top-4 left-4 text-blue-400/60 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
        <Sparkles size={18} className="animate-pulse" />
      </div>

      {/* تأثير الإضاءة */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12"></div>

      {/* Additional glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
      </div>
    </div>
  );

  return (
    <section className="relative py-10 bg-gray-900 overflow-hidden" dir="rtl">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="right"
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
          raysOrigin="left"
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

      <div className="relative z-10">
        <div className="text-center mb-16">
          {/* Header */}
          <div className="inline-flex items-center gap-3 gradient text-white font-bold text-2xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <Sparkles className="w-6 h-6 animate-spin text-slate-400" />
            <span className="drop-shadow-lg">آراء عملائنا المميزين</span>
            <Sparkles
              className="w-6 h-6 animate-spin "
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            تعرف على تجارب عملائنا الناجحة وآرائهم حول خدماتنا المتميزة في مجال
            التبريد والتكييف والحلول المبتكرة
          </p>
        </div>

        <div className="space-y-8">
          {rows.map((row, rowIndex) => {
            const extendedRow = [...row, ...row, ...row, ...row];

            return (
              <div key={rowIndex} className="relative">
                <motion.div
                  className="flex"
                  animate={{
                    x: [0, -100 * row.length],
                  }}
                  transition={{
                    duration: 25 + rowIndex * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: `${100 * row.length * 4}%`,
                  }}
                >
                  {extendedRow.map((testimonial, index) => (
                    <TestimonialCard
                      key={`${testimonial.id}-${Math.floor(
                        index / row.length
                      )}`}
                      testimonial={testimonial}
                      colorIndex={index % avatarColors.length}
                      duplicateKey={`${testimonial.id}-${Math.floor(
                        index / row.length
                      )}`}
                    />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
