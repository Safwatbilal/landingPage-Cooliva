"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  Snowflake,
  Thermometer,
  Truck,
  Building,
  Users,
  Award,
} from "lucide-react";
import SplitText from "./bits/SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Cooliva animation completed!");
  };

  const handleCTAClick = () => {
    console.log("CTA button clicked!");
  };

  const floatingItems = [
    {
      icon: <Snowflake className="w-6 h-6 text-blue-600" />,
      position: "top-20 right-40",
    },
    {
      icon: <Thermometer className="w-6 h-6 text-red-500" />,
      position: "top-40 right-20",
    },
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      position: "top-60 right-60",
    },
    {
      icon: <Building className="w-6 h-6 text-purple-600" />,
      position: "bottom-40 right-32",
    },
    {
      icon: <Users className="w-6 h-6 text-pink-600" />,
      position: "bottom-20 right-52",
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      position: "bottom-60 right-16",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 relative overflow-hidden bg-gray-50"
    >
      {/* Clean background with subtle dots pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #e5e7eb 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating service icons */}
      {floatingItems.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          style={{
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Card className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
            <CardContent className="p-0 flex items-center justify-center">
              {item.icon}
            </CardContent>
          </Card>
        </div>
      ))}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-right" dir="rtl">
            <div className="flex items-center justify-center lg:justify-start mb-12 flex-row-reverse">
              {/* Logo placeholder - clean icon style */}
              <div className="w-20 h-20 ml-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Snowflake className="w-10 h-10 text-white" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-4xl lg:text-6xl font-bold text-gray-900">
                  <SplitText
                    text="Cooliva"
                    className="text-5xl lg:text-7xl font-bold"
                    delay={150}
                    duration={0.8}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 60, rotationY: 90 }}
                    to={{ opacity: 1, y: 0, rotationY: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                    tag="span"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </CardTitle>
              </CardHeader>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                  حلول التبريد والتجميد{" "}
                  <span className="text-blue-600">الاحترافية</span> التي تبحث
                  عنها
                </CardTitle>
                <CardDescription className="text-xl lg:text-2xl text-gray-600 font-medium">
                  أصبحت الآن{" "}
                  <span className="text-blue-500 font-bold">
                    على بُعد نقرة واحدة!
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                <p className="text-gray-600 text-lg leading-relaxed">
                  مؤسسة متخصصة في توريد وتركيب غرف التبريد والتجميد بجميع
                  أنواعها
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  خبرة واسعة في تنفيذ المشاريع وفق أعلى معايير الجودة العالمية
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button
                onClick={handleCTAClick}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                ابدأ مشروعك الآن
                <Phone className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-8 py-4 rounded-2xl transition-all duration-300 font-medium"
              >
                طلب عرض سعر
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <Badge className="mt-8 bg-gray-100 text-gray-800 border border-gray-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              محمد العتيبي
            </Badge>
          </div>

          {/* Right Side - Central Statistics Circle */}
          <div className="flex items-center justify-center relative">
            <div className="relative">
              {/* Main central circle */}
              <Card className="w-80 h-80 bg-white/95 backdrop-blur-md rounded-3xl border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                <CardContent className="text-center relative z-10">
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    +100
                  </div>
                  <div className="text-gray-700 text-lg font-semibold">
                    مشروع منجز
                  </div>
                  <div className="text-gray-500 text-sm mt-2">بنجاح وتميز</div>
                </CardContent>

                {/* Decorative icons */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
                  <Snowflake className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                  <Thermometer className="w-6 h-6 text-red-500" />
                </div>
              </Card>

              {/* Floating stats around the circle */}
              <Card className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">
                    دعم فني
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-xs text-gray-600 font-medium">
                    سنة خبرة
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-purple-600">98%</div>
                  <div className="text-xs text-gray-600 font-medium">
                    رضا العملاء
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
