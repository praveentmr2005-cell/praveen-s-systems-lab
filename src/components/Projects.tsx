import { ArrowRight, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Projects</p>
        
        {/* Featured Project */}
        <div className="project-card mb-12">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="metric-badge mb-3 inline-block">Featured</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  Real-Time Collaborative Code Platform
                </h3>
                <p className="text-muted-foreground">
                  Multi-user code editor with CRDT-based conflict-free synchronization
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
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Built a real-time collaborative code editor supporting concurrent multi-user editing with CRDT-based conflict-free synchronization (Yjs).</li>
                <li>• Implemented live cursor presence, selections, and awareness using WebSocket-based sync channels.</li>
                <li>• Designed a Redis-backed hot-cache + job queue architecture to separate real-time collaboration from persistence and execution.</li>
                <li>• Built an asynchronous remote code execution pipeline using Redis queues and isolated worker processes.</li>
                <li>• Ensured fault-tolerant reconnection and state hydration on network drops via in-memory session recovery.</li>
                <li>• Deployed a production-ready system with separate API, CRDT sync, and worker services.</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Monaco Editor</span>
              <span className="tech-tag">Yjs (CRDT)</span>
              <span className="tech-tag">WebSockets</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>
        
        {/* Secondary Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <li>• Implemented a system-level telemetry daemon using NVIDIA NVML and systemd hooks to track GPU utilization, VRAM load, CPU metrics, and starvation patterns during model training.</li>
              <li>• Developed a kernel- and batch-size advisor that surfaces bottlenecks by correlating runtime traces with throughput dips and memory pressure.</li>
              <li>• Built a curses-based TUI dashboard, utilization history graphs, and JSON logs for profiling ML workloads.</li>
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
              <li>• Added screen-share with adaptive frame throttling for low-power devices.</li>
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
              <span className="tech-tag">Media Streaming</span>
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
              <li>• Built a semantic-equivalence verification layer to prevent hallucinated optimizations in AI-assisted compilation.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">C</span>
              <span className="tech-tag">Flex/Bison</span>
              <span className="tech-tag">TAC IR</span>
              <span className="tech-tag">LLM Integration</span>
              <span className="tech-tag">MIPS Assembly</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">High-Performance Limit Order Book</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">Matching Engine in C++</p>
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
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Low-latency matching engine with custom allocator for order objects, cache-aligned price level structures, and lock-free queue for order ingestion. Optimized for memory locality and throughput.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">Sub-μs latency</span>
              <span className="metric-badge">150K orders/sec</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Custom Allocators</span>
              <span className="tech-tag">Lock-free</span>
              <span className="tech-tag">Cache Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
