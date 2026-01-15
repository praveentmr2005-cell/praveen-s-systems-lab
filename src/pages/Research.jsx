const Research = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-semibold mb-4">
            Research & Technical Interests
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            My interests lie at the intersection of systems engineering and
            machine learning infrastructure, particularly where ML workloads
            stress operating systems, runtimes, compilers, and hardware
            scheduling.
          </p>
        </header>

        {/* ML Systems */}
        <section className="mb-14">
          <h2 className="section-subheading">ML Systems & Infrastructure</h2>
          <p className="text-muted-foreground leading-relaxed">
            Modern ML workloads exhibit highly variable GPU utilization, memory
            pressure, and scheduling inefficiencies that are poorly surfaced by
            existing observability tooling. My work on system-level telemetry
            explored how correlating runtime signals can expose starvation and
            underutilization patterns that are invisible at the framework level.
          </p>
        </section>

        {/* Compiler + AI */}
        <section className="mb-14">
          <h2 className="section-subheading">
            Compilers & AI-Augmented Tooling
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am interested in how language models can assist compiler pipelines
            without compromising correctness. My compiler work explored
            triggering LLM-assisted IR rewrites only when static analysis
            predicts register pressure, paired with semantic verification to
            prevent invalid transformations.
          </p>
        </section>

        {/* Open Questions */}
        <section className="mb-14">
          <h2 className="section-subheading">Open Questions</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>
              • How can ML workloads become more schedulable and observable at
              the OS and runtime level?
            </li>
            <li>
              • Where are the correctness boundaries for AI-assisted program
              optimization?
            </li>
            <li>
              • How should systems expose performance signals to higher-level ML
              frameworks?
            </li>
          </ul>
        </section>

        {/* Direction */}
        <section>
          <h2 className="section-subheading">Direction</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am particularly interested in roles and research environments that
            operate close to the boundary between systems and ML, where
            performance, correctness, and observability intersect.
          </p>
        </section>

      </div>
    </section>
  );
};

export default Research;
