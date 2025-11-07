import { Navigation } from "@/components/navigation"
import { CharacterCard } from "@/components/character-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Share2, Heart, Eye, MessageSquare, Grid, List } from "lucide-react"

const userProfile = {
  name: "ArtistName",
  username: "@artistname",
  avatar: "/artist-profile-avatar.png",
  banner: "/fantasy-banner-with-stars.jpg",
  bio: "Artista digital especializado en personajes furry y criaturas fantásticas. Amante de los colores vibrantes y las historias épicas. ✨🎨",
  stats: {
    characters: 24,
    followers: 1234,
    following: 567,
    likes: 12345,
  },
  socials: {
    twitter: "@artistname",
    instagram: "@artistname",
    artstation: "artistname",
  },
}

const userCharacters = [
  {
    id: "1",
    name: "Luna Starlight",
    species: "Lobo Celestial",
    artist: "ArtistName",
    imageUrl: "/celestial-wolf-character.jpg",
    likes: 1234,
    comments: 89,
    views: 5678,
    colors: ["#4A5FFF", "#B84AFF", "#FFFFFF"],
  },
  {
    id: "2",
    name: "Ember Phoenix",
    species: "Fénix Antropomórfico",
    artist: "ArtistName",
    imageUrl: "/phoenix-bird-character.jpg",
    likes: 2341,
    comments: 156,
    views: 8901,
    colors: ["#FF6B35", "#FFD23F", "#FF4500"],
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-16">
        {/* Banner */}
        <div className="relative h-64 bg-muted overflow-hidden">
          <img
            src={userProfile.banner || "/placeholder.svg"}
            alt="Profile banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Profile Header */}
        <div className="container mx-auto px-4">
          <div className="relative -mt-20 pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              <Avatar className="w-40 h-40 border-4 border-background shadow-xl bg-primary" />

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                  <p className="text-muted-foreground">{userProfile.username}</p>
                </div>

                <p className="text-muted-foreground max-w-2xl leading-relaxed">{userProfile.bio}</p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="font-bold text-lg">{userProfile.stats.characters}</span>
                    <span className="text-muted-foreground ml-1">Personajes</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg">{userProfile.stats.followers}</span>
                    <span className="text-muted-foreground ml-1">Seguidores</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg">{userProfile.stats.following}</span>
                    <span className="text-muted-foreground ml-1">Siguiendo</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg">{userProfile.stats.likes}</span>
                    <span className="text-muted-foreground ml-1">Likes Totales</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Share2 className="w-5 h-5" />
                  Compartir
                </Button>
                <Button size="lg" className="gap-2">
                  <Settings className="w-5 h-5" />
                  Editar Perfil
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center space-y-2">
              <Heart className="w-8 h-8 mx-auto text-red-500" />
              <div className="text-3xl font-bold">{userProfile.stats.likes}</div>
              <div className="text-sm text-muted-foreground">Likes Recibidos</div>
            </Card>

            <Card className="p-6 text-center space-y-2">
              <Eye className="w-8 h-8 mx-auto text-primary" />
              <div className="text-3xl font-bold">45,678</div>
              <div className="text-sm text-muted-foreground">Vistas Totales</div>
            </Card>

            <Card className="p-6 text-center space-y-2">
              <MessageSquare className="w-8 h-8 mx-auto text-secondary" />
              <div className="text-3xl font-bold">1,234</div>
              <div className="text-sm text-muted-foreground">Comentarios</div>
            </Card>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="characters" className="pb-12">
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="characters">Personajes</TabsTrigger>
                <TabsTrigger value="favorites">Favoritos</TabsTrigger>
                <TabsTrigger value="collections">Colecciones</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="characters" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userCharacters.map((character) => (
                  <CharacterCard key={character.id} {...character} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <Card className="p-12 text-center">
                <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-bold mb-2">No hay favoritos aún</h3>
                <p className="text-muted-foreground">Los personajes que marques como favoritos aparecerán aquí</p>
              </Card>
            </TabsContent>

            <TabsContent value="collections">
              <Card className="p-12 text-center">
                <Grid className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-bold mb-2">No hay colecciones aún</h3>
                <p className="text-muted-foreground">
                  Crea colecciones para organizar tus personajes por temas o universos
                </p>
                <Button className="mt-4">Crear Colección</Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
