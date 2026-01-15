const Skills = () => {
  const expertise = [
    {
      category: "Backend Engineering",
      skills: ["API Design", "Service Architecture", "Database Optimization", "Caching Strategies"]
    },
    {
      category: "Systems Design",
      skills: ["Distributed Systems", "Consensus Protocols", "Load Balancing", "Fault Tolerance"]
    },
    {
      category: "Performance",
      skills: ["Profiling & Benchmarking", "Memory Optimization", "Latency Reduction", "Throughput Scaling"]
    },
    {
      category: "Applied AI",
      skills: ["RAG Systems", "LLM Integration", "Vector Databases", "Prompt Engineering"]
    }
  ];

  const services = [
    "Backend system design and implementation",
    "Distributed system architecture consulting",
    "High-performance service optimization",
    "GenAI / RAG application development"
  ];

  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Skills & Services</p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Core Expertise</h2>
            <div className="space-y-8">
              {expertise.map((item) => (
                <div key={item.category}>
                  <h3 className="text-sm font-medium text-foreground mb-3">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8">Services Offered</h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-medium text-foreground mb-3">Languages & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">C++</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Go</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Kafka</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Kubernetes</span>
                <span className="tech-tag">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
