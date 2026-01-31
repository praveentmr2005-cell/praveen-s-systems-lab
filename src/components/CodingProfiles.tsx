import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Trophy } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    handle: "praveen_tmr",
    url: "https://leetcode.com/u/praveen_tmr/",
    icon: Code2,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
  },
  {
    name: "Codeforces",
    handle: "Praveen_tmr",
    url: "https://codeforces.com/profile/Praveen_tmr",
    icon: Trophy,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
  },
];

const CodingProfiles = () => {
  return (
    <section className="py-16 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Competitive Programming
        </motion.p>

        <motion.p
          className="text-muted-foreground mb-8 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          300+ problems solved across platforms. Strengthening algorithmic foundations through consistent practice.
        </motion.p>

        <div className="flex flex-wrap gap-4">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-card px-5 py-4 flex items-center gap-4 hover:border-accent/40 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className={`p-2.5 rounded-lg bg-gradient-to-br ${profile.color} border ${profile.borderColor}`}>
                <profile.icon className={`w-5 h-5 ${profile.textColor}`} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {profile.name}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  @{profile.handle}
                </span>
              </div>

              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors ml-2 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
