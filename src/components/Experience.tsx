import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading mb-12">Experience</p>

        <div className="max-w-3xl">
          <div className="border-l-2 border-border pl-8 pb-2">
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Product Engineering Intern
                  </h3>
                  <a
                    href="https://liquidmind.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                  >
                    LiquidMind.AI <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  Jun – Jul 2025
                </span>
              </div>

              {/* Narrative */}
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Worked on the backend architecture of a cloud-native document
                  processing platform designed to ingest, extract, and validate
                  structured data from complex enterprise PDFs at scale. The
                  system was decomposed into independently deployable services
                  to improve throughput, fault isolation, and operational
                  visibility.
                </p>

                <p>
                  A primary focus was reducing end-to-end latency by identifying
                  blocking stages in the pipeline and introducing parallel task
                  execution and FIFO batching. This shift increased sustained
                  throughput from roughly one document per minute to 12–16
                  documents per minute under load.
                </p>

                <p>
                  Integrated LLM-based extraction and validation using GPT-4 and
                  Azure Document Intelligence, with an embedding-driven semantic
                  validation layer to resolve ambiguous or inconsistent fields.
                  Special attention was paid to correctness guarantees,
                  implementing idempotent writes and state tracking to ensure
                  exactly-once processing semantics.
                </p>
              </div>

              {/* Evidence (not a checklist) */}
              <div className="flex flex-wrap gap-2 pt-6">
                <span className="metric-badge">~90% latency reduction</span>
                <span className="metric-badge">12–16 docs/min sustained</span>
                <span className="metric-badge">99%+ extraction accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
