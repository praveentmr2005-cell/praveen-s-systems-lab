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
                <ul className="space-y-3 text-sm">
                  <li>• Designed and implemented a scalable document processing system using Python, Azure Functions, Service Bus, Cosmos DB, and Docker.</li>
                  <li>• Reduced end-to-end document handling latency by ~90% through microservice decomposition and parallel task execution.</li>
                  <li>• Developed a FIFO batching mechanism that increased throughput from ~1 to 12–16 documents/minute under load.</li>
                  <li>• Integrated GPT-4 and Azure Document Intelligence to extract CTQ fields from complex PDFs with 99%+ accuracy.</li>
                  <li>• Built a semantic validation layer using OpenAI embeddings to resolve inconsistent or ambiguous fields.</li>
                  <li>• Ensured exactly-once message processing via idempotent writes, state tracking, and consistency controls in Cosmos DB.</li>
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="metric-badge">~90% latency reduction</span>
                  <span className="metric-badge">12-16 docs/min throughput</span>
                  <span className="metric-badge">99%+ extraction accuracy</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Azure Functions</span>
                  <span className="tech-tag">Service Bus</span>
                  <span className="tech-tag">Cosmos DB</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">GPT-4</span>
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
