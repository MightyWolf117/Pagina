"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"
import { useRef, useState } from "react"

interface ParticleButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function ParticleButton({ children, className, ...props }: ParticleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const createParticle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newParticle = {
      id: Date.now() + Math.random(),
      x,
      y,
    }

    setParticles((prev) => [...prev, newParticle])

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
    }, 1000)
  }

  return (
    <Button
      ref={buttonRef}
      className={cn("relative overflow-hidden group", className)}
      onMouseEnter={createParticle}
      {...props}
    >
      {/* Particle effects */}
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none animate-particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}

      {/* Hover glow effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
