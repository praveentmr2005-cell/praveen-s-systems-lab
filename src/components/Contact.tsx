import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">Contact</p>
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let's discuss your backend challenges.
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Open to internship opportunities, collaborations on distributed systems projects, and consulting on performance-critical applications.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:praveen@example.com" 
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-md">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">praveen@example.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-md">
                <Github className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-muted-foreground">github.com/praveenkumartmr</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-md">
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">linkedin.com/in/praveenkumartmr</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
