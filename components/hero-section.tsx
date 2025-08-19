"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[url(/abstract-data-network.png)] bg-cover bg-center opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="gradient-text">Saksham</span>
                <br />
                Tapadia
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-light">
                <span className="block">Data & Software Enthusiast</span>
                <span className="block">Chaos Tamer</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Hi, Im Saksham — part human, part data whisperer. I turn messy numbers into meaningful stories, solve
              problems one algorithm at a time, and make curiosity look like a superpower.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="/Saksham_Tapadia_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                <a href="#projects">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative lg:order-last">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-20" />
              <div className="absolute inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-float" />
              <img
                src="/professional-developer-portrait.png"
                alt="Saksham Tapadia"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
