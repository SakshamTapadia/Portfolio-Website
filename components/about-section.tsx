import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Trophy } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const highlights = [
  {
    icon: Database,
    title: "Data Science Expert",
    description:
      "B.Tech CSE at JECRC University (CGPA: 9.00/10) with specialization in Data Science, ML, and Analytics. Built production models with 95%+ accuracy.",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5",
    glow: "rgba(34,211,238,0.09)",
  },
  {
    icon: Code,
    title: "Software Developer",
    description:
      "Proficient in Python, C++, SQL with frameworks like TensorFlow, PyTorch, and Flask. Experience with AWS, Git, and full-stack development pipelines.",
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/5",
    glow: "rgba(168,85,247,0.09)",
  },
  {
    icon: Brain,
    title: "Problem Solver",
    description:
      "5-Star HackerRank in SQL and Problem Solving. SQL 50 badge on LeetCode. Strong analytical thinking and cross-functional collaboration skills.",
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
    glow: "rgba(244,114,182,0.09)",
  },
]

const achievements = [
  "2nd Runner-Up in JU Innov8'24 2.0 Hackathon",
  "972nd rank in Amazon ML Hackathon (80,000+ participants)",
  "SQL 50 badge on LeetCode",
  "5-Star HackerRank SQL and Problem Solving",
  "Active contributor to AWS Cloud Club, DevCrest",
  "Creator of Jobs & Internships Updates WhatsApp Channel (3.1K+ followers)",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Bio grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated gradient frame */}
              <div className="absolute -inset-[3px] bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-sm opacity-50 animate-gradient-x" />
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-70" />
              <img
                src="/Photo.jpg"
                alt="Saksham Tapadia"
                className="relative w-full max-w-sm h-auto rounded-2xl object-cover"
              />
              {/* Floating stat chips */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-primary/30 rounded-xl px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <span className="text-primary font-mono text-sm font-bold">CGPA 9.00 / 10</span>
              </div>
              <div className="absolute -top-5 -left-5 bg-card border border-secondary/30 rounded-xl px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <span className="text-secondary font-mono text-sm font-bold">4+ Internships</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am Saksham Tapadia, a Computer Science and Engineering undergraduate at JECRC University,
              Jaipur, with a CGPA of 9.00/10. My academic foundation spans Data Structures and Algorithms,
              Machine Learning, Database Management Systems, and Data Analytics, which I have consistently
              applied to real-world problems across multiple internships.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialise in building end-to-end machine learning pipelines, from raw data ingestion and
              feature engineering to model deployment and monitoring. I enjoy working at the intersection of
              data science and software engineering, where clean code meets measurable business impact. I am
              equally comfortable exploring a new dataset independently or collaborating within a fast-paced
              engineering team.
            </p>

            <div className="space-y-3 pt-1">
              <h4 className="text-sm font-serif font-bold flex items-center gap-2">
                <Trophy className="h-4 w-4 text-primary" />
                Key Achievements
              </h4>
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 mt-2">
              <p className="text-sm font-medium text-primary mb-1">WhatsApp Channel: Jobs &amp; Internships</p>
              <p className="text-xs text-muted-foreground mb-2">3.1K+ students get daily curated internship &amp; job updates</p>
              <a
                href="https://whatsapp.com/channel/0029VamskeRIHphAM86hQc3L"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Join Channel →
              </a>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <TiltCard key={i} glowColor={h.glow}>
              <Card className={`hover-glow border ${h.border} bg-card/60 backdrop-blur-md h-full`}>
                <CardContent className="p-7 text-center">
                  <div className={`w-14 h-14 rounded-xl ${h.bg} border ${h.border} flex items-center justify-center mx-auto mb-5`}>
                    <h.icon className={`h-7 w-7 ${h.color}`} />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-3">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
