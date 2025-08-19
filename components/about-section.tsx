import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Trophy, Star } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Database,
      title: "Data Science Expert",
      description:
        "B.Tech CSE at JECRC University (CGPA: 8.96/10) with specialization in Data Science, Machine Learning, and Analytics. Built ML models with 95%+ accuracy.",
    },
    {
      icon: Code,
      title: "Software Developer",
      description:
        "Proficient in Python, C++, SQL with frameworks like TensorFlow, PyTorch, Flask. Experience with AWS, Git/GitHub, and full-stack development.",
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description:
        "5-Star HackerRank in SQL and Problem Solving. SQL 50 badge on LeetCode. Strong analytical thinking and cross-functional collaboration skills.",
    },
  ]

  const achievements = [
    "2nd Runner-Up in JU Innov824 2.0 Hackathon",
    "972nd rank in Amazon ML Hackathon (80,000+ participants)",
    "SQL 50 badge on LeetCode",
    "5 Star HackerRank SQL and Problem Solving",
    "Active contributor to AWS Cloud Club, DevCrest",
    "Creator of Jobs And Internships Updates WhatsApp Channel (2.4K followers)",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data Science student and intern with proven track record in machine learning, hackathons, and software
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl rotate-6" />
              <img
                src="/Photo.jpg"
                alt="About Saksham"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Computer Science and Engineering at JECRC University, Jaipur with an
              impressive CGPA of 8.96/10. My coursework includes DSA, DBMS, Machine Learning, Operating Systems, Data
              Science, and Data Analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ive gained valuable industry experience through internships at Celebal Technologies as a Data Science
              Intern and Ozibook as a Data Analytics Intern. My hands-on experience includes building ML models with
              95%+ accuracy, automating workflows, and working with cross-functional teams of 15+ members.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-serif font-bold flex items-center">
                <Trophy className="h-5 w-5 text-primary mr-2" />
                Key Achievements & Community Contributions
              </h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="h-4 w-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-primary mb-2">WhatsApp Channel - Jobs And Internships Updates</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Helping 2.4K+ students with interview preparation, programming tips, internships and job
                  opportunities. Not to miss anything that might help you get your first job!
                </p>
                <a
                  href="https://whatsapp.com/channel/0029VamskeRIHphAM86hQc3L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  Join Channel →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
