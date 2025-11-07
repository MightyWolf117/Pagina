"use client"

import { Navigation } from "@/components/navigation"
import { CharacterCard } from "@/components/character-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { useState } from "react"

const mockCharacters = [
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
    artist: "FireArtist",
    imageUrl: "/phoenix-bird-character.jpg",
    likes: 2341,
    comments: 156,
    views: 8901,
    colors: ["#FF6B35", "#FFD23F", "#FF4500"],
  },
]

const species = ["Lobo", "Zorro", "Gato", "Dragón", "Fénix", "Ciervo", "Conejo"]
const colorFilters = [
  { name: "Azul", color: "#4A5FFF" },
  { name: "Púrpura", color: "#B84AFF" },
  { name: "Rojo", color: "#FF4500" },
  { name: "Verde", color: "#228B22" },
  { name: "Naranja", color: "#FF6B35" },
  { name: "Cian", color: "#00CED1" },
]

export default function SearchPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4">
        <div className="container mx-auto">
          {/* Search Header */}
          <div className="py-8 space-y-6">
            <h1 className="text-4xl font-bold">Buscar Personajes</h1>

            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre, especie, artista..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="lg" onClick={() => setShowFilters(!showFilters)} className="gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-6 pb-12">
            {/* Filters Sidebar */}
            {showFilters && (
              <aside className="w-80 space-y-6 shrink-0">
                <div className="sticky top-24 space-y-6 p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Filtros</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="md:hidden">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Species Filter */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Especie</Label>
                    <div className="space-y-2">
                      {species.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <Checkbox id={s} />
                          <label htmlFor={s} className="text-sm cursor-pointer hover:text-primary transition-colors">
                            {s}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Color Dominante</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {colorFilters.map((c) => (
                        <button
                          key={c.name}
                          className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div
                            className="w-12 h-12 rounded-full border-2 border-border shadow-md hover:scale-110 transition-transform"
                            style={{ backgroundColor: c.color }}
                          />
                          <span className="text-xs">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popularity Filter */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Popularidad Mínima</Label>
                    <Slider defaultValue={[0]} max={10000} step={100} />
                    <p className="text-xs text-muted-foreground">0 - 10,000 likes</p>
                  </div>

                  {/* Sort Options */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Ordenar por</Label>
                    <div className="space-y-2">
                      {["Más reciente", "Más popular", "Más comentado", "Más visto"].map((option) => (
                        <div key={option} className="flex items-center gap-2">
                          <Checkbox id={option} />
                          <label
                            htmlFor={option}
                            className="text-sm cursor-pointer hover:text-primary transition-colors"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Limpiar Filtros
                  </Button>
                </div>
              </aside>
            )}

            {/* Results Grid */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Mostrando <span className="font-semibold text-foreground">2,341</span> resultados
                </p>
                <Button variant="ghost" size="sm">
                  Vista compacta
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCharacters.map((character) => (
                  <CharacterCard key={character.id} {...character} />
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center pt-8">
                <Button size="lg" variant="outline">
                  Cargar Más Personajes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
