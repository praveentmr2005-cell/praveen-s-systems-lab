const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">About</p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Narrative */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Systems-focused engineer with a bias for correctness and performance.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I am an undergraduate Computer Science student pursuing a dual
              degree (B.Tech + M.Tech) at IIITDM Chennai, graduating in 2028. My
              work centers on backend systems, distributed architectures, and
              performance-sensitive software where trade-offs are explicit and
              measurable.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am particularly interested in understanding systems from first
              principles—how data structures, memory layout, scheduling, and
              failure semantics interact in real-world workloads—and applying
              that understanding to both infrastructure and ML-adjacent systems.
            </p>
          </div>

          {/* Grounding & context */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Education
              </h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">
                  B.Tech + M.Tech, Computer Science and Engineering
                </p>
                <p>
                  Indian Institute of Information Technology, Design and
                  Manufacturing
                </p>
                <p className="text-sm font-mono mt-1">
                  2023 – 2028 | Chennai, India
                </p>
                <p className="text-sm font-mono text-accent">
                  8.83 / 10 CGPA (current)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Academic Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Operating Systems</span>
                <span className="tech-tag">Compilers</span>
                <span className="tech-tag">Algorithms</span>
                <span className="tech-tag">Distributed Systems</span>
                <span className="tech-tag">Computer Architecture</span>
                <span className="tech-tag">Databases</span>
                <span className="tech-tag">Machine Learning Systems</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">
                Orientation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I gravitate toward problems that require reasoning about
                performance, correctness, and scalability under constraints,
                and I prefer designs that are simple to reason about even when
                they are harder to implement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
