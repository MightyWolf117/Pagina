"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon, Palette, Tag, Save, Eye } from "lucide-react"
import { useState } from "react"

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [detectedColors, setDetectedColors] = useState<string[]>(["#4A5FFF", "#B84AFF", "#FFFFFF", "#FFD23F"])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="py-8 space-y-2">
            <h1 className="text-4xl font-bold">Subir Personaje</h1>
            <p className="text-muted-foreground">Comparte tu creación con la comunidad de Furrdex</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <Card className="p-6 space-y-6">
                <div>
                  <Label className="text-base font-semibold">Imagen del Personaje</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sube una imagen de alta calidad (PNG, JPG, hasta 10MB)
                  </p>

                  {!preview ? (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click para subir</span> o arrastra y suelta
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 10MB)</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={preview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setPreview(null)}
                      >
                        Cambiar Imagen
                      </Button>
                    </div>
                  )}
                </div>

                {preview && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <Label className="text-base font-semibold">Paleta Detectada</Label>
                    </div>
                    <div className="flex gap-2">
                      {detectedColors.map((color, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-lg border-2 border-border shadow-md"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Los colores se detectan automáticamente. Puedes editarlos después.
                    </p>
                  </div>
                )}
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Opciones de Imagen</Label>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label htmlFor="filename">Nombre del Archivo</Label>
                    <Input id="filename" placeholder="character-name.png" className="mt-1.5" />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="watermark" className="rounded" />
                    <label htmlFor="watermark" className="text-sm cursor-pointer">
                      Agregar firma digital automática
                    </label>
                  </div>
                </div>
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <Label className="text-base font-semibold">Información del Personaje</Label>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre del Personaje *</Label>
                    <Input id="name" placeholder="Ej: Luna Starlight" className="mt-1.5" />
                  </div>

                  <div>
                    <Label htmlFor="species">Especie *</Label>
                    <Input id="species" placeholder="Ej: Lobo Celestial" className="mt-1.5" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gender">Género</Label>
                      <Input id="gender" placeholder="Ej: Femenino" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="pronouns">Pronombres</Label>
                      <Input id="pronouns" placeholder="Ej: Ella/She" className="mt-1.5" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe la personalidad, historia o características únicas de tu personaje..."
                      className="mt-1.5 min-h-32"
                    />
                  </div>

                  <div>
                    <Label htmlFor="universe">Universo/Serie (Opcional)</Label>
                    <Input id="universe" placeholder="Ej: Guardianes del Bosque" className="mt-1.5" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  <Label className="text-base font-semibold">Etiquetas</Label>
                </div>

                <Input placeholder="Agregar etiquetas separadas por comas" />

                <div className="flex flex-wrap gap-2">
                  {["lobo", "celestial", "mágico", "azul"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>

              <div className="flex gap-3">
                <Button className="flex-1 gap-2" size="lg">
                  <Save className="w-5 h-5" />
                  Publicar Personaje
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Eye className="w-5 h-5" />
                  Vista Previa
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Al publicar, aceptas nuestras normas de contenido y confirmas que tienes los derechos sobre esta imagen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
