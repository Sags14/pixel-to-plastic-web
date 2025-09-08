import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import  Header  from "@/pages/Header";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductShowcase />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
