import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Header from "./Header";

const Landing = () => {
  return (
    <section
      id="home"
      className="h-screen top-0 inset-0  bg-cover bg-center "
      style={{ backgroundImage: "url('/back.png')" }}
    >
      <Header></Header>
      <div className="container-custom relative z-100 lg:p-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Mobile: Logo First (Order 1), Desktop: Right Side */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center md:justify-start order-1 md:order-2"
          >
            <img
              src="/logo/PNG/Symbol.png"
              alt="Landing illustration"
              className="h-32 md:h-56 w-auto"
              style={{
                animation: "upAndDown 5s ease-in-out infinite",
              }}
            />
          </motion.div>

          {/* Mobile: Content Second (Order 2), Desktop: Left Side */}
          <div className="text-center md:text-right text-gray-800 max-w-xl mx-auto md:mx-0 md:ml-auto order-2 md:order-1">
            {/* Main Heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed"
            >
              أهلاً بكم في
              <span className="text-primary block mt-2">Cooliva</span>
            </motion.h1>

            {/* Marketing Message */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-base md:text-lg lg:text-xl opacity-90 leading-relaxed px-4 md:px-0">
                نحن مؤسسة متخصصة في{" "}
                <span className="font-semibold text-primary">
                  توريد وتركيب غرف التبريد والتجميد
                </span>{" "}
                بجميع أنواعها، مع حلول متكاملة تلبي احتياجات مختلف القطاعات.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center"
            >
              <Button
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 !text-white rounded-xl px-6 font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                تواصل معنا
                <ArrowLeft className="w-5 h-5 transition-transform" />
              </Button>

              <Button
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 !text-white rounded-xl px-6 font-medium shadow-lg hover:shadow-xl transition-all"
              >
                اعرف المزيد
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Go Down Arrow */}
      <motion.a
        href="#about"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 z-100 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors duration-300"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>

      <style>{`
        @keyframes upAndDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Landing;
