import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Heart, Share2, MessageCircle, Eye, Palette, User, Calendar, Tag } from "lucide-react"

// Mock data
const character = {
  id: "1",
  name: "Luna Starlight",
  species: "Lobo Celestial",
  gender: "Femenino",
  pronouns: "Ella/She",
  description:
    "Luna es una guardiana celestial que protege el reino de las estrellas. Con su pelaje azul brillante y sus ojos púrpura místicos, puede controlar la energía estelar y crear constelaciones vivientes. Es sabia, compasiva y siempre está dispuesta a ayudar a quienes se pierden en la oscuridad.",
  personality: "Sabia, Compasiva, Protectora",
  universe: "Guardianes del Cosmos",
  imageUrl: "/celestial-wolf-character-with-blue-and-purple-colo.jpg",
  colors: ["#4A5FFF", "#B84AFF", "#FFFFFF", "#E0E7FF"],
  tags: ["lobo", "celestial", "mágico", "guardián", "azul", "púrpura"],
  artist: {
    name: "ArtistName",
    avatar: "/artist-avatar.png",
    characters: 24,
    followers: 1234,
  },
  stats: {
    likes: 1234,
    comments: 89,
    views: 5678,
    favorites: 456,
  },
  createdAt: "15 de Enero, 2025",
}

const relatedCharacters = [
  {
    id: "2",
    name: "Stellar Nova",
    imageUrl: "/star-character.jpg",
  },
  {
    id: "3",
    name: "Cosmic Dawn",
    imageUrl: "/cosmic-character.jpg",
  },
]

export default function CharacterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
            {/* Main Image */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="overflow-hidden">
                <div className="relative aspect-square bg-muted">
                  <img
                    src={character.imageUrl || "/placeholder.svg"}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="default" size="lg" className="gap-2">
                        <Heart className="w-5 h-5" />
                        {character.stats.likes}
                      </Button>
                      <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                        <MessageCircle className="w-5 h-5" />
                        {character.stats.comments}
                      </Button>
                      <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                        <Share2 className="w-5 h-5" />
                        Compartir
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {character.stats.views}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Paleta de Colores</h3>
                    </div>
                    <div className="flex gap-3">
                      {character.colors.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div
                            className="w-16 h-16 rounded-xl border-2 border-border shadow-md"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs font-mono text-muted-foreground">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Comments Section */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Comentarios ({character.stats.comments})</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10 bg-primary" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">Usuario123</span>
                        <span className="text-xs text-muted-foreground">hace 2 horas</span>
                      </div>
                      <p className="text-sm">¡Increíble diseño! Los colores son hermosos 💙</p>
                    </div>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver todos los comentarios
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Character Info */}
              <Card className="p-6 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
                  <p className="text-lg text-muted-foreground">{character.species}</p>
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Género y Pronombres</div>
                      <div className="text-muted-foreground">
                        {character.gender} • {character.pronouns}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Fecha de Creación</div>
                      <div className="text-muted-foreground">{character.createdAt}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Universo</div>
                      <div className="text-muted-foreground">{character.universe}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-2">Descripción</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{character.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Personalidad</h3>
                  <p className="text-sm text-muted-foreground">{character.personality}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Etiquetas</h3>
                  <div className="flex flex-wrap gap-2">
                    {character.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Artist Info */}
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold">Artista</h3>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 bg-secondary" />
                  <div className="flex-1">
                    <div className="font-semibold">{character.artist.name}</div>
                    <div className="text-sm text-muted-foreground">{character.artist.characters} personajes</div>
                  </div>
                </div>
                <Button className="w-full">Ver Perfil del Artista</Button>
                <div className="grid grid-cols-2 gap-2 text-center text-sm">
                  <div className="p-2 rounded-lg bg-muted">
                    <div className="font-bold text-lg">{character.artist.characters}</div>
                    <div className="text-muted-foreground">Personajes</div>
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <div className="font-bold text-lg">{character.artist.followers}</div>
                    <div className="text-muted-foreground">Seguidores</div>
                  </div>
                </div>
              </Card>

              {/* Related Characters */}
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold">Personajes Relacionados</h3>
                <div className="grid grid-cols-2 gap-3">
                  {relatedCharacters.map((char) => (
                    <div
                      key={char.id}
                      className="aspect-square rounded-lg overflow-hidden bg-muted hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      <img
                        src={char.imageUrl || "/placeholder.svg"}
                        alt={char.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Más del Universo
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
