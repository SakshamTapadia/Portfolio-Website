import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3 as Source_Sans_Pro, Playfair_Display } from "next/font/google"
import "./globals.css"

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans-pro",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Saksham Tapadia - Data Scientist & Developer",
  description: "Portfolio of Saksham Tapadia - Big Data Enthusiast, Software Developer, and Data Science Expert",
  keywords: "data science, machine learning, software development, python, portfolio",
  authors: [{ name: "Saksham Tapadia" }],
  openGraph: {
    title: "Saksham Tapadia - Data Scientist & Developer",
    description: "Explore my journey in data science and software development",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSansPro.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
