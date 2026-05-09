import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Users, BarChart3, Zap, GraduationCap } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const EXPERIENCES = [
  {
    title: "Data and Analytics Intern",
    company: "Thomson Reuters",
    location: "Bengaluru, Karnataka",
    period: "May 2026 – Present",
    type: "Internship",
    description:
      "Working on data analytics and intelligence projects, applying advanced analytical techniques to extract insights from large-scale structured and unstructured datasets.",
    achievements: [
      "Analysing large-scale datasets to surface actionable insights for internal stakeholders",
      "Building automated data pipelines and reporting dashboards to streamline decision-making",
      "Collaborating cross-functionally with product and engineering teams on data quality initiatives",
    ],
    icon: BarChart3,
    color: "text-primary",
    border: "border-primary/20",
    dot: "bg-primary",
    glow: "rgba(34,211,238,0.08)",
  },
  {
    title: "Intern",
    company: "NuFinTech",
    location: "Remote",
    period: "Nov 2025 – Apr 2026",
    type: "Internship",
    description:
      "Built data-driven trading intelligence models leveraging market microstructure and gamma exposure analytics to enhance predictive accuracy and strategy performance.",
    achievements: [
      "Improved trade outcome prediction accuracy by ~30% through optimised ML pipelines",
      "Boosted model AUC significantly using semantically rich composite features",
      "Automated oscillator-based signal detection framework, achieving 5x faster feature extraction",
      "Collaborated with research leads to integrate structural and statistical indicators into production models",
    ],
    icon: TrendingUp,
    color: "text-secondary",
    border: "border-secondary/20",
    dot: "bg-secondary",
    glow: "rgba(168,85,247,0.08)",
  },
  {
    title: "Data Science Intern",
    company: "Celebal Technologies",
    location: "Remote",
    period: "June 2025 – Aug 2025",
    type: "Internship",
    description:
      "Developed advanced ML models for spam email detection using NLP techniques, achieving exceptional accuracy and significantly reducing false positives.",
    achievements: [
      "Developed Spam Email Detection model with 95%+ accuracy",
      "Reduced false positives by 80% using advanced NLP & ML techniques",
      "Collaborated in sprint reviews with senior mentors",
      "Built model evaluation, optimisation, and production-ready pipelines",
    ],
    icon: BarChart3,
    color: "text-chart-4",
    border: "border-chart-4/20",
    dot: "bg-chart-4",
    glow: "rgba(80,200,120,0.08)",
  },
  {
    title: "Data Science Intern",
    company: "Samatrix Consulting Pvt Ltd",
    location: "Remote",
    period: "May 2025 – June 2025",
    type: "Internship",
    description:
      "Applied data cleaning, EDA, visualisation, and predictive modelling on multiple real-world datasets to derive actionable business insights.",
    achievements: [
      "Performed EDA on Employee, Energy, and EPL Auction datasets to uncover key performance trends",
      "Developed regression models improving dataset insight accuracy by 30%",
      "Implemented automated data preprocessing pipelines using Pandas & NumPy",
      "Presented analytical findings to mentors, strengthening data-driven decision-making",
    ],
    icon: BarChart3,
    color: "text-accent",
    border: "border-accent/20",
    dot: "bg-accent",
    glow: "rgba(244,114,182,0.08)",
  },
  {
    title: "Data and Analytics Intern",
    company: "Ozibook",
    location: "Remote",
    period: "Feb 2024 – Apr 2024",
    type: "Internship",
    description:
      "Automated data analysis workflows and built efficient tools to streamline business operations while working with cross-functional teams.",
    achievements: [
      "Automated workflows, reducing reporting time from 60 min to under 10 min",
      "Built Python-based receipt generator, reducing manual effort by 80%",
      "Coordinated with 15+ member cross-functional team",
      "Streamlined dashboards & workflows, accelerating delivery by 25%",
    ],
    icon: Users,
    color: "text-chart-5",
    border: "border-chart-5/20",
    dot: "bg-chart-5",
    glow: "rgba(200,150,50,0.08)",
  },
]

const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "JECRC University",
    location: "Jaipur, India",
    period: "Sept 2022 – July 2026",
    grade: "CGPA 9.00/10",
    description: "Coursework: DSA, DBMS, Machine Learning, Operating Systems, Data Science, Data Analytics. Active in AWS Cloud Club, DevCrest, and Student Council.",
    color: "text-primary",
    border: "border-primary/20",
    glow: "rgba(34,211,238,0.08)",
  },
  {
    degree: "CBSE 12th Grade",
    field: "",
    institution: "Urmi School",
    location: "Vadodara, India",
    period: "May 2021 – May 2022",
    grade: "80.2%",
    description: "",
    color: "text-secondary",
    border: "border-secondary/20",
    glow: "rgba(168,85,247,0.08)",
  },
  {
    degree: "CBSE 10th Grade",
    field: "",
    institution: "Mayoor School",
    location: "Ajmer, India",
    period: "May 2019 – July 2020",
    grade: "86.4%",
    description: "",
    color: "text-accent",
    border: "border-accent/20",
    glow: "rgba(244,114,182,0.08)",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">Where I&apos;ve Worked</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </span>
              Experience
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/20" />

              <div className="space-y-6">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-8 h-8 rounded-full ${exp.dot} flex items-center justify-center shadow-[0_0_12px_currentColor]`}>
                        <exp.icon className="h-3.5 w-3.5 text-background" />
                      </div>
                    </div>

                    <TiltCard className="flex-1" glowColor={exp.glow} intensity={6}>
                      <Card className={`hover-glow border ${exp.border} bg-card/60 backdrop-blur-md`}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <CardTitle className="font-serif text-base">{exp.title}</CardTitle>
                              <p className={`text-sm font-medium ${exp.color}`}>{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="text-xs border-border/50 whitespace-nowrap">{exp.type}</Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />{exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />{exp.location}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((a, ai) => (
                              <li key={ai} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className={`w-1 h-1 rounded-full ${exp.dot} mt-[6px] flex-shrink-0`} />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-secondary" />
              </span>
              Education
            </h3>
            <div className="space-y-5">
              {EDUCATION.map((edu, i) => (
                <TiltCard key={i} glowColor={edu.glow} intensity={7}>
                  <Card className={`hover-glow border ${edu.border} bg-card/60 backdrop-blur-md`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg bg-card border ${edu.border} flex items-center justify-center flex-shrink-0`}>
                          <Zap className={`h-4 w-4 ${edu.color}`} />
                        </div>
                        <div>
                          <CardTitle className="font-serif text-base">{edu.degree}</CardTitle>
                          {edu.field && <p className={`text-sm font-medium ${edu.color}`}>{edu.field}</p>}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />{edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />{edu.location}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className={`text-sm font-medium ${edu.color}`}>{edu.institution}</p>
                        <Badge variant="secondary" className="bg-card border border-border/50 text-xs">
                          {edu.grade}
                        </Badge>
                      </div>
                      {edu.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">{edu.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
