import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Projects</p>
        
        {/* Featured Project - Limit Order Book */}
        <div className="project-card mb-12">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="metric-badge mb-3 inline-block">Featured</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Low-Latency Limit Order Book
                </h3>
                <p className="text-muted-foreground">
                  High-performance matching engine in C++
                </p>
              </div>
              <a 
                href="https://github.com/TMR2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-4 mb-8">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Implemented a single-threaded exchange-style matching engine using cache-friendly data structures and custom memory allocation.</li>
                <li>• Used array-indexed price levels and intrusive FIFO order lists to avoid tree traversal and heap allocation in the hot path.</li>
                <li>• Built a deterministic synthetic workload generator and microbenchmarking harness to measure throughput and latency.</li>
                <li>• Achieved 9.8M ops/sec and ~101 ns/op, outperforming std::map-based designs by ~30% and allocator-based designs by ~25%.</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="metric-badge">9.8M ops/sec</span>
              <span className="metric-badge">~101 ns/op</span>
              <span className="metric-badge">30% faster than std::map</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Custom Allocators</span>
              <span className="tech-tag">Cache Optimization</span>
              <span className="tech-tag">Intrusive Lists</span>
              <span className="tech-tag">Microbenchmarking</span>
            </div>
          </div>
        </div>
        
        {/* Secondary Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Real-Time Collaborative Code Platform</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">CRDT-based Multi-user Editor</p>
              </div>
              <a 
                href="https://github.com/TMR2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="text-sm text-muted-foreground mb-4 space-y-2">
              <li>• Built a real-time collaborative code editor supporting concurrent multi-user editing with CRDT-based conflict-free synchronization (Yjs).</li>
              <li>• Implemented live cursor presence, selections, and awareness using WebSocket-based sync channels.</li>
              <li>• Designed a Redis-backed hot-cache + job queue architecture to separate real-time collaboration from persistence and execution.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Monaco Editor</span>
              <span className="tech-tag">Yjs (CRDT)</span>
              <span className="tech-tag">WebSockets</span>
              <span className="tech-tag">Redis</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">MLinux – ML-Aware Linux Layer</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">GPU Telemetry & Optimization</p>
              </div>
              <a 
                href="https://github.com/TMR2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="text-sm text-muted-foreground mb-4 space-y-2">
              <li>• Implemented a system-level telemetry daemon using NVIDIA NVML and systemd hooks to track GPU utilization, VRAM load, and starvation patterns.</li>
              <li>• Developed a kernel- and batch-size advisor that surfaces bottlenecks by correlating runtime traces with throughput dips.</li>
              <li>• Built a curses-based TUI dashboard and JSON logs for profiling ML workloads.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Systemd</span>
              <span className="tech-tag">NVIDIA NVML</span>
              <span className="tech-tag">PyTorch CUDA</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">LANCast</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">Offline LAN Video/Audio Conferencing</p>
              </div>
              <a 
                href="https://github.com/TMR2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="text-sm text-muted-foreground mb-4 space-y-2">
              <li>• Built a LAN-only real-time conferencing app with TCP chat/screen-share and UDP audio/video streaming.</li>
              <li>• Implemented 20 FPS JPEG video streaming at 40% compression, balancing smooth playback with low bandwidth.</li>
              <li>• Designed a hostable server–client model with file transfer, peer discovery, and multi-user participation.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">&lt;50ms LAN latency</span>
              <span className="metric-badge">20 FPS streaming</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Socket Programming</span>
              <span className="tech-tag">TCP/UDP</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">AI-Augmented Compiler for MiniC</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">MIPS Backend</p>
              </div>
              <a 
                href="https://github.com/TMR2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="text-sm text-muted-foreground mb-4 space-y-2">
              <li>• Engineered a full compiler pipeline (Flex/Bison → AST → TAC → optimizer → MIPS codegen) for a C subset.</li>
              <li>• Implemented liveness-based register pressure analysis triggering an LLM-based IR rewriting pass when spills were predicted.</li>
              <li>• Built a semantic-equivalence verification layer to prevent hallucinated optimizations.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">C</span>
              <span className="tech-tag">Flex/Bison</span>
              <span className="tech-tag">TAC IR</span>
              <span className="tech-tag">LLM Integration</span>
              <span className="tech-tag">MIPS Assembly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
