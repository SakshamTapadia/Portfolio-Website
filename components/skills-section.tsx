import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "SQL", "C", "HTML", "CSS"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Pandas", "Scikit-learn", "TensorFlow", "Hugging Face", "PyTorch", "LangChain"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Git/GitHub", "MySQL", "Power BI", "VS Code", "Jupyter", "PyCharm", "Excel"],
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Time Management", "Cross-Functional Collaboration", "Communication"],
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    },
  ]

  const certifications = [
    {
      title: "Samatrix.io Certifications",
      items: ["Data Science", "R Programming", "Machine Learning", "NLP", "Deep Learning"],
      icon: Award,
    },
    {
      title: "NPTEL Certifications",
      items: ["Business Analytics for Management Decision (82%)", "Soft Skills (80%)"],
      icon: BookOpen,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-lg flex items-center">
                    <cert.icon className="h-5 w-5 text-primary mr-2" />
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {cert.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
