const Skills = () => {
  const skills = {
    languages: ["Python", "JavaScript", "Java", "C++"],
    frameworks: ["React", "Redux", "Node.js", "Express.js", "Flask"],
    cloud: ["Azure Container Apps", "Azure Service Bus", "Cosmos DB", "Azure Functions", "Docker", "MongoDB", "MySQL", "SQLite"],
    tools: ["Git", "Azure DevOps", "Postman"],
    concepts: ["LLMs", "Retrieval-Augmented Generation (RAG)", "Microservices", "System Design", "Containerization", "CI/CD", "Distributed Processing"]
  };

  const services = [
    "Backend system design and implementation",
    "Distributed system architecture",
    "High-performance service optimization",
    "GenAI / RAG application development",
    "Cloud-native application development"
  ];

  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Skills & Services</p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Cloud & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Core Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
