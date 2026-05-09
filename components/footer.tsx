import { Github, Linkedin, Instagram, Heart } from "lucide-react"

const SOCIAL_LINKS = [
  { href: "https://github.com/SakshamTapadia",             icon: Github,    label: "GitHub" },
  { href: "https://www.linkedin.com/in/saksham-tapadia/",  icon: Linkedin,  label: "LinkedIn" },
  { href: "https://www.instagram.com/saksham_tapadia/",    icon: Instagram, label: "Instagram" },
]

const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Experience", "Contact"]

export function Footer() {
  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border/30">
      {/* Top gradient rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold gradient-text">Saksham Tapadia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Big Data Enthusiast &amp; Software Developer passionate about creating innovative solutions
              through data science and machine learning.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-foreground/80">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-foreground/80">Connect</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/8 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div className="border-t border-border/30 pt-8 text-center space-y-1.5">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Designed &amp; developed with
            <Heart className="h-3.5 w-3.5 text-accent fill-current" />
            by Saksham Tapadia
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
