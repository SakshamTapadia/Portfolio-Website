"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Code2, Twitter } from "lucide-react"

const NAV_ITEMS = [
  { href: "#home",         label: "Home" },
  { href: "#about",        label: "About" },
  { href: "#projects",     label: "Projects" },
  { href: "#skills",       label: "Skills" },
  { href: "#experience",   label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact",      label: "Contact" },
]

const SOCIAL_LINKS = [
  { href: "https://github.com/SakshamTapadia",            icon: Github,  label: "GitHub" },
  { href: "https://www.linkedin.com/in/saksham-tapadia/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/Saksham_Tapadia/",      icon: Code2,   label: "LeetCode" },
  { href: "https://twitter.com/Saksham_Tapadia",          icon: Twitter,  label: "Twitter" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = NAV_ITEMS.map((n) => n.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      {/* Top + bottom ruled lines when scrolled */}
      {scrolled && (
        <>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-serif font-bold gradient-text hover:scale-110 transition-transform duration-200 select-none"
          >
            ST
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-1">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground hover:bg-primary/10"
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-xl">
            <div className="px-4 pt-3 pb-4 space-y-1">
              {NAV_ITEMS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex space-x-3 px-3 py-3 border-t border-border/30 mt-2">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
