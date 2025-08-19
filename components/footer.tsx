import { Github, Linkedin, Instagram, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { href: "https://github.com/SakshamTapadia", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/saksham-tapadia/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/saksham_tapadia/", icon: Instagram, label: "Instagram" },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold gradient-text">Saksham Tapadia</h3>
            <p className="text-muted-foreground">
              Big Data Enthusiast & Software Developer passionate about creating innovative solutions through data
              science and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Website designed and developed with
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            by Saksham Tapadia
          </p>
          <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
