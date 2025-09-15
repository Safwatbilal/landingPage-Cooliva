import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Orb from "./bits/Orb";

const Landing = () => {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-70px)] overflow-hidden"
    >
      {/* Network Background Pattern */}
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

      {/* Orb Background */}
      <div className="absolute inset-0  opacity-80">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={true}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-25 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            stiffness: 80,
          }}
          className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
            حلول التبريد
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
            متكاملة وموثوقة
          </span>
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-xl lg:text-1xl xl:text-2xl  text-primary mb-8 font-medium"
        >
          خبرة في تنفيذ المشاريع وفق أعلى معايير الجودة
        </motion.h2>

        {/* <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-gray-400 mb-12 max-w-4xl leading-relaxed"
        >
          نقدم تصميم، توريد وتركيب غرف التبريد والتجميد بجميع أنواعها، مع حلول
          مبتكرة لعزل سيارات النقل المبرد وتركيب وحدات التبريد المختلفة.
        </motion.p> */}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 "
        >
          <a
            href="#project"
            className="gradient z-50 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 min-w-[200px] text-center inline-block"
          >
            استكشف مشاريعنا{" "}
          </a>

          <a
            href="#about"
            className="border-2 z-50 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group min-w-[200px] text-center inline-block"
          >
            تصفح المزيد
          </a>
        </motion.div>
      </div>

      {/* Go Down Arrow */}
      <motion.a
        href="#about"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 z-30 left-1/2 transform -translate-x-1/2 text-secondary hover:text-purple-300 transition-colors duration-300 font-bold text-5xl"
      >
        <ChevronDown size={50} className="animate-bounce" />
      </motion.a>

      <style>{`
        @keyframes upAndDown {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Landing;
