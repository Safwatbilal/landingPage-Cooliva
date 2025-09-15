import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  Briefcase,
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";
import SplitText from "./bits/SplitText";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "home", label: "الرئيسية", href: "#home", icon: Home },
    { id: "about", label: "من نحن", href: "#about", icon: Users },
    { id: "services", label: "الخدمات", href: "#services", icon: Settings },
    { id: "projects", label: "المشاريع", href: "#projects", icon: Briefcase },
    { id: "contact", label: "اتصل بنا", href: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <header
        className={`sticky h-[70px] top-0 inset-x-0 z-[9999] transition-all duration-300  ${
          isScrolled
            ? "bg-black/50 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto p-4 ">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between ">
            {/* Logo */}
            <div>
              <a className="gradient cursor-pointer text-white font-semibold px-8 py-2 rounded-lg hover:scale-105 transition-transform duration-300 min-w-[200px] text-center inline-block">
                اطلب عرض سعر
              </a>
            </div>
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-[16px] font-medium text-white hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-sm px-4 py-2"
              >
                <SplitText
                  text="avilooC"
                  delay={0.1}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                  className="text-white font-medium"
                />
              </motion.div>
              <img
                src="/logo/PNG/Symbol.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between relative">
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-3"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </Button>

            {/* Logo Section */}
            <div className="flex items-center gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-sm px-4 py-2"
              >
                <SplitText
                  text="avilooC"
                  delay={0.1}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                  className="text-white font-medium"
                />
              </motion.div>
              <img
                src="/logo/PNG/Symbol.png"
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} direction="right">
        <DrawerContent className="h-full z-[9999] w-[350px] max-w-[90vw] gradient backdrop-blur-xl border-l border-white/10 shadow-2xl">
          {/* Header */}
          <div className="absolute inset-0 bg-black/60 z-[-2]"></div>
          <DrawerHeader className="border-b border-white/10 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 gradient ">
                  <img
                    src="/logo/PNG/Symbol.png"
                    alt="Logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <DrawerTitle className="text-white font-bold text-xl">
                  Cooliva
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          {/* Navigation Menu */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 p-4 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 font-medium hover:translate-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                        <IconComponent className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-lg flex-1">{item.label}</span>
                      <ArrowRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                );
              })}
            </nav>
            <div className="p-6 border-t border-white/10 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <div className="relative group">
                  <a className="gradient cursor-pointer text-white font-semibold px-8 py-2 rounded-lg hover:scale-105 transition-transform duration-300 min-w-[200px] text-center inline-block">
                    اطلب عرض سعر
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Button at Bottom */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
