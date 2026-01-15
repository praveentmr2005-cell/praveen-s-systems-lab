import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="section-heading mb-16">Selected Systems</p>

        {/* ============================= */}
        {/* Flagship Project – Case Study */}
        {/* ============================= */}
        <div className="project-card mb-24">
          <div className="p-10 md:p-14">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="metric-badge mb-4 inline-block">
                  Flagship Case Study
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                  Low-Latency Limit Order Book
                </h3>
                <p className="text-muted-foreground max-w-2xl">
                  A performance-oriented matching engine built to study how data
                  structure choice, allocator behavior, and cache locality
                  influence tail latency in exchange-style systems.
                </p>
              </div>

              <a
                href="https://github.com/TMR2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="metric-badge">9.8M ops/sec</span>
              <span className="metric-badge">~101 ns/op avg</span>
              <span className="metric-badge">~30% faster than std::map</span>
            </div>

            {/* Teaser Narrative */}
            <div className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
              <p>
                The engine is intentionally single-threaded to remove
                synchronization from the hot path and make performance limits
                attributable to memory layout and allocator pressure rather than
                concurrency artifacts. Tree-based price levels were replaced
                with array-indexed levels and intrusive FIFO lists to eliminate
                pointer chasing and heap allocation during order matching.
              </p>
              <p className="mt-4">
                A deterministic synthetic workload and microbenchmark harness
                were built to quantify throughput, average latency, and
                regression effects across design iterations.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <a
                href="/projects/limit-order-book"
                className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                Read the full design write-up
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-muted-foreground">
                includes benchmarks, trade-offs, and failure analysis
              </span>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* Supporting Systems (Condensed) */}
        {/* ============================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              Real-Time Collaborative Code Platform
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              CRDT-based multi-user editor
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Explored CRDT-driven conflict-free synchronization for concurrent
              code editing, separating real-time collaboration paths from
              persistence and execution using Redis-backed queues.
            </p>
            <a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              MLinux – ML-Aware Linux Telemetry Layer
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              GPU telemetry & optimization tooling
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Built a system-level telemetry daemon around NVIDIA NVML to surface
              GPU starvation, memory pressure, and utilization patterns, with a
              TUI dashboard for live inspection of ML workloads.
            </p>
            <a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">LANCast</h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              Offline LAN audio/video conferencing
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Implemented a LAN-only conferencing system using TCP for control
              and UDP for low-latency audio/video streaming, balancing bandwidth
              usage against frame stability under constrained networks.
            </p>
            <a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Project 4 */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              AI-Augmented Compiler for MiniC
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              Compiler pipeline with MIPS backend
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Built a full compiler pipeline and experimented with LLM-assisted
              IR rewriting triggered by liveness-based register pressure
              analysis, with semantic verification to prevent invalid
              transformations.
            </p>
            <a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
