const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="public\Images\ToonTrove.png" alt="ToonTrove Logo" className="h-10 w-25"/>
           
          </div>
        <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-primary hover:bg-clip-text group"
            >
              Home
            </a>
            <a 
               href="#about"
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-primary hover:bg-clip-text group"
            >
              About Us
            </a>
             <a   
              href="#contact" 
              className="relative px-4 py-2 text-foreground font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-primary hover:bg-clip-text group"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;