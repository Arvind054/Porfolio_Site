import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Trophy, Code, Layout, Server, Wrench } from 'lucide-react';
import LeetCodePNG from '../assets/LeetCodePNG.png';
import CodeChefPNG from '../assets/CodeChefPNG.png';
import CodeForcesLogo from '../assets/CodeForcesLogo.png';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C/C++", "JavaScript", "SQL", "TypeScript"],
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      icon: <Layout className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "JWT", "tRPC", "Drizzle ORM"],
      icon: <Server className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "Docker", "Postman", "Vercel", "AWS (EC2, S3)"],
      icon: <Wrench className="h-6 w-6" />,
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const experience = [
    { label: "LeetCode", value: "Knight (1975)", logo: LeetCodePNG, url: "https://leetcode.com/u/ArvindChoudhary054/", highlight: true },
    { label: "CodeForces", value: "Specialist (1430)", logo: CodeForcesLogo, url: "https://codeforces.com/profile/arvindchoudhary054" },
    { label: "CodeChef", value: "3⭐ (1677)", logo: CodeChefPNG, url: "https://www.codechef.com/users/arvind_054" },
    { label: "ICPC 2025", value: "Asia West Regionalist", url: "#" }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider mb-6" />
        </div>

        {/* Skills Grid - Clean horizontal layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shrink-0`}>
                  {category.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1.5 text-sm bg-muted/80 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Stats */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Competitive Programming</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {experience.map((stat, index) => (
              <a
                key={index}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${stat.highlight ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40' : 'bg-card/50 border-border/50 hover:border-primary/30'}`}
              >
                <div className="mb-3">
                  {stat.logo ? (
                    <img src={stat.logo} alt={stat.label} className="w-10 h-10 object-contain" />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <div className="text-base font-bold text-foreground group-hover:text-primary transition-colors text-center">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  {stat.label}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;