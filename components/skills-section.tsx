import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const SKILL_CATS = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "SQL", "C", "HTML", "CSS"],
    accent: { text: "text-primary", border: "border-primary/30", bg: "bg-primary/8", glow: "rgba(34,211,238,0.09)", dot: "bg-primary" },
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "LangChain"],
    accent: { text: "text-secondary", border: "border-secondary/30", bg: "bg-secondary/8", glow: "rgba(168,85,247,0.09)", dot: "bg-secondary" },
  },
  {
    title: "Tools & Platforms",
    skills: ["AWS", "Git/GitHub", "MySQL", "Power BI", "VS Code", "Jupyter", "PyCharm", "Excel"],
    accent: { text: "text-accent", border: "border-accent/30", bg: "bg-accent/8", glow: "rgba(244,114,182,0.09)", dot: "bg-accent" },
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Time Management", "Cross-Functional Collaboration", "Communication"],
    accent: { text: "text-chart-4", border: "border-chart-4/30", bg: "bg-chart-4/8", glow: "rgba(80,200,120,0.09)", dot: "bg-chart-4" },
  },
]

const CERTS = [
  {
    title: "Samatrix.io Certifications",
    items: ["Data Science", "R Programming", "Machine Learning", "NLP", "Deep Learning"],
    icon: Award,
    color: "text-primary",
    border: "border-primary/20",
    glow: "rgba(34,211,238,0.09)",
  },
  {
    title: "NPTEL Certifications",
    items: [
      "Business Analytics for Management Decision (82%)",
      "Soft Skills (80%)",
    ],
    icon: BookOpen,
    color: "text-secondary",
    border: "border-secondary/20",
    glow: "rgba(168,85,247,0.09)",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">My Toolbox</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SKILL_CATS.map((cat, i) => (
            <TiltCard key={i} glowColor={cat.accent.glow}>
              <Card className={`hover-glow border ${cat.accent.border} bg-card/60 backdrop-blur-md h-full`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${cat.accent.dot}`} />
                    <CardTitle className="font-serif text-lg">{cat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <Badge
                        key={si}
                        variant="outline"
                        className={`${cat.accent.bg} ${cat.accent.text} ${cat.accent.border} hover:scale-105 transition-transform duration-150 cursor-default text-sm`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTS.map((cert, i) => (
              <TiltCard key={i} glowColor={cert.glow}>
                <Card className={`hover-glow border ${cert.border} bg-card/60 backdrop-blur-md h-full`}>
                  <CardHeader className="pb-3">
                    <CardTitle className={`font-serif text-lg flex items-center gap-2 ${cert.color}`}>
                      <cert.icon className="h-5 w-5" />
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2.5">
                      {cert.items.map((item, ii) => (
                        <div key={ii} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${cert.color.replace("text-", "bg-")} mt-[7px] flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
