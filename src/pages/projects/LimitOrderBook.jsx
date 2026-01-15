const LimitOrderBook = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Sticky context header */}
        <div className="sticky top-16 z-10 bg-background/80 backdrop-blur border-b border-border mb-20">
          <div className="px-2 py-3 flex justify-between text-xs text-muted-foreground font-mono">
            <span>Low-Latency Limit Order Book</span>
            <span>single-threaded · allocator-free hot path</span>
          </div>
        </div>

        {/* Title */}
        <header className="mb-24">
          <h1 className="text-4xl font-semibold mb-6 leading-tight">
            Low-Latency Limit Order Book
          </h1>

          <p className="text-muted-foreground leading-relaxed text-lg">
            This document describes the design and evaluation of a
            single-threaded limit order book implemented to study how data
            structure selection, allocator behavior, and cache locality affect
            latency and throughput in exchange-style matching engines.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <span className="metric-badge">C++</span>
            <span className="metric-badge">9.8M ops/sec</span>
            <span className="metric-badge">~101 ns/op</span>
            <span className="metric-badge">deterministic workload</span>
          </div>
        </header>

        {/* 1 */}
        <section className="mb-24 fade-in stagger-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">1</span>
            </div>
            <h2 className="section-subheading">
              Problem Statement and Constraints
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            The objective of this work is not to construct a production exchange,
            but to isolate performance bottlenecks in a simplified matching
            engine. In particular, the goal is to attribute latency costs to
            concrete implementation choices such as memory layout, allocation
            strategy, and traversal patterns.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-4">
            To ensure that measurements reflect these factors directly, the
            system is intentionally constrained to single-threaded execution.
            This removes synchronization overhead and scheduler variability,
            allowing observed latency to be explained in terms of CPU cache
            behavior and control flow.
          </p>

          <div className="grid gap-3 mt-6">
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Single execution thread</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">No dynamic allocation in the hot path</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Deterministic, repeatable event streams</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Explicit separation of hot and cold paths</span>
            </div>
          </div>
        </section>

        {/* 2 */}
        <section className="mb-24 fade-in stagger-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">2</span>
            </div>
            <h2 className="section-subheading">
              System Architecture
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            At a high level, the engine processes a stream of order events
            (limit, cancel, match) through a tight matching loop operating over
            in-memory data structures. All components required for matching are
            resident in cache-friendly layouts.
          </p>

          <figure className="border border-border rounded-lg bg-muted/30 p-6 mb-8 overflow-x-auto">
            <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Incoming Events
     |
     v
+-------------------+
| Order Dispatcher  |
+-------------------+
     |
     v
+-------------------+
| Price Level Array |
|   (bid / ask)     |
+-------------------+
     |
     v
+-------------------+
| FIFO Order Lists  |
|   (intrusive)     |
+-------------------+
     |
     v
