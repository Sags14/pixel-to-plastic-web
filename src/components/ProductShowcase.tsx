import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const products = [
  {
    id: 1,
    name: "Kawaii Collection Set",
    image: product1,
    price: "$29.99",
    description: "A beautiful collection of cute anime characters with vibrant colors and perfect details.",
    featured: true
  },
  {
    id: 2,
    name: "Purple Hair Warrior",
    image: product2,
    price: "$19.99",
    description: "Detailed 3D printed figurine with intricate hair design and expressive features.",
    featured: false
  },
  {
    id: 3,
    name: "Electric Blue Hero",
    image: product1,
    price: "$24.99",
    description: "Dynamic pose with stunning blue accents and high-quality finish.",
    featured: false
  },
  {
    id: 4,
    name: "Neon Dreams Series",
    image: product2,
    price: "$34.99",
    description: "Limited edition series with glow-in-the-dark elements and premium materials.",
    featured: true
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular 3D printed anime characters, each one carefully designed and printed with premium materials.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-hover border-0 shadow-card overflow-hidden">
              <div className="relative">
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Featured
                  </div>
                )}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-gradient-secondary hover:opacity-90 transition-opacity"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;