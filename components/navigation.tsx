"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Upload, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navigation() {
  const pathname = usePathname()

  const user = {
    name: "Usuario Demo",
    avatar: "/furry-avatar.png",
    initials: "UD",
  }

  const links = [
    { href: "/", label: "Lobby", icon: Home },
    { href: "/search", label: "Buscar", icon: Search },
    { href: "/upload", label: "Subir", icon: Upload },
    { href: "/forum", label: "Foro", icon: MessageSquare },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🐾</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
              Furrdex
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group overflow-hidden",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="hidden md:inline relative z-10">{link.label}</span>
                </Link>
              )
            })}

            <Link
              href="/profile"
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 group ml-2",
                pathname === "/profile" ? "bg-primary/20 ring-2 ring-primary" : "hover:bg-muted/50",
              )}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Avatar className="w-8 h-8 relative z-10 ring-2 ring-primary/50">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-xs">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <span className="hidden lg:inline text-sm font-medium relative z-10">{user.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
