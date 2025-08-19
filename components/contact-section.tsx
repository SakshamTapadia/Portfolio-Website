"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import {
  Mail,
  MapPin,
  Github,
  Code2,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  MessageSquare,
  ExternalLink,
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sakshamtapadia10@gmail.com",
      href: "mailto:sakshamtapadia10@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jaipur, Rajasthan, India",
      href: "https://www.google.com/maps/place/Nasirabad,+Rajasthan+305601",
    },
  ]

  const socialPlatforms = [
    {
      category: "Professional",
      links: [
        { icon: Github, title: "GitHub", href: "https://github.com/SakshamTapadia", color: "hover:text-gray-400" },
        {
          icon: Linkedin,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/saksham-tapadia/",
          color: "hover:text-blue-400",
        },
        {
          icon: Code2,
          title: "LeetCode",
          href: "https://leetcode.com/u/Saksham_Tapadia/",
          color: "hover:text-orange-400",
        },
      ],
    },
    {
      category: "Social & Content",
      links: [
        { icon: Twitter, title: "Twitter", href: "https://twitter.com/Saksham_Tapadia", color: "hover:text-blue-400" },
        {
          icon: Instagram,
          title: "Instagram",
          href: "https://www.instagram.com/saksham_tapadia",
          color: "hover:text-pink-400",
        },
        {
          icon: Youtube,
          title: "YouTube",
          href: "https://www.youtube.com/@sakshamtapadia",
          color: "hover:text-red-400",
        },
        {
          icon: MessageSquare,
          title: "WhatsApp Channel",
          href: "https://www.whatsapp.com/channel/0029VamskeRIHphAM86hQc3L",
          color: "hover:text-green-400",
        },
      ],
    },
    {
      category: "Coding Platforms",
      links: [
        {
          icon: Code2,
          title: "GeeksforGeeks",
          href: "https://www.geeksforgeeks.org/user/sakshamtapadia10/",
          color: "hover:text-green-400",
        },
        {
          icon: Code2,
          title: "HackerRank",
          href: "https://www.hackerrank.com/profile/sakshamtapadia10",
          color: "hover:text-green-400",
        },
        { icon: Code2, title: "Kaggle", href: "https://www.kaggle.com/sakshamtapadia02", color: "hover:text-blue-400" },
      ],
    },
  ]

  const quickLinks = [
    { title: "Bento Profile", href: "https://bento.me/saksham-tapadia", icon: ExternalLink },
    { title: "Linktree", href: "https://linktr.ee/sakshamtapadia", icon: ExternalLink },
    { title: "Medium Blog", href: "https://medium.com/@sakshamtapadia10", icon: ExternalLink },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lets discuss data science opportunities, collaborations, or your next ML project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Lets Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Im actively seeking opportunities in data science and machine learning. Whether you have an internship,
                full-time role, or want to collaborate on exciting ML projects, Id love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              {socialPlatforms.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="text-lg font-serif font-bold mb-3 text-primary">{category.category}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {category.links.map((social, index) => (
                      <Button key={index} variant="outline" size="sm" asChild className="justify-start bg-transparent">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-transparent ${social.color} transition-colors`}
                        >
                          <social.icon className="h-4 w-4 mr-2" />
                          {social.title}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h4 className="text-lg font-serif font-bold mb-3 text-primary">Quick Links</h4>
                <div className="flex flex-wrap gap-3">
                  {quickLinks.map((link, index) => (
                    <Button key={index} variant="outline" size="sm" asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent hover:text-primary transition-colors"
                      >
                        <link.icon className="h-4 w-4 mr-2" />
                        {link.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <Card className="hover-glow border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
