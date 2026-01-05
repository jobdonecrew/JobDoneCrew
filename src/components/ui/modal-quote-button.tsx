"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function ModalQuoteButton() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
    // Даем небольшую задержку, чтобы модалка успела закрыться и URL смениться
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <Button 
        onClick={handleClick}
        className="w-full md:w-2/3 bg-amber-600 hover:bg-amber-700 text-white font-black py-7 text-lg uppercase tracking-wider"
    >
        Get Free Quote
    </Button>
  )
}
