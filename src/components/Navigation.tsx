import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-foreground font-semibold">
            Praveen Kumar TMR
          </Link>
          <span className="text-muted-foreground text-sm hidden sm:inline">
            / Backend Engineer
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          
          {/* Internal navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>

            {/* Research = routed page */}
            <Link to="/research" className="nav-link">
              Research
            </Link>

            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* External links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TMR2005"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-external"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://www.linkedin.com/in/praveen-tmr/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-external"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
