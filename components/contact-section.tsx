"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail, MapPin, Github, Code2, Linkedin, Instagram, Youtube,
  Twitter, MessageSquare, ExternalLink,
} from "lucide-react"
import { TiltCard } from "@/components/tilt-card"

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: "sakshamtapadia10@gmail.com",
    href: "mailto:sakshamtapadia10@gmail.com",
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/8",
    glow: "rgba(34,211,238,0.12)",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jaipur, Rajasthan, India",
    href: "https://www.google.com/maps/place/Jaipur",
    color: "text-secondary",
    border: "border-secondary/20",
    bg: "bg-secondary/8",
    glow: "rgba(168,85,247,0.12)",
  },
]

const SOCIAL_PLATFORMS = [
  {
    category: "Professional",
    accent: "text-primary",
    links: [
      { icon: Github,   title: "GitHub",   href: "https://github.com/SakshamTapadia",            color: "hover:text-primary" },
      { icon: Linkedin, title: "LinkedIn", href: "https://www.linkedin.com/in/saksham-tapadia/", color: "hover:text-blue-400" },
      { icon: Code2,    title: "LeetCode", href: "https://leetcode.com/u/Saksham_Tapadia/",      color: "hover:text-orange-400" },
    ],
  },
  {
    category: "Social & Content",
    accent: "text-secondary",
    links: [
      { icon: Twitter,      title: "Twitter",          href: "https://twitter.com/Saksham_Tapadia",                       color: "hover:text-blue-400" },
      { icon: Instagram,    title: "Instagram",        href: "https://www.instagram.com/saksham_tapadia",                 color: "hover:text-pink-400" },
      { icon: Youtube,      title: "YouTube",          href: "https://www.youtube.com/@sakshamtapadia",                   color: "hover:text-red-400" },
      { icon: MessageSquare,title: "WhatsApp Channel", href: "https://www.whatsapp.com/channel/0029VamskeRIHphAM86hQc3L", color: "hover:text-green-400" },
    ],
  },
  {
    category: "Coding Platforms",
    accent: "text-accent",
    links: [
      { icon: Code2, title: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/sakshamtapadia10/", color: "hover:text-green-400" },
      { icon: Code2, title: "HackerRank",    href: "https://www.hackerrank.com/profile/sakshamtapadia10", color: "hover:text-green-400" },
      { icon: Code2, title: "Kaggle",        href: "https://www.kaggle.com/sakshamtapadia02",             color: "hover:text-blue-400" },
    ],
  },
]

const QUICK_LINKS = [
  { title: "Bento Profile", href: "https://bento.me/saksham-tapadia",       icon: ExternalLink },
  { title: "Linktree",      href: "https://linktr.ee/sakshamtapadia",        icon: ExternalLink },
  { title: "Medium Blog",   href: "https://medium.com/@sakshamtapadia10",   icon: ExternalLink },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px section-rule" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3">Say Hello</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-5">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Let&apos;s discuss data science opportunities, collaborations, or your next ML project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {CONTACT_INFO.map((info, i) => (
              <TiltCard key={i} glowColor={info.glow} intensity={8}>
                <Card className={`hover-glow border ${info.border} bg-card/60 backdrop-blur-md`}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{info.title}</p>
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${info.color} hover:opacity-80 transition-opacity`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>

          {/* Social platform groups */}
          <div className="space-y-7">
            {SOCIAL_PLATFORMS.map((cat, ci) => (
              <div key={ci}>
                <h4 className={`text-sm font-serif font-bold mb-3 ${cat.accent}`}>{cat.category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {cat.links.map((s, si) => (
                    <Button
                      key={si}
                      variant="outline"
                      size="sm"
                      asChild
                      className={`justify-start border-border/40 bg-card/40 backdrop-blur-sm ${s.color} hover:bg-primary/5 hover:border-primary/30 transition-all duration-200`}
                    >
                      <a href={s.href} target="_blank" rel="noopener noreferrer">
                        <s.icon className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                        <span className="truncate text-xs">{s.title}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-serif font-bold mb-3 text-accent">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              {QUICK_LINKS.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-accent/30 hover:border-accent/60 hover:bg-accent/8 hover:text-accent transition-all duration-200"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-3.5 w-3.5 mr-2" />
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
