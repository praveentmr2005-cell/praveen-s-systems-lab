const About = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="section-heading">About</p>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Systems-focused engineer with a bias for correctness and performance.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Undergraduate Computer Science student at IIITDM Chennai pursuing B.Tech + M.Tech (graduating 2028). My work centers on backend engineering, distributed systems, and building AI-augmented applications with measurable outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strengthened algorithmic foundations by solving 300+ problems across Codeforces (Specialist), LeetCode and other platforms.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Education</h3>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground">B.Tech + M.Tech, Computer Science and Engineering</p>
                <p>Indian Institute of Information Technology, Design and Manufacturing</p>
                <p className="text-sm font-mono mt-1">2023 – 2028 | Chennai, India</p>
                <p className="text-sm font-mono text-accent">8.83/10 CGPA (Till 5th Semester)</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Compiler Design</span>
                <span className="tech-tag">Operating Systems</span>
                <span className="tech-tag">Algorithms</span>
                <span className="tech-tag">Data Structures</span>
                <span className="tech-tag">Computer Architecture</span>
                <span className="tech-tag">Database Systems</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Networks</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Achievements</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• 300+ problems on Codeforces (Specialist), LeetCode</li>
                <li>• Commendable rank in JEE Mains and Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
