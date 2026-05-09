import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Code2, Github } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "JU Innov8'24 2.0 Hackathon",
    subtitle: "2nd Runner-Up",
    description: "Secured 3rd position in university-level innovation hackathon — competed against 100+ teams.",
    color: "text-yellow-400",
    border: "border-yellow-400/25",
    bg: "bg-yellow-400/8",
    glow: "rgba(250,204,21,0.12)",
    shadow: "shadow-[0_0_20px_rgba(250,204,21,0.06)]",
  },
  {
    icon: Award,
    title: "Amazon ML Hackathon",
    subtitle: "972nd / 80,000+",
    description: "Achieved top 1.2% ranking among over 80,000 participants in Amazon's premier ML challenge.",
    color: "text-orange-400",
    border: "border-orange-400/25",
    bg: "bg-orange-400/8",
    glow: "rgba(251,146,60,0.12)",
    shadow: "shadow-[0_0_20px_rgba(251,146,60,0.06)]",
  },
  {
    icon: Code2,
    title: "LeetCode Achievement",
    subtitle: "SQL 50 Badge",
    description: "Earned SQL 50 badge by solving 50 hand-picked SQL problems, demonstrating deep query expertise.",
    color: "text-green-400",
    border: "border-green-400/25",
    bg: "bg-green-400/8",
    glow: "rgba(74,222,128,0.12)",
    shadow: "shadow-[0_0_20px_rgba(74,222,128,0.06)]",
  },
  {
    icon: Star,
    title: "HackerRank Excellence",
    subtitle: "5-Star Rating",
    description: "5-star rating in both SQL and Problem Solving — top-tier recognition on the platform.",
    color: "text-primary",
    border: "border-primary/25",
    bg: "bg-primary/8",
    glow: "rgba(34,211,238,0.12)",
    shadow: "shadow-[0_0_20px_rgba(34,211,238,0.06)]",
  },
]

const CONTRIBUTIONS = [
  {
    title: "AWS Cloud Club",
    description: "Active contributor and member — workshops, events, and cloud advocacy.",
    icon: Users,
    color: "text-primary",
    border: "border-primary/20",
    glow: "rgba(34,211,238,0.08)",
  },
  {
    title: "DevCrest",
    description: "Community contributor — developer events, hackathon mentoring, open-source.",
    icon: Github,
    color: "text-secondary",
    border: "border-secondary/20",
    glow: "rgba(168,85,247,0.08)",
  },
  {
    title: "Student Council",
    description: "Elected member 2022–23 — organised college events and student initiatives.",
    icon: Users,
    color: "text-accent",
    border: "border-accent/20",
    glow: "rgba(244,114,182,0.08)",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3">Recognition</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            Awards &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 gap-7 mb-16">
          {ACHIEVEMENTS.map((a, i) => (
            <TiltCard key={i} glowColor={a.glow}>
              <Card className={`hover-glow border ${a.border} ${a.bg} backdrop-blur-md overflow-hidden ${a.shadow}`}>
                {/* Shimmer on load */}
                <div className="shimmer-effect absolute inset-0 pointer-events-none" />
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0`}>
                      <a.icon className={`h-6 w-6 ${a.color}`} />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg">{a.title}</CardTitle>
                      <Badge variant="secondary" className={`mt-1.5 ${a.bg} ${a.color} border ${a.border} text-xs`}>
                        {a.subtitle}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Community contributions */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Community Contributions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CONTRIBUTIONS.map((c, i) => (
              <TiltCard key={i} glowColor={c.glow} intensity={8}>
                <Card className={`hover-glow border ${c.border} bg-card/60 backdrop-blur-md text-center`}>
                  <CardContent className="p-7">
                    <div className={`w-12 h-12 rounded-xl bg-card border ${c.border} flex items-center justify-center mx-auto mb-4`}>
                      <c.icon className={`h-5 w-5 ${c.color}`} />
                    </div>
                    <h4 className={`font-serif font-bold mb-2 ${c.color}`}>{c.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
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
