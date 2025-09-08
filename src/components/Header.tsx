const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">ToonTrove</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#products" 
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-primary hover:bg-clip-text group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--bright-purple))] to-[hsl(var(--hot-pink))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-secondary hover:bg-clip-text group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--electric-blue))] to-[hsl(var(--bright-purple))] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-accent hover:bg-clip-text group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--hot-pink))] to-[hsl(var(--sunset-orange))] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;