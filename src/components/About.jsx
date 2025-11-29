import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Rocket, Users, GraduationCap, MapPin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Approaching complex challenges with analytical thinking and innovative solutions."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Photo and info card */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-background p-1">
                  <img 
                    src={profilePhoto} 
                    alt="Arvind Choudhary" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Quick info card */}
            <Card className="mt-8 w-full max-w-xs glass card-hover">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Education</div>
                    <div className="font-medium">B.Tech @ IIIT Tiruchirappalli</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">Jaipur, India</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-1">CGPA</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[86%] bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                    <span className="font-bold text-primary">8.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Journey and features */}
          <div className="lg:col-span-3 space-y-8">
            {/* Journey section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-medium">Arvind Choudhary</span>, currently pursuing B.Tech in Electronics and Communication Engineering at IIIT Tiruchirappalli (2023-2027).
                </p>
                <p>
                  My expertise spans modern web technologies including <span className="text-primary font-medium">Next.js, React, TypeScript, PostgreSQL, tRPC</span>, and I'm particularly 
                  passionate about <span className="text-primary font-medium">AI integration</span> in web applications using OpenAI APIs and Drizzle ORM.
                </p>
                <p>
                  I'm an <span className="text-foreground font-medium">ICPC Asia West Regionalist 2025</span> and <span className="text-foreground font-medium">Knight (1975)</span> on LeetCode, ranking in the 
                  top 2% globally with 1000+ solved problems. Also a CodeForces Specialist (1430) and CodeChef 3-Star (1677).
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="group card-hover border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;