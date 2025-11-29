import { Github, Linkedin, Twitter, Heart, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: "https://github.com/Arvind054", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/arvindchoudhary054/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://x.com/Arvind637865", label: "Twitter" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <button onClick={scrollToTop} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Arvind<span className="text-primary">.dev</span>
              </span>
            </button>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} Arvind Choudhary. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 mx-1" /> by Arvind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;