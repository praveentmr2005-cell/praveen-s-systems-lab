import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Experience</p>
        
        <div className="max-w-3xl">
          <div className="border-l-2 border-border pl-8 pb-2">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
              
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Product Engineering Intern</h3>
                  <a 
                    href="https://liquidmind.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                  >
                    LiquidMind.AI <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-sm font-mono text-muted-foreground">Jun – Jul 2025</span>
              </div>
              
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Designed and implemented backend architecture for AI-powered product features. Focus on service boundaries, data flow optimization, and production deployment considerations.
                </p>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Contributions</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Architected distributed service layer handling 50K+ daily API calls with &lt;100ms p99 latency</li>
                    <li>• Implemented async processing pipeline reducing user-facing response times by 40%</li>
                    <li>• Designed caching strategy with Redis, achieving 85% cache hit rate for hot paths</li>
                    <li>• Established monitoring and alerting infrastructure for production observability</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
