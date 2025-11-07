"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, TrendingUp, Clock, ThumbsUp, Search, Plus, Pin, Flame, Eye } from "lucide-react"

const categories = [
  { name: "Diseño", icon: "🎨", count: 234 },
  { name: "Técnicas", icon: "✏️", count: 189 },
  { name: "Lore", icon: "📖", count: 156 },
  { name: "Comisiones", icon: "💼", count: 98 },
  { name: "Comunidad", icon: "💬", count: 445 },
]

const threads = [
  {
    id: "1",
    title: "¿Cómo crear paletas de colores armoniosas para personajes?",
    author: "ColorMaster",
    avatar: "/user-avatar-1.png",
    category: "Técnicas",
    replies: 45,
    likes: 123,
    views: 1234,
    isPinned: true,
    isHot: true,
    timeAgo: "hace 2 horas",
    tags: ["colores", "diseño", "tutorial"],
  },
  {
    id: "2",
    title: "Comparto mi proceso de creación de personajes",
    author: "ArtistPro",
    avatar: "/diverse-user-avatar-set-2.png",
    category: "Diseño",
    replies: 67,
    likes: 234,
    views: 2345,
    isPinned: false,
    isHot: true,
    timeAgo: "hace 5 horas",
    tags: ["proceso", "tutorial", "inspiración"],
  },
  {
    id: "3",
    title: "¿Alguien más tiene problemas con las proporciones anatómicas?",
    author: "NewbieFur",
    avatar: "/diverse-user-avatars-3.png",
    category: "Comunidad",
    replies: 23,
    likes: 56,
    views: 789,
    isPinned: false,
    isHot: false,
    timeAgo: "hace 1 día",
    tags: ["ayuda", "anatomía"],
  },
]

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 pb-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="py-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Foro de la Comunidad</h1>
                <p className="text-muted-foreground">Comparte ideas, pide consejos y conecta con otros artistas</p>
              </div>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Nueva Discusión
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Buscar en el foro..." className="pl-10 h-12" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Categories */}
              <Card className="p-6 space-y-4">
                <h2 className="font-bold text-lg">Categorías</h2>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="font-medium">{cat.name}</span>
                      </div>
                      <Badge variant="secondary">{cat.count}</Badge>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Stats */}
              <Card className="p-6 space-y-4">
                <h2 className="font-bold text-lg">Estadísticas</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discusiones</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mensajes</span>
                    <span className="font-semibold">12,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Miembros</span>
                    <span className="font-semibold">3,421</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">En línea</span>
                    <span className="font-semibold text-green-500">234</span>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <Button variant="default" size="sm" className="gap-2 shrink-0">
                  <TrendingUp className="w-4 h-4" />
                  En Tendencia
                </Button>
                <Button variant="outline" size="sm" className="gap-2 shrink-0 bg-transparent">
                  <Clock className="w-4 h-4" />
                  Más Reciente
                </Button>
                <Button variant="outline" size="sm" className="gap-2 shrink-0 bg-transparent">
                  <ThumbsUp className="w-4 h-4" />
                  Más Votado
                </Button>
                <Button variant="outline" size="sm" className="gap-2 shrink-0 bg-transparent">
                  <MessageSquare className="w-4 h-4" />
                  Más Comentado
                </Button>
              </div>

              {/* Threads List */}
              <div className="space-y-4">
                {threads.map((thread) => (
                  <Card key={thread.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <Avatar className="w-12 h-12 shrink-0 bg-primary" />

                      <div className="flex-1 min-w-0 space-y-3">
                        <div className="flex items-start gap-2">
                          {thread.isPinned && <Pin className="w-4 h-4 text-primary shrink-0 mt-1" />}
                          {thread.isHot && <Flame className="w-4 h-4 text-orange-500 shrink-0 mt-1" />}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg hover:text-primary transition-colors cursor-pointer leading-tight">
                              {thread.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <span className="font-medium">{thread.author}</span>
                              <span>•</span>
                              <span>{thread.timeAgo}</span>
                              <span>•</span>
                              <Badge variant="secondary" className="text-xs">
                                {thread.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {thread.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4" />
                            {thread.replies} respuestas
                          </span>
                          <span className="flex items-center gap-1.5">
                            <ThumbsUp className="w-4 h-4" />
                            {thread.likes} likes
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Eye className="w-4 h-4" />
                            {thread.views} vistas
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center pt-4">
                <Button variant="outline" size="lg">
                  Cargar Más Discusiones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
