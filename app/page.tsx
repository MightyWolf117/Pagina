import { Navigation } from "@/components/navigation"
import { CharacterCard } from "@/components/character-card"
import { ParticleButton } from "@/components/particle-button"
import { TrendingUp, Sparkles, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - En producción esto vendría del backend
const trendingCharacters = [
  {
    id: "1",
    name: "Luna Starlight",
    species: "Lobo Celestial",
    artist: "ArtistName",
    imageUrl: "/celestial-wolf-character-with-blue-and-purple-colo.jpg",
    likes: 1234,
    comments: 89,
    views: 5678,
    colors: ["#4A5FFF", "#B84AFF", "#FFFFFF"],
  },
  {
    id: "2",
    name: "Ember Phoenix",
    species: "Fénix Antropomórfico",
    artist: "FireArtist",
    imageUrl: "/phoenix-bird-character-with-orange-and-red-colors.jpg",
    likes: 2341,
    comments: 156,
    views: 8901,
    colors: ["#FF6B35", "#FFD23F", "#FF4500"],
  },
  {
    id: "3",
    name: "Aqua Marine",
    species: "Dragón Acuático",
    artist: "OceanDreamer",
    imageUrl: "/aquatic-dragon-character-with-teal-and-blue-colors.jpg",
    likes: 1876,
    comments: 134,
    views: 7234,
    colors: ["#00CED1", "#4682B4", "#E0FFFF"],
  },
  {
    id: "4",
    name: "Shadow Whisper",
    species: "Gato Místico",
    artist: "MysticArts",
    imageUrl: "/mystical-cat-character-with-purple-and-black-color.jpg",
    likes: 1567,
    comments: 98,
    views: 6543,
    colors: ["#8B00FF", "#4B0082", "#000000"],
  },
  {
    id: "5",
    name: "Forest Guardian",
    species: "Ciervo Elemental",
    artist: "NatureSpirit",
    imageUrl: "/deer-character-with-green-and-brown-nature-colors.jpg",
    likes: 2109,
    comments: 187,
    views: 9012,
    colors: ["#228B22", "#8B4513", "#90EE90"],
  },
  {
    id: "6",
    name: "Cyber Nova",
    species: "Zorro Cibernético",
    artist: "TechFox",
    imageUrl: "/cyberpunk-fox-character-with-neon-colors.jpg",
    likes: 1998,
    comments: 145,
    views: 8234,
    colors: ["#00FFFF", "#FF00FF", "#39FF14"],
  },
]

export default function LobbyPage() {
  const user = {
    name: "Usuario Demo",
    avatar: "/furry-avatar.png",
    initials: "UD",
    characters: 12,
    favorites: 45,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/celestial-wolf-character-with-blue-and-purple-colo.jpg')`,
            filter: "blur(60px) brightness(0.3)",
            transform: "scale(1.2)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50">
                <Avatar className="w-16 h-16 ring-4 ring-primary/30">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-lg">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{user.characters} personajes</span>
                    <span>•</span>
                    <span>{user.favorites} favoritos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="inline-block animate-float">
                <div className="text-6xl mb-4">🐾</div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary leading-tight text-balance">
                Bienvenido a Furrdex
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                El catálogo visual e interactivo donde cada personaje tiene su propia ficha viva
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <ParticleButton size="lg" className="gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explorar Personajes
                </ParticleButton>
                <ParticleButton size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Users className="w-5 h-5" />
                  Unirse a la Comunidad
                </ParticleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 px-4 border-y border-border/50 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">12,543</div>
                <div className="text-sm text-muted-foreground">Personajes Registrados</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">3,421</div>
                <div className="text-sm text-muted-foreground">Artistas Activos</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">89,234</div>
                <div className="text-sm text-muted-foreground">Interacciones Diarias</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Characters */}
        <section className="py-12 px-4">
          <div className="container mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Personajes en Tendencia</h2>
              </div>
              <ParticleButton variant="outline">Ver Todos</ParticleButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingCharacters.map((character) => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </div>
          </div>
        </section>

        {/* Community Highlights */}
        <section className="py-12 px-4 bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Destacados de la Comunidad</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
                <h3 className="text-xl font-bold mb-2">Artistas Destacados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Descubre los artistas más talentosos de la comunidad y sus increíbles creaciones
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
                <h3 className="text-xl font-bold mb-2">Nuevos Personajes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explora las últimas incorporaciones al catálogo y conoce nuevos diseños únicos
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                <h3 className="text-xl font-bold mb-2">Discusiones Activas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Únete a las conversaciones más populares en el foro de la comunidad
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
