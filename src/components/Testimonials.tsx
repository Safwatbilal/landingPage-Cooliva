import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد المالكي",
      title: "مدير مطاعم الواحة",
      company: "مجموعة الواحة للمطاعم",
      content:
        "خدمة ممتازة وجودة عالية في التنفيذ. تم تركيب غرف التبريد في مطاعمنا بمهنية عالية وفي الوقت المحدد. فريق العمل محترف جداً والصيانة ممتازة.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "فاطمة الزهراني",
      title: "مديرة المشتريات",
      company: "مستشفى الملك فيصل",
      content:
        "نثق بهم في تبريد الأدوية والمستحضرات الطبية. النظام يعمل بكفاءة عالية منذ 3 سنوات بدون أي مشاكل. الدعم الفني متاح دائماً والاستجابة سريعة.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c6b46043?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "محمد العتيبي",
      title: "المدير التنفيذي",
      company: "مصنع الأغذية المتطورة",
      content:
        "شركة موثوقة ومتخصصة. نفذوا لنا نظام تبريد صناعي كامل بطاقة إنتاجية عالية. الجودة فاقت توقعاتنا والسعر كان مناسب جداً مقارنة بالمنافسين.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 4,
      name: "سارة القحطاني",
      title: "مالكة محل الحلويات",
      company: "حلويات القحطاني",
      content:
        "تعاملت معهم في تجهيز محل الحلويات بغرف عرض مبردة. النتيجة رائعة والحلويات تحافظ على جودتها لفترة أطول. خدمة العملاء ممتازة والأسعار معقولة.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 5,
      name: "عبدالله الراشد",
      title: "مدير العمليات",
      company: "سوبر ماركت الراشد",
      content:
        "أفضل شركة تبريد تعاملنا معها. جهزوا لنا 20 فرع بأنظمة تبريد متطورة. التوفير في فاتورة الكهرباء ملحوظ والأنظمة تعمل بكفاءة عالية.",
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 6,
      name: "نورا الشمري",
      title: "مديرة المشاريع",
      company: "فندق الياسمين",
      content:
        "نفذوا لنا أنظمة تبريد لمطبخ الفندق وغرف التخزين. المشروع اكتمل في الوقت المحدد والجودة عالية جداً. فريق العمل ملتزم ومحترف.",
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="main-title">آراء العملاء</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute -top-12 right-2 w-25 h-25 rounded-full border-10 border-gray-50 object-cover"
              />

              {/* Content */}
              <div className="pt-16">
                {/* Name and Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonial.name}
                </h3>
                <span className="text-gray-600 text-sm block mb-2">
                  {testimonial.title}
                </span>
                <span className="text-primary text-sm font-medium block mb-4">
                  {testimonial.company}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
