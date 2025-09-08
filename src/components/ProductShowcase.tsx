import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import products from "../data/products.json";

const ProductShowcase = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            From Circuits<span className="text-gradient"> to Soul</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-7xl mx-auto">
          At ToonTrove, we bring imagination to life through 3D printing. Each creation blends quirky charm, creativity, and craftsmanship. From decor and collectibles to custom designs, we craft unique pieces with passion and precision—adding playfulness and character to every space, because your world deserves stories told in style.
          </p>
        </div>
        <div className="flex flex-col items-center mb-10">
          <span className="inline-block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text text-2xl font-semibold tracking-wide px-6 py-2 rounded-lg shadow-sm">
            Because every purchase has its story
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {visibleProducts.map((product) => (
            <Card key={product.id} className="card-hover border-0 shadow-card overflow-hidden w-75 mx-auto">
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
          {!showAll && (
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              onClick={() => setShowAll(true)}
            >
              View All Products
            </Button>
          )}
          {showAll && (
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              onClick={() => setShowAll(false)}
            >
              Show Less Products
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;