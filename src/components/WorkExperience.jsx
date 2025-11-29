import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import JungleLogo from '@/assets/Jungle_logo.png';
import ShikshaSathiLogo from '@/assets/Shiksha_Sathi.png';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Jungle',
      logo: JungleLogo,
      role: 'Software Developer Intern',
      location: 'Remote',
      period: 'Nov 2025 - Present',
      mode: 'Remote',
      current: true,
      bullets: [
        (
          <>
            Engineered automated pipelines that extract and auto-populate tool details using either the tool name or
            URL, reducing manual work by <span className="text-primary font-semibold">70%</span> for both admin and user flows.
          </>
        ),
        (
          <>
            Developed an admin dashboard enabling tool approval/rejection workflows, improving moderation efficiency
            and content quality.
          </>
        ),
        (
          <>
            Worked closely with senior developers while planning and releasing new features, ensuring they matched
            project goals and future scalability.
          </>
        )
      ]
    },
    {
      company: 'Shiksha Sathi',
      logo: ShikshaSathiLogo,
      role: 'Full Stack Developer Intern',
      location: 'Remote',
      period: 'Apr 2025 - Jun 2025',
      mode: 'Remote',
      current: false,
      bullets: [
        (
          <>
            Designed and deployed responsive React-based UIs, increasing mobile engagement by
            <span className="text-primary font-semibold"> 25%</span>.
          </>
        ),
        (
          <>
            Implemented real-time chat using <span className="font-semibold">Socket.IO</span>, bringing message
            latency down from <span className="text-primary font-semibold">500ms</span> to
            <span className="text-primary font-semibold"> 200ms</span>, which improved live-session retention.
          </>
        ),
        (
          <>
            Improved API performance and optimized frontend state management for a smoother user experience.
          </>
        )
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Briefcase className="h-4 w-4" />
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional roles and internships that demonstrate impact, collaboration, and product-focused delivery
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 md:-translate-x-1/2 mt-8 z-10 shadow-lg shadow-primary/30">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="group card-hover border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-6">
                      {/* Header with logo */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-background border border-border/50 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                            {exp.current && (
                              <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{exp.mode}</Badge>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-3">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
