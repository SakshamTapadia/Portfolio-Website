"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react"
import { ParticleCanvas } from "@/components/particle-canvas"

/* ── CSS 3-D wireframe cube ── */
function WireframeCube({ size, animClass }: { size: number; animClass: string }) {
  const h = size / 2
  const faces = [
    { tf: `translateZ(${h}px)`,                     color: "rgba(34,211,238,0.18)" },
    { tf: `rotateY(180deg) translateZ(${h}px)`,     color: "rgba(34,211,238,0.18)" },
    { tf: `rotateY(-90deg) translateZ(${h}px)`,     color: "rgba(168,85,247,0.18)" },
    { tf: `rotateY(90deg)  translateZ(${h}px)`,     color: "rgba(168,85,247,0.18)" },
    { tf: `rotateX(90deg)  translateZ(${h}px)`,     color: "rgba(244,114,182,0.18)" },
    { tf: `rotateX(-90deg) translateZ(${h}px)`,     color: "rgba(244,114,182,0.18)" },
  ]
  return (
    <div style={{ perspective: size * 5 }}>
      <div
        className={`cube-3d ${animClass}`}
        style={{ width: size, height: size }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            className="cube-face"
            style={{ width: size, height: size, transform: f.tf, borderColor: f.color }}
          />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Layer stack */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      {/* Neural-network particles */}
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] bg-primary/8   rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[28rem] h-[28rem] bg-secondary/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/3 rounded-full blur-[170px] pointer-events-none" />

      {/* Floating 3-D cubes */}
      <div className="absolute top-24 right-[7%] opacity-55 hidden xl:block animate-float-delay">
        <WireframeCube size={108} animClass="animate-spin-cube" />
      </div>
      <div className="absolute bottom-36 left-[5%] opacity-40 hidden xl:block animate-float">
        <WireframeCube size={66} animClass="animate-spin-cube-2" />
      </div>
      <div className="absolute top-1/2 right-[3%] opacity-25 hidden 2xl:block">
        <WireframeCube size={44} animClass="animate-spin-cube" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold leading-none tracking-tight mb-6">
              <span className="gradient-text">Saksham</span>
              <br />
              <span className="text-foreground/90">Tapadia</span>
            </h1>
          </div>

          {/* Role pills */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-9">
              <span className="px-4 py-1.5 rounded-full bg-card/60 border border-border/50 text-lg text-muted-foreground font-light backdrop-blur-sm">
                Data &amp; Software Enthusiast
              </span>
              <span className="hidden sm:block text-primary/40 text-xl">·</span>
              <span className="px-4 py-1.5 rounded-full bg-card/60 border border-border/50 text-lg text-muted-foreground font-light backdrop-blur-sm">
                Chaos Tamer
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Part human, part data whisperer. I turn messy numbers into meaningful stories,
              solve problems one algorithm at a time, and make curiosity look like a superpower.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.55s", opacity: 0 }}>
            <Button
              size="lg"
              className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_28px_oklch(0.82_0.155_198/0.35)] hover:shadow-[0_0_45px_oklch(0.82_0.155_198/0.55)] transition-all duration-300 group"
              asChild
            >
              <a href="#projects">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/8 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href="https://github.com/SakshamTapadia" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] text-muted-foreground/50 tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary/50" />
      </div>
    </section>
  )
}
