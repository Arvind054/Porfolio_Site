import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl pt-20">
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Arvind</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-[1.2] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Software Developer</span>
            <span className="text-muted-foreground"> & </span>
            <span className="gradient-text">AI Enthusiast</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            B.Tech student at <span className="text-foreground font-medium">IIIT Tiruchirappalli</span> specializing in modern web technologies and AI integration. 
            Building scalable applications with <span className="text-primary font-medium">Next.js</span>, <span className="text-primary font-medium">Node.js</span>, and cutting-edge AI tools.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-6 py-2.5 rounded-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              View My Work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              className="group px-6 py-2.5 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={()=> window.open("https://drive.google.com/file/d/1wgCf27FV1wliWIgSK8v4UjgOFxCn28A5/view?usp=sharing", "_blank")}
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> 
              Download CV
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-wrap gap-6 md:gap-10">
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">1000+</div>
                <div className="text-xs text-muted-foreground mt-1">DSA Problems</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">Top 2%</div>
                <div className="text-xs text-muted-foreground mt-1">LeetCode Global</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">ICPC</div>
                <div className="text-xs text-muted-foreground mt-1">Asia West Regionalist</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <div className="text-xs text-muted-foreground mt-1">National Hackathons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;