import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import AfterSales from "@/components/AfterSales";
import RequestDiscount from "@/components/RequestDiscount";

const HomePage = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-black/60"></div>
      <main className="gradient">
        <Header></Header>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />

        {/* <RequestDiscount /> */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
