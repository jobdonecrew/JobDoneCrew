"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function IndustrialTestimonials() {
  const reviews = [
    {
      text: "We needed some serious deck repair on our backyard patio. They replaced the rotten boards and strengthened the structure. Feels solid as a rock now.",
      author: "Ethan Walker",
      role: "Homeowner",
      rating: 5,
      avatar: "/avatars/James-R.webp",
    },
    {
      text: "Absolutely love our new composite deck! The team was efficient and the craftsmanship is top-notch. Best deck builders in the area.",
      author: "Sarah L.",
      role: "Local Resident",
      rating: 5,
      avatar: "/avatars/Sarah-L.webp",
    },
    {
      text: "Called them for a quick fence repair after a storm knocked down a section. They came out the next day and fixed it perfectly.",
      author: "Mike T.",
      role: "Homeowner",
      rating: 5,
      avatar: "/avatars/Mike-T.webp",
    },
    {
      text: "They did a great job with our porch railing replacement. The old ones were wobbly and unsafe. The new aluminum railings look modern and are very sturdy.",
      author: "Robert K.",
      role: "Local Resident",
      rating: 5,
      avatar: "/avatars/Robert-K.webp",
    },
    {
      text: "Installed a privacy fence for our new house. The quote was fair, and the crew was polite and cleaned up everything afterward. Highly recommend.",
      author: "Elena G.",
      role: "Homeowner",
      rating: 5,
      avatar: "/avatars/Elena-G.webp",
    },
    {
      text: "It's hard to find honest contractors. Job Done Crew gave me a transparent estimate for my deck resurfacing and stuck to it. No surprises.",
      author: "David B.",
      role: "Homeowner",
      rating: 5,
      avatar: "/avatars/David-B.webp",
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-full max-w-[1600px] mx-auto px-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
              <div className="p-1 h-full">
                <Card className="h-full bg-zinc-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-600 group-hover:bg-amber-600 transition-colors" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                  <CardContent className="flex flex-col justify-between p-6 h-full">
                    <div>
                        <div className="flex gap-0.5 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                            ))}
                        </div>
                        
                        <Quote className="h-8 w-8 text-zinc-600 mb-3 opacity-50 group-hover:text-amber-600 group-hover:opacity-100 transition-all duration-300" />
                        
                        <p className="text-sm text-zinc-300 font-medium italic mb-6 leading-relaxed relative z-10">
                        "{review.text}"
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-700">
                        <div className="h-10 w-10 rounded-full bg-zinc-700 overflow-hidden border-2 border-amber-600/30 group-hover:border-amber-600 transition-colors shrink-0 relative">
                            <Image
                                src={review.avatar}
                                alt={review.author}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="min-w-0">
                            <div className="text-white font-black text-sm uppercase tracking-wide group-hover:text-amber-600 transition-colors truncate">{review.author}</div>
                            <div className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider truncate">{review.role}</div>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex" />
        <CarouselNext className="hidden xl:flex" />
      </Carousel>
    </div>
  )
}

