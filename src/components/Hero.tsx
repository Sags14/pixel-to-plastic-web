import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">3D Printed</span>
                <br />
                Anime Dreams
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bring your favorite anime characters to life with our premium 3D printed figurines. 
                Each piece is carefully crafted with incredible detail and vibrant colors.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 btn-glow"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Characters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">Premium</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden pulse-glow">
              <img 
                src={heroImage} 
                alt="3D Printed Anime Characters Collection" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full blur-xl opacity-60 float"></div>
            <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-gradient-secondary rounded-full blur-xl opacity-40 float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;