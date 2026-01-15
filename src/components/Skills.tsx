const Skills = () => {
  const skills = {
    systems: [
      "Backend system design",
      "Distributed task orchestration",
      "Throughput & latency optimization",
      "Fault isolation & failure handling",
      "Idempotency & exactly-once semantics"
    ],
    mlSystems: [
      "LLM integration in production systems",
      "Retrieval-Augmented Generation (RAG)",
      "Embedding-based semantic validation",
      "ML workload observability"
    ],
    implementation: [
      "C++",
      "Python",
      "JavaScript",
      "Java",
      "React",
      "Node.js",
      "Flask"
    ],
    infrastructure: [
      "Azure Functions",
      "Azure Service Bus",
      "Cosmos DB",
      "Docker",
      "MongoDB",
      "MySQL",
      "SQLite"
    ],
    tooling: [
      "Git",
      "Azure DevOps",
      "Postman",
      "CI/CD pipelines"
    ]
  };

  const services = [
    "Designing and implementing backend systems under real-world constraints",
    "Architecting distributed pipelines with clear failure semantics",
    "Optimizing performance-critical services (latency, throughput, memory)",
    "Building production-grade GenAI / RAG applications",
    "Designing cloud-native systems with operational visibility"
  ];

  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Skills & Capabilities</p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Capabilities */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Systems & Backend Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.systems.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                ML Systems & GenAI
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.mlSystems.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Implementation Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.implementation.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Infrastructure & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.infrastructure.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Tooling & Delivery
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tooling.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              What I Work On
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {service}
                  </span>
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
