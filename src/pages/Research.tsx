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
            language models, particularly where inference-time behavior,
            reliability, and performance meet low-level execution details such
            as memory, scheduling, and caching.
          </p>
        </header>

        {/* LLM Reliability */}
        <section className="mb-14">
          <h2 className="section-subheading">
            LLM Reliability & Hallucination Detection
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Large language models often fail silently, producing fluent but
            ungrounded outputs. I am interested in detecting such failures
            during generation by monitoring white-box signals such as internal
            disagreement, output uncertainty, and attention grounding. My recent
            work explores inference-time monitoring that can halt or correct
            generation before hallucinated content appears, without relying on
            expensive sampling or post-hoc verification.
          </p>
        </section>

        {/* Inference & KV Cache */}
        <section className="mb-14">
          <h2 className="section-subheading">
            Inference-Time Control & KV Cache Interventions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am particularly interested in inference-time control mechanisms
            that operate below the prompt level. This includes selectively
            intervening in the generation process through techniques such as
            custom KV-cache ingestion, targeted context injection, and token-
            level rewinding. I see this as a promising direction for grounding,
            adaptive retrieval, and fine-grained safety controls that are tightly
            coupled to the model’s internal state.
          </p>
        </section>

        {/* Systems & ML Infra */}
        <section className="mb-14">
          <h2 className="section-subheading">
            ML Systems & Infrastructure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At the systems level, I am interested in how ML workloads stress
            hardware and runtimes in ways that are poorly exposed by existing
            tooling. My work on system-level telemetry explored correlating GPU,
            memory, and runtime signals to surface starvation and
            underutilization patterns that are invisible at the framework level.
            I’m interested in how similar observability principles apply to
            large-scale model inference.
          </p>
        </section>

        {/* Compiler + AI */}
        <section className="mb-14">
          <h2 className="section-subheading">
            Compilers & AI-Augmented Tooling
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I’m interested in how language models can assist traditional
            compiler pipelines without compromising correctness. My prior work
            explored triggering LLM-assisted IR rewrites only when static
            analysis predicts pressure points, paired with semantic validation
            to prevent invalid transformations. More broadly, I’m interested in
            principled ways to combine symbolic analysis with learned systems.
          </p>
        </section>

        {/* Open Questions */}
        <section className="mb-14">
          <h2 className="section-subheading">Open Questions</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>
              • How early can hallucinations be detected using internal model
              signals?
            </li>
            <li>
              • What inference-time interventions are both effective and
              computationally cheap?
            </li>
            <li>
              • How should models expose internal uncertainty and grounding
              signals to external systems?
            </li>
            <li>
              • Where is the right boundary between symbolic control and learned
              behavior in AI-assisted systems?
            </li>
          </ul>
        </section>

        {/* Direction */}
        <section>
          <h2 className="section-subheading">Direction</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am interested in research environments and roles that operate close
            to the boundary between systems and machine learning, especially
            where reliability, performance, and interpretability are first-class
            concerns.
          </p>
        </section>

      </div>
    </section>
  );
};

export default Research;
