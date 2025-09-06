import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
