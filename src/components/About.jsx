import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Approaching complex challenges with analytical thinking and innovative solutions."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Arvind Choudhary, a passionate B.Tech student at IIIT Trichy with expertise in 
            Software Development and AI integration.          </p>
        </div>

        {/* Profile Photo Section */}
        <div className="flex justify-center mb-16">
          <div className="w-40 h-40 rounded-full border-4 border-primary/20 overflow-hidden shadow-lg">
            <img 
              src={profilePhoto} 
              alt="Professional profile photo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing B.Tech in Electronics and Communication Engineering at IIIT Trichy 
                with a CGPA of 8.59/10.0. 
              </p>
              <p>
                My expertise spans across modern web technologies including the MERN stack, and I'm particularly 
                passionate about AI integration in web applications. I'm expert in Building AI Agents and AI workflow Design.
              </p>
              <p>
                I'm an active competitive programmer with a Knight rating (1935) on LeetCode, ranking in the 
                top 3% globally with 800+ solved problems. I've also achieved 3-Star rating on CodeChef and 
                participate regularly in hackathons including Smart India Hackathon and Build With India.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-card to-muted/20">
                <CardContent className="p-0">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;