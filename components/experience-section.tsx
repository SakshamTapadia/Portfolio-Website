import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Celebal Technologies",
      location: "Remote",
      period: "June 2025 – Aug 2025",
      type: "Internship",
      description:
        "Developed advanced machine learning models for spam email detection using NLP techniques, achieving exceptional accuracy and significantly reducing false positives.",
      achievements: [
        "Developed Spam Email Detection model with 95%+ accuracy",
        "Reduced false positives by 80% using advanced NLP & ML techniques",
        "Collaborated in sprint reviews with senior mentors",
        "Worked on model evaluation, optimization, and production-ready pipelines",
      ],
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Data and Analytics Intern",
      company: "Ozibook",
      location: "Remote",
      period: "Feb 2024 – Apr 2024",
      type: "Internship",
      description:
        "Automated data analysis workflows and built efficient tools to streamline business operations, working with cross-functional teams to accelerate delivery.",
      achievements: [
        "Automated data-analysis workflows, reducing reporting time from 60 mins to <10 mins",
        "Built Python-based receipt generator, reducing manual effort by 80%",
        "Coordinated with 15+ member cross-functional team",
        "Streamlined dashboards & workflows, accelerating delivery by 25%",
      ],
      icon: Users,
      color: "text-blue-500",
    },
  ]

  const education = [
    {
      degree: "CBSE 10th Grade",
      field: "",
      institution: "Mayoor School",
      location: "Ajmer, India",
      period: "May 2019 - July 2020",
      cgpa: "86.4%",
      description:
        "",
    },
    {
      degree: "CBSE 12th Grade",
      field: "",
      institution: "Urmi School",
      location: "Vadodara, India",
      period: "May 2021 - May 2022",
      cgpa: "80.2%",
      description:
        "",
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "JECRC University",
      location: "Jaipur, India",
      period: "Sept 2022 - July 2026",
      cgpa: "8.96/10",
      description:
        "Coursework: DSA, DBMS, Machine Learning, Operating Systems, Data Science, Data Analytics. Active in AWS Cloud Club, DevCrest, and Student Council.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional internships and academic excellence in data science and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full mr-3" />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${exp.color}`}
                        >
                          <exp.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="font-serif text-lg">{exp.title}</CardTitle>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground ml-13">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-accent rounded-full mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-lg">{edu.degree}</CardTitle>
                        <p className="text-accent font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground ml-13">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        CGPA: {edu.cgpa}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