+-------------------+
| Matching Loop     |
+-------------------+`}
            </pre>
            <figcaption className="mt-3 text-xs text-muted-foreground font-medium">
              Figure 1 — High-level data flow of the matching engine
            </figcaption>
          </figure>

          <p className="text-muted-foreground leading-relaxed">
            Allocation, logging, and instrumentation are deliberately excluded
            from the matching loop and handled outside the critical execution
            path.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-24 fade-in stagger-3">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">3</span>
            </div>
            <h2 className="section-subheading">
              Baseline Implementation
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            The baseline implementation used tree-based price levels backed by
            <code className="mx-1">std::map</code> with heap-allocated order
            objects. This approach is straightforward and expressive but
            introduces significant pointer chasing and allocator interaction.
          </p>

          <p className="text-muted-foreground leading-relaxed mt-4">
            Profiling under mixed workloads showed allocator calls and tree
            traversal dominating execution time, inflating both average and
            tail latency.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-24 fade-in stagger-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">4</span>
            </div>
            <h2 className="section-subheading">
              Measurement Methodology
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            A deterministic synthetic workload generator was constructed to
            produce repeatable streams of limit, cancel, and match events.
            Throughput and per-operation latency were measured using a custom
            microbenchmark harness.
          </p>

          <div className="grid gap-3 mt-6">
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Fixed random seed per run</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Warm-up iterations excluded</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Steady-state throughput measurement</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-muted/10">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground font-mono">Allocation counters and timing probes</span>
            </div>
          </div>
        </section>

        {/* 5 */}
        <section className="mb-24 fade-in stagger-5">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">5</span>
            </div>
            <h2 className="section-subheading">
              Design Decisions and Trade-offs
            </h2>
          </div>

          <div className="space-y-12">
            <div className="border border-border rounded-lg p-6 bg-muted/10">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Array-Indexed Price Levels
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tree-based price maps were replaced with array-indexed levels to
                achieve constant-time access and predictable traversal.
              </p>
              <div className="pl-4 border-l-2 border-accent bg-accent/5 p-3 rounded-r-md">
                <strong className="font-medium text-accent">Trade-off:</strong> fixed price
                resolution and increased memory footprint.
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-muted/10">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Intrusive FIFO Order Lists
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Orders embed linkage directly within the order object,
                eliminating per-node allocation during matching.
              </p>
              <div className="pl-4 border-l-2 border-accent bg-accent/5 p-3 rounded-r-md">
                <strong className="font-medium text-accent">Trade-off:</strong> tighter
                coupling between data structure and order representation.
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-muted/10">
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Single-Threaded Matching
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Matching remains single-threaded to simplify correctness
                reasoning and ensure latency measurements reflect memory
                behavior rather than synchronization effects.
              </p>
              <div className="pl-4 border-l-2 border-accent bg-accent/5 p-3 rounded-r-md">
                <strong className="font-medium text-accent">Trade-off:</strong> no intra-book
                parallelism.
              </div>
            </div>
          </div>
        </section>

        {/* 6 */}
        <section id="results" className="mb-24 fade-in stagger-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">6</span>
            </div>
            <h2 className="section-subheading">
              Results
            </h2>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-muted-foreground font-mono text-sm">~9.8M operations/sec under mixed workload</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-muted-foreground font-mono text-sm">~101 ns/op average latency</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-muted-foreground font-mono text-sm">~30% throughput improvement over tree-based baseline</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/20">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-muted-foreground font-mono text-sm">~25% gain after allocator elimination</span>
            </div>
          </div>
        </section>

        {/* 7 */}
        <section className="mb-24 fade-in stagger-7">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">7</span>
            </div>
            <h2 className="section-subheading">
              Limitations
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            The design assumes bounded price ranges and does not scale across
            cores. Memory usage grows with price resolution, and the workload
            model does not capture adversarial or burst-heavy market behavior.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-32 fade-in stagger-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-8 h-8 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-mono text-primary font-semibold">8</span>
            </div>
            <h2 className="section-subheading">
              Future Work
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Future directions include instrument-level sharding, NUMA-aware
            memory layouts, and exploration of parallel matching models while
            preserving determinism and debuggability.
          </p>
        </section>

        {/* Footer */}
        <footer className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          <div className="pt-20 pb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group">
                <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Implementation</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">C++17 with custom allocators</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">Lock-free data structures</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">SIMD-optimized calculations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Resources</h3>
                  </div>
                  <div className="space-y-3">
                    <a href="https://github.com/TMR2005/Limit-Order-Book" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/link">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:bg-primary/80 transition-colors"></div>
                      <span className="text-sm font-mono">Source Repository</span>
                    </a>
                    <a href="#results" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/link">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:bg-primary/80 transition-colors"></div>
                      <span className="text-sm font-mono">Performance Benchmarks</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/link">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/link:bg-primary/80 transition-colors"></div>
                      <span className="text-sm font-mono">Technical Docs</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Performance</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">9.8M ops/sec</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">~101 ns/op latency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-mono">30% improvement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/30">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-muted-foreground mb-2">
                    Built for understanding the performance characteristics of high-frequency trading systems.
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Exploring the intersection of systems programming and financial technology.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-xs text-muted-foreground font-mono px-3 py-1 bg-muted/30 rounded-full">
                    Last updated: Jan 2026
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default LimitOrderBook;
