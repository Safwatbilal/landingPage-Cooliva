import { motion } from "framer-motion";
import { Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const RequestDiscount = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // هنا ممكن تضيف منطق إرسال البيانات للسيرفر
  };

  return (
    <section id="discount" dir="rtl">
      <div className="spikes"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Content Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              احصل على خصم مميز
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90"
            >
              نقدم لكم خصومات حصرية على جميع مشاريع التبريد والتجميد. احصل على
              استشارة مجانية وعرض سعر مخصص يناسب احتياجاتك ومشروعك. فريقنا جاهز
              لتقديم أفضل الحلول بأسعار تنافسية.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="font-semibold text-lg">اتصل الآن</p>
                <p className="opacity-80">للحصول على خصم فوري</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="font-bold text-xl mb-3">مميزات خاصة:</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ خصم حتى 25% على المشاريع الكبيرة</li>
                <li>✓ استشارة فنية مجانية</li>
                <li>✓ ضمان شامل لمدة 3 سنوات</li>
                <li>✓ صيانة مجانية للسنة الأولى</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto w-full">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center"
            >
              اطلب عرض السعر
            </motion.h2>

            <motion.form
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="الاسم الكامل"
                  className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-right bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="البريد الإلكتروني"
                  className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-right bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="رقم الهاتف"
                  className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-right bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute right-4 top-6 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="أخبرنا عن احتياجاتك ونوع المشروع"
                  rows={4}
                  className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-right bg-gray-50 focus:bg-white resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                إرسال الطلب
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-gray-600 text-sm mt-4"
            >
              سيتم التواصل معك خلال 24 ساعة
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestDiscount;
