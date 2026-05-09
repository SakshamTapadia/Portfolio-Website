"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -2000, y: -2000 })
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = Array.from({ length: 75 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
      }))
    }

    init()
    window.addEventListener("resize", init)

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouse)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const pts = particlesRef.current
      const m = mouseRef.current

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]

        // Particle-to-particle lines
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 135) {
            ctx.strokeStyle = `rgba(34,211,238,${(1 - d / 135) * 0.22})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // Mouse-to-particle lines
        const mdx = a.x - m.x
        const mdy = a.y - m.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 115) {
          ctx.strokeStyle = `rgba(168,85,247,${(1 - md / 115) * 0.48})`
          ctx.lineWidth = 0.7
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(m.x, m.y)
          ctx.stroke()
        }

        // Draw particle with radial glow
        const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.size * 3)
        g.addColorStop(0, "rgba(34,211,238,0.9)")
        g.addColorStop(1, "rgba(34,211,238,0)")
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()

        // Update position
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > canvas.width)  a.vx *= -1
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", init)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.42 }}
    />
  )
}
