import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 border-t border-border"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="section-heading mb-16">
          Selected Systems
        </p>

        {/* =============================== */}
        {/* Flagship Case Study (Teaser) */}
        {/* =============================== */}
        <div className="project-card mb-24">
          <div className="p-10 md:p-14">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="metric-badge mb-4 inline-block">
                  Flagship case study
                </span>

                <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                  Low-Latency Limit Order Book
                </h3>

                <p className="text-muted-foreground max-w-2xl">
                  A single-threaded matching engine built to study how
                  data-structure choice, allocator behavior, and cache locality
                  affect latency in exchange-style systems.
                </p>
              </div>

              <a
                href="https://github.com/TMR2005/Limit-Order-Book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <span className="metric-badge">9.8M ops/sec</span>
              <span className="metric-badge">~101 ns/op avg</span>
              <span className="metric-badge">~30% faster than std::map</span>
            </div>

            <div className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
              <p>
                The system intentionally avoids concurrency to eliminate
                synchronization overhead from the hot path, making performance
                costs attributable to memory layout and allocation behavior.
                Tree-based price levels were replaced with array-indexed levels
                and intrusive FIFO lists to remove pointer chasing and heap
                allocation during order matching.
              </p>
            </div>

            <a
              href="/projects/limit-order-book"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              Read the full design write-up
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* =============================== */}
        {/* Supporting Work (Condensed) */}
        {/* =============================== */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* CRDT – LIVE */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              Real-Time Collaborative Code Platform
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              CRDT-based multi-user editor
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Explored conflict-free synchronization using CRDTs, separating
              real-time collaboration paths from persistence and execution via
              Redis-backed queues.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://collaborativecoder.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                Live demo
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/TMR2005/CollaborativeCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Source
              </a>
            </div>
          </div>

          {/* ML Systems */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              MLinux – ML-Aware Linux Telemetry
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              GPU observability & optimization
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Built a system-level telemetry daemon around NVIDIA NVML to surface
              GPU utilization, memory pressure, and starvation patterns in ML
              workloads.
            </p>
            <a
              href="https://github.com/TMR2005/Mlinux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Networking */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              LANCast
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              Offline LAN audio/video conferencing
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Implemented a LAN-only conferencing system using TCP for control
              and UDP for low-latency media streaming under bandwidth
              constraints.
            </p>
            <a
              href="https://github.com/TMR2005/LAN-Based-Conference-Application-for-Windows"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              View project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Compiler */}
          <div className="project-card p-8">
            <h4 className="text-lg font-semibold mb-2">
              AI-Augmented Compiler for MiniC
            </h4>
            <p className="text-xs text-muted-foreground font-mono mb-4">
              Compiler pipeline with MIPS backend
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Built a full compiler pipeline and explored LLM-assisted IR
              rewriting triggered by liveness-based register pressure analysis,
              with semantic verification to preserve correctness.
            </p>
            <a
              href="https://github.com/TMR2005/AI-Augumented-Smart-Compiler"
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
