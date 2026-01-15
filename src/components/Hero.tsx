import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const TAGLINES = [
  "Backend & Systems Engineering",
  "Performance-critical backend systems",
  "Correctness, latency, and explicit trade-offs"
];

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY < height * 0.05) {
        setTaglineIndex(0);
      } else if (scrollY < height * 0.17) {
        setTaglineIndex(1);
      } else {
        setTaglineIndex(2);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          
          {/* Scroll-aware tagline */}
          <div className="opacity-0 fade-in stagger-1">
            <p
              key={taglineIndex}
              className="text-muted-foreground text-sm font-mono mb-4 transition-opacity duration-500"
            >
              {TAGLINES[taglineIndex]}
            </p>
          </div>

          <h1 className="opacity-0 fade-in stagger-2 text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Praveen Kumar TMR
          </h1>

          <p className="opacity-0 fade-in stagger-3 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            I design and build backend systems where performance, correctness,
            and operational clarity matter. My work focuses on eliminating
            unnecessary complexity and improving latency and throughput in
            real workloads.
          </p>

          <div className="opacity-0 fade-in stagger-4 flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View Selected Systems <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="opacity-0 fade-in stagger-4 flex flex-wrap gap-3">
            <span className="tech-tag">Performance-critical backends</span>
            <span className="tech-tag">Distributed system design</span>
            <span className="tech-tag">ML & GenAI infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
