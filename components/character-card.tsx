"use client"

import { Heart, MessageCircle, Eye, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

interface CharacterCardProps {
  id: string
  name: string
  species: string
  artist: string
  imageUrl: string
  likes: number
  comments: number
  views: number
  colors: string[]
}

export function CharacterCard({
  id,
  name,
  species,
  artist,
  imageUrl,
  likes,
  comments,
  views,
  colors,
}: CharacterCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 bg-card/40 backdrop-blur-sm border-border/50 relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(40px) brightness(0.5)",
        }}
      />

      <div className="relative z-10">
        <Link href={`/character/${id}`}>
          <div className="relative aspect-square overflow-hidden bg-muted/50">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Color palette */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </Link>

        <div className="p-4 space-y-3">
          <div>
            <Link href={`/character/${id}`}>
              <h3 className="font-bold text-lg hover:text-primary transition-colors">{name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground">{species}</p>
            <p className="text-xs text-muted-foreground">por {artist}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {views}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {comments}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`relative group/btn ${isLiked ? "text-red-500" : ""}`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-md" />
                <Heart className={`w-4 h-4 relative z-10 ${isLiked ? "fill-current" : ""}`} />
                <span className="ml-1 relative z-10">{likeCount}</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative group/btn">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-md" />
                <Share2 className="w-4 h-4 relative z-10" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
