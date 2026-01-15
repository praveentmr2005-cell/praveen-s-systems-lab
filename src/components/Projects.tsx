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
                  High-Performance Limit Order Book
                </h3>
                <p className="text-muted-foreground">
                  Low-latency matching engine in C++ with optimized memory layout
                </p>
              </div>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Problem & Constraints</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build a matching engine capable of processing 100K+ orders/second with sub-microsecond latency. Memory efficiency critical for handling large order books without cache thrashing.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Key Decisions</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Custom allocator for order objects, cache-aligned price level structures, and lock-free queue for order ingestion. Rejected red-black tree in favor of sorted vector for better cache locality at expected book depths.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="metric-badge">~0.8μs avg latency</span>
              <span className="metric-badge">150K orders/sec throughput</span>
              <span className="metric-badge">2.3x memory reduction</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Custom Allocators</span>
              <span className="tech-tag">Lock-free</span>
              <span className="tech-tag">Cache Optimization</span>
            </div>
          </div>
        </div>
        
        {/* Secondary Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Distributed Document Pipeline</h3>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Cloud-native document processing system with parallel ingestion, transformation stages, and distributed state management. Handles 10K+ documents/hour with automatic retry and dead-letter queuing.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">10K docs/hr</span>
              <span className="metric-badge">99.9% uptime</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Kafka</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">Docker</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">RAG-based Knowledge System</h3>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Retrieval-augmented generation system integrating LLMs with structured knowledge bases. Hybrid search combining vector similarity with keyword matching for improved relevance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">85% relevance score</span>
              <span className="metric-badge">&lt;2s response</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LangChain</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">OpenAI</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">CRDT Collaborative Editor</h3>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Conflict-free replicated data type implementation for real-time collaborative text editing. Explored Yjs and Automerge internals, implementing custom CRDT for specific convergence guarantees.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">50+ concurrent users</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">WebSocket</span>
              <span className="tech-tag">CRDT</span>
            </div>
          </div>
          
          <div className="project-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">API Gateway & Rate Limiter</h3>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Custom API gateway with distributed rate limiting using sliding window algorithm. Token bucket implementation with Redis for cross-instance coordination.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="metric-badge">100K req/min capacity</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-tag">Go</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">gRPC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
