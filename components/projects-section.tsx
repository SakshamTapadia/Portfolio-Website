import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, Zap, Shield, ArrowRight } from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const FEATURED = [
  {
    title: "Credit Lending Risk Analysis",
    description:
      "CatBoost + scikit-learn pipeline achieving 92.4% accuracy (AUC-ROC 0.97) for credit default risk prediction using real-world fintech data.",
    image: "/1.png",
    tech: ["CatBoost", "scikit-learn", "Streamlit", "Python"],
    github: "https://github.com/SakshamTapadia/Credit_Lending_Risk_Analysis",
    category: "Machine Learning",
    icon: TrendingUp,
    metrics: "92.4% Accuracy · AUC-ROC 0.97",
    palette: {
      border: "border-primary/25",
      text: "text-primary",
      bg: "bg-primary/8",
      glow: "rgba(34,211,238,0.1)",
      shadow: "shadow-[0_0_20px_rgba(34,211,238,0.08)]",
    },
  },
  {
    title: "Vivid Frame",
    description:
      "AI pipeline with <50 ms latency using PyTorch + YOLOv8, achieving real-time object detection with 40% speed improvement over baseline.",
    image: "/2.png",
    tech: ["PyTorch", "YOLOv8", "FastAPI", "OpenCV"],
    github: "https://github.com/SakshamTapadia/Video_Broadcaster",
    category: "Computer Vision",
    icon: Zap,
    metrics: "<50 ms Latency · 40% Faster",
    palette: {
      border: "border-secondary/25",
      text: "text-secondary",
      bg: "bg-secondary/8",
      glow: "rgba(168,85,247,0.1)",
      shadow: "shadow-[0_0_20px_rgba(168,85,247,0.08)]",
    },
  },
  {
    title: "SwiftSend",
    description:
      "Email automation tool with 99% delivery success, multi-threading with rate-limiting (50 emails/batch) and 3 parallel workers.",
    image: "/3.png",
    tech: ["Python", "Flask", "Flask-Mail", "Pandas"],
    github: "https://github.com/SakshamTapadia/EmailBot",
    category: "Automation",
    icon: Shield,
    metrics: "99% Delivery Success",
    palette: {
      border: "border-accent/25",
      text: "text-accent",
      bg: "bg-accent/8",
      glow: "rgba(244,114,182,0.1)",
      shadow: "shadow-[0_0_20px_rgba(244,114,182,0.08)]",
    },
  },
]

const MORE = [
  {
    title: "QuantPulse",
    description:
      "Production-grade fintech platform monitoring 15 stocks/ETFs. HMM + Transformer ensemble classifies market regimes with real-time alerts.",
    tech: ["Python", "FastAPI", "PyTorch", "Next.js", "Kafka", "TimescaleDB"],
    github: "https://github.com/SakshamTapadia/QuantPulse",
  },
  {
    title: "Movie Rating Prediction",
    description: "ML-driven predictor using collaborative filtering and content-based features for accurate rating estimates.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/SakshamTapadia/Movie-Rating_Prediction",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Real-time fraud detection with high precision-recall balance for financial transaction classification.",
    tech: ["Python", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/SakshamTapadia/Credit-Card-Fraud-Detection",
  },
  {
    title: "Customer Churn Prediction",
    description: "Identifies at-risk customers using behavioral patterns and ensemble ML classification.",
    tech: ["Python", "Machine Learning", "Pandas"],
    github: "https://github.com/SakshamTapadia/Customer-Churn-Prediction",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-secondary text-xs font-medium tracking-[0.2em] uppercase mb-3">What I&apos;ve Built</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Featured 3-column grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {FEATURED.map((p, i) => (
            <TiltCard key={i} glowColor={p.palette.glow}>
              <Card className={`hover-glow border ${p.palette.border} bg-card/60 backdrop-blur-md overflow-hidden h-full flex flex-col ${p.palette.shadow}`}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${p.palette.bg} ${p.palette.text} border ${p.palette.border} text-xs backdrop-blur-sm`}>
                      {p.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <p.icon className={`h-4 w-4 ${p.palette.text}`} />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-lg">{p.title}</CardTitle>
                  <div className={`inline-flex items-center text-xs font-mono font-medium ${p.palette.text} ${p.palette.bg} border ${p.palette.border} rounded-md px-2 py-1 w-fit`}>
                    {p.metrics}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, ti) => (
                      <Badge key={ti} variant="outline" className="text-xs border-border/50 text-muted-foreground">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border/50 bg-transparent hover:bg-card hover:border-primary/30 text-xs"
                      asChild
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 ${p.palette.bg} ${p.palette.text} border ${p.palette.border} hover:opacity-90 text-xs`}
                      asChild
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* More projects */}
        <div className="mb-14">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">More Projects</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {MORE.map((p, i) => (
              <TiltCard key={i} intensity={7}>
                <Card className="hover-glow border border-border/40 bg-card/40 backdrop-blur-md h-full">
                  <CardContent className="p-5 flex flex-col h-full gap-3">
                    <h4 className="font-serif font-bold text-sm">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.tech.slice(0, 3).map((t, ti) => (
                        <Badge key={ti} variant="outline" className="text-[10px] border-border/40 text-muted-foreground px-1.5 py-0">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs hover:text-primary hover:bg-primary/10 h-7"
                      asChild
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3 w-3" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/8 group transition-all duration-300"
            asChild
          >
            <a href="https://github.com/SakshamTapadia" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
