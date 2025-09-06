import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your favorite anime characters to life? Contact us for orders, 
            custom requests, or any questions about our 3D printing services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-2 focus:border-primary" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What can we help you with?" className="border-2 focus:border-primary" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or questions..." 
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're here to help bring your anime dreams to reality. Choose the contact method that works best for you.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-bright-purple shadow-card card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-muted-foreground">orders@anime3dprint.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-hot-pink shadow-card card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-ANIME</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-electric-blue shadow-card card-hover">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Live Chat</h4>
                    <p className="text-muted-foreground">Available 9 AM - 6 PM EST</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-secondary/10 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">Custom Orders Welcome!</h4>
              <p className="text-muted-foreground">
                Got a specific character or design in mind? We love working on custom projects. 
                Just send us the details and we'll bring your vision to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;