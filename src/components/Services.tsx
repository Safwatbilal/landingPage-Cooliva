import React, { useState, useEffect } from "react";
import {
  Snowflake,
  Truck,
  Factory,
  Wrench,
  Thermometer,
  Settings,
  Sparkles,
} from "lucide-react";
import LightRays from "./bits/lights";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const cardId = parseInt(target.dataset.cardId || "0");
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, cardId]));
            }, cardId * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCardStyle = (serviceId: number) => {
    const isVisible = visibleCards.has(serviceId);
    const isHovered = hoveredCard === serviceId;

    return {
      transform: `translateY(${isVisible ? "0" : "60px"}) scale(${
        isHovered ? "1.03" : isVisible ? "1" : "0.8"
      }) ${isHovered ? "translateY(-15px)" : ""}`,
      opacity: isVisible ? 1 : 0,
      boxShadow: isHovered
        ? "0 25px 50px -12px #20bdff"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getIconStyle = (serviceId: number) => {
    const isHovered = hoveredCard === serviceId;

    return {
      transform: `scale(${isHovered ? "1.2" : "1"}) rotate(${
        isHovered ? "360deg" : "0deg"
      })`,
      backgroundColor: isHovered ? "#20bdff" : "#374151",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getBorderStyle = (serviceId: number) => {
    const isHovered = hoveredCard === serviceId;

    return {
      width: isHovered ? "100%" : "0%",
      transition: "width 0.4s ease-out",
    };
  };

  const getNumberStyle = (serviceId: number) => {
    const isHovered = hoveredCard === serviceId;

    return {
      transform: `scale(${isHovered ? "1.1" : "1"})`,
      backgroundColor: isHovered ? "#20bdff" : "#20bdff99",
      transition: "all 0.3s ease-out",
    };
  };

  const getDividerStyle = (serviceId: number) => {
    const isHovered = hoveredCard === serviceId;

    return {
      transform: `skewX(${isHovered ? "18deg" : "12deg"})`,
      backgroundColor: isHovered ? "#6b7280" : "#4b5563",
      transition: "all 0.3s ease-out",
    };
  };

  const getInfoStyle = (serviceId: number) => {
    const isHovered = hoveredCard === serviceId;

    return {
      backgroundColor: isHovered ? "#1f2937" : "#111827",
      transform: `translateY(${isHovered ? "-3px" : "0px"})`,
      transition: "all 0.3s ease-out",
    };
  };

  return (
    <section id="services" className="py-20 bg-gray-900" dir="rtl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 gradient text-white font-bold text-2xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1">
          <Sparkles className="w-6 h-6 animate-spin " />
          <span>خدماتنا المتميزة</span>
          <Sparkles
            className="w-6 h-6 animate-spin "
            style={{ animationDelay: "0.5s" }}
          />
        </div>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          نقدم مجموعة شاملة من حلول التبريد المتطورة لتلبية جميع احتياجاتكم
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              data-card-id={service.id}
              className="service-card group relative bg-slate-800 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-slate-700"
              style={getCardStyle(service.id)}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
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

              <div
                className="absolute top-0 left-1/2 h-1 -translate-x-1/2"
                style={{
                  backgroundColor: "#20bdff",
                  ...getBorderStyle(service.id),
                }}
              />

              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                    style={getIconStyle(service.id)}
                  >
                    <service.icon
                      size={40}
                      className={`transition-colors duration-300 ${
                        hoveredCard === service.id
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                </div>

                <h3
                  className="text-lg font-semibold text-center mb-8 leading-relaxed transition-all duration-300"
                  style={{
                    color: hoveredCard === service.id ? "#20bdff" : "#e2e8f0",
                    transform: `scale(${
                      hoveredCard === service.id ? "1.02" : "1"
                    })`,
                  }}
                >
                  {service.title}
                </h3>

                <div
                  className="relative p-4 -mx-8 -mb-8"
                  style={getInfoStyle(service.id)}
                >
                  <div
                    className="absolute right-0 top-0 bottom-0 w-20 text-white flex items-center justify-center font-bold text-2xl"
                    style={getNumberStyle(service.id)}
                  >
                    <span>{service.id.toString().padStart(2, "0")}</span>
                  </div>

                  <div
                    className="absolute right-20 top-0 bottom-0 w-12"
                    style={getDividerStyle(service.id)}
                  />

                  <div
                    className="text-left pr-32 transition-transform duration-300"
                    style={{
                      transform: `translateX(${
                        hoveredCard === service.id ? "8px" : "0px"
                      })`,
                    }}
                  >
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold transition-all duration-300"
                      style={{
                        color:
                          hoveredCard === service.id ? "#20bdff" : "#20bdff99",
                        transform: `scale(${
                          hoveredCard === service.id ? "1.05" : "1"
                        })`,
                      }}
                    ></a>
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: hoveredCard === service.id ? 1 : 0,
                  boxShadow: "inset 0 0 0 1px #20bdff",
                }}
              />

              {hoveredCard === service.id && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: "#20bdff",
                        left: `${15 + i * 12}%`,
                        top: `${20 + i * 8}%`,
                        animationDelay: `${i * 0.15}s`,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>
              )}

              {hoveredCard === service.id && (
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none animate-ping z-10"
                  style={{
                    background:
                      "radial-gradient(circle, #20bdff 0%, transparent 70%)",
                    animationDuration: "1.5s",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
