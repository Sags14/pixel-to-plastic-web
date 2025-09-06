import { Card, CardContent } from "@/components/ui/card";
import processImage from "@/assets/process-image.jpg";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Crafted with <span className="text-gradient">Precision</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every figurine is created using state-of-the-art 3D printing technology, 
                ensuring incredible detail and durability. From concept to completion, 
                we maintain the highest standards of quality.
              </p>
            </div>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-bright-purple shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-bright-purple">Premium Materials</h3>
                  <p className="text-muted-foreground">
                    We use only the finest PLA+ and PETG filaments for superior strength and vibrant colors.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-hot-pink shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-hot-pink">Detailed Finishing</h3>
                  <p className="text-muted-foreground">
                    Each piece is carefully post-processed, painted, and finished by hand for perfection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-electric-blue shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-electric-blue">Custom Requests</h3>
                  <p className="text-muted-foreground">
                    Have a specific character in mind? We offer custom 3D printing services for unique requests.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Process image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={processImage} 
                alt="3D Printing Process"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;