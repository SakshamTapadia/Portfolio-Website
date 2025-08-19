import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users, Code2, Github } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "JU Innov8'24 2.0 Hackathon",
      subtitle: "2nd Runner-Up",
      description: "Secured 3rd position in university-level innovation hackathon",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Award,
      title: "Amazon ML Hackathon",
      subtitle: "972nd Rank",
      description: "Achieved top 1.2% ranking among 80,000+ participants",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Code2,
      title: "LeetCode Achievement",
      subtitle: "SQL 50 Badge",
      description: "Earned SQL 50 badge demonstrating database query expertise",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Star,
      title: "HackerRank Excellence",
      subtitle: "5 Star Rating",
      description: "5 Star rating in both SQL and Problem Solving domains",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ]

  const contributions = [
    {
      title: "AWS Cloud Club",
      description: "Active contributor and member",
      icon: Users,
    },
    {
      title: "DevCrest",
      description: "Community contributor and participant",
      icon: Github,
    },
    {
      title: "Student Council",
      description: "Member (2022–23)",
      icon: Users,
    },
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for excellence in competitive programming, hackathons, and technical contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center`}>
                    <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-lg">{achievement.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {achievement.subtitle}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Community Contributions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contributions.map((contribution, index) => (
              <Card key={index} className="hover-glow border-0 bg-card/30 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contribution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-serif font-bold mb-2">{contribution.title}</h4>
                  <p className="text-sm text-muted-foreground">{contribution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
