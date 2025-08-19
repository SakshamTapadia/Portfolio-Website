import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Zap, Shield } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Credit Lending Risk Analysis",
      description:
        "Built a CatBoost + scikit-learn pipeline achieving 92.4% accuracy (AUC-ROC 0.97) for credit default risk prediction using real-world fintech data.",
      image: "/1.png",
      tech: ["CatBoost", "scikit-learn", "Streamlit", "Python"],
      github: "https://github.com/SakshamTapadia/Credit-Lending-Risk-Analysis",
      category: "Machine Learning",
      icon: TrendingUp,
      metrics: "92.4% Accuracy, AUC-ROC 0.97",
    },
    {
      title: "Vivid Frame",
      description:
        "Developed an AI pipeline with <50ms latency using PyTorch + YOLOv8, achieving real-time object detection with 40% speed improvement.",
      image: "/2.png",
      tech: ["PyTorch", "YOLOv8", "FastAPI", "OpenCV"],
      github: "https://github.com/SakshamTapadia/Vivid-Frame",
      category: "Computer Vision",
      icon: Zap,
      metrics: "<50ms Latency, 40% Speed Boost",
    },
    {
      title: "SwiftSend",
      description:
        "Email automation tool with 99% delivery success, featuring multi-threading with rate-limiting (50 emails/batch) and 3 parallel workers.",
      image: "/3.png",
      tech: ["Python", "Flask", "Flask-Mail", "Pandas"],
      github: "https://github.com/SakshamTapadia/EmailBot",
      category: "Automation",
      icon: Shield,
      metrics: "99% Delivery Success",
    },
  ]

  const additionalProjects = [
    {
      title: "Movie Rating Prediction",
      tech: ["Python", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/SakshamTapadia/Movie-Rating_Prediction",
    },
    {
      title: "Credit Card Fraud Detection",
      tech: ["Python", "Machine Learning", "Scikit-learn"],
      github: "https://github.com/SakshamTapadia/Credit-Card-Fraud-Detection",
    },
    {
      title: "Customer Churn Prediction",
      tech: ["Python", "Machine Learning", "Pandas"],
      github: "https://github.com/SakshamTapadia/Customer-Churn-Prediction",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-impact projects showcasing expertise in machine learning, computer vision, and automation
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-glow border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=200&width=400&query=data science project"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-background/80 rounded-full flex items-center justify-center">
                    <project.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs text-green-600 border-green-200">
                  {project.metrics}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="hover-glow border-0 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-serif font-bold mb-3">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/SakshamTapadia" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
