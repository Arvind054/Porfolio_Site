import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Sparkles, ArrowRight } from 'lucide-react';
import MindFlowPicture from '../assets/MindFlowPicture.png';
import AiTravelImage from '../assets/AiTravelImage.png';
import Neural_Meet from '../assets/Neural_Meet.png'
const Projects = () => {
  const projects = [
    {
      title: "NeuralMeet",
      description: "A platform where users can create custom AI agents, hold real-time meetings with them, and automate task-specific interactions. Features post-meeting deliverables including recordings, transcriptions, and AI-generated summaries.",
      image: Neural_Meet,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "OpenAI"],
      liveUrl: "https://github.com/Arvind054/Neural-Meet",
      githubUrl: "https://github.com/Arvind054/Neural-Meet",
      featured: true,
      date: "Oct 2025"
    },
    {
      title: "MindFlow.AI",
      description: "Built an AI platform automating 90% of brainstorming workflows with customized mind-map generation. Implemented OAuth 2.0 authentication and dynamic PDF export for secure user access.",
      image: MindFlowPicture,
      technologies: ["React.js", "Node.js", "MongoDB", "Gemini API"],
      liveUrl: "https://mind-flowai.vercel.app/",
      githubUrl: "https://github.com/Arvind054/MindFlow",
      featured: true,
      date: "Aug 2025"
    },
    {
      title: "AI Travel Agent",
      description: "Comprehensive AI travel planner built with MERN stack and Google Gemini API, featuring intelligent trip planning, real-time suggestions, and seamless user authentication.",
      image: AiTravelImage,
      technologies: ["MongoDB", "Express.js", "React.js", "Gemini API"],
      liveUrl: "https://ai-travel-agent-ljkh.vercel.app/",
      githubUrl: "https://github.com/Arvind054/AI_Travel_Agent",
      featured: true,
      date: "Jun 2025"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in various technologies and problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group card-hover border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating date badge */}
                <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground border-none">
                  {project.date}
                </Badge>
              </div>

              <div className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-lg"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 rounded-lg border-border hover:border-primary hover:bg-primary/5"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 px-8"
            onClick={() => window.open("https://github.com/Arvind054", '_blank')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
