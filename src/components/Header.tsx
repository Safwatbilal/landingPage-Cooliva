import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "الرئيسية", href: "#home" },
    { id: "about", label: "من نحن", href: "#about" },
    { id: "services", label: "الخدمات", href: "#services" },
    { id: "projects", label: "المشاريع", href: "#projects" },
    { id: "contact", label: "اتصل بنا", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50">
        <div className="container mx-auto px-6">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl  px-8 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo/PNG/Symbol.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-white-900 hover:bg-gray-800 !text-white rounded-xl px-6 font-medium shadow-lg hover:shadow-xl transition-all"
              >
                اطلب عرض سعر
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl  px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/logo/PNG/Symbol.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="mt-4 pt-4 border-t border-primary">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="px-4 py-3 text-white hover:bg-gray-50 rounded-xl transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 !text-white rounded-xl font-medium"
                  >
                    اطلب عرض سعر
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Header;
