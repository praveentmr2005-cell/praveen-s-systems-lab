import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="opacity-0 fade-in stagger-1">
            <p className="text-muted-foreground text-sm font-mono mb-4">
              Backend & Systems Engineer
            </p>
          </div>
          
          <h1 className="opacity-0 fade-in stagger-2 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Praveen Kumar TMR
          </h1>
          
          <p className="opacity-0 fade-in stagger-3 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Building high-performance backend systems, distributed architectures, and GenAI-powered applications. Focused on measurable outcomes—latency reduction, throughput improvements, and architectural clarity.
          </p>
          
          <div className="opacity-0 fade-in stagger-4 flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
          
          <div className="opacity-0 fade-in stagger-4 flex flex-wrap gap-3">
            <span className="tech-tag">Low-latency Systems</span>
            <span className="tech-tag">Distributed Backends</span>
            <span className="tech-tag">GenAI / RAG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
