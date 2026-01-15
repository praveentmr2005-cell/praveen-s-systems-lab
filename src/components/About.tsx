const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">About</p>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Systems-focused engineer with a bias for correctness and performance.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Undergraduate Computer Science student at IIIT Kancheepuram pursuing a dual degree (graduating 2028). My work centers on backend engineering, systems design, and distributed architectures where measurable impact matters more than feature count.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I approach problems through constraint-driven design, benchmark before optimizing, and document trade-offs explicitly. The goal is always clarity and correctness first, then performance.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Education</h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">Dual Degree, Computer Science</p>
                <p>IIIT Kancheepuram</p>
                <p className="text-sm font-mono">2024 – 2028</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Engineering Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Systems performance and correctness</li>
                <li>• Distributed coordination and scaling trade-offs</li>
                <li>• Practical application of GenAI in backend systems</li>
                <li>• Memory-efficient data structures</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Approach</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Constraint-driven design</span>
                <span className="tech-tag">Benchmark first</span>
                <span className="tech-tag">Trade-off documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
