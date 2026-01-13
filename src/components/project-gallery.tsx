"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  images: string[]
  title: string
  imgPosition?: string
  imgRotation?: number
}

export function ProjectGallery({ images, title, imgPosition = "center", imgRotation = 0 }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <div className="w-full h-full relative group">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full w-full relative basis-full">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image}
                  alt={`${title} - Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={index === 0 && imgRotation !== 0 ? { 
                    transform: `rotate(${imgRotation}deg) scale(1.1)` 
                  } : undefined}
                  className={cn(
                    "object-cover transition-transform duration-500",
                    index === 0 ? `object-${imgPosition}` : "object-center"
                  )}
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 border-white/20 hover:bg-amber-500" />
            <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 border-white/20 hover:bg-amber-500" />
          </>
        )}
      </Carousel>
    </div>
  )
}