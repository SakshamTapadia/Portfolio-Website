"use client"

import { useRef, useState, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  glowColor?: string
}

export function TiltCard({
  children,
  className = "",
  intensity = 10,
  glowColor = "rgba(34,211,238,0.09)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1 })
  const [glow, setGlow] = useState({ x: 50, y: 50, visible: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -intensity
    const ry = ((e.clientX - cx) / (rect.width  / 2)) *  intensity
    const gx = ((e.clientX - rect.left) / rect.width)  * 100
    const gy = ((e.clientY - rect.top)  / rect.height) * 100
    setTilt({ rx, ry, scale: 1.025 })
    setGlow({ x: gx, y: gy, visible: true })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, scale: 1 })
    setGlow((g) => ({ ...g, visible: false }))
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.scale})`,
        transition: "transform 0.2s cubic-bezier(0.23,1,0.32,1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glow.visible && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-xl z-10"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${glowColor} 0%, transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}
