"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"

export function IndustrialFAQ() {
  const faqs = [
    {
      q: "Can you help with design or choosing materials?",
      a: "Absolutely. We provide expert consultations to help you select the best materials—whether it's classic wood or low-maintenance composite—and design a layout that fits your home's architecture and your budget."
    },
    {
      q: "Do I need to purchase the materials myself?",
      a: "No, we handle the entire process. We work with trusted local suppliers to source high-quality materials and manage all deliveries directly to your property, so you don't have to worry about the logistics."
    },
    {
      q: "How does the process of working with you start?",
      a: "It begins with a free on-site consultation where we measure your space and discuss your vision. Within 24 hours, you'll receive a detailed, transparent estimate with a clear breakdown of costs and timelines."
    },
    {
      q: "Do you clean up construction debris?",
      a: "Yes, complete site cleanup is included in every project. We ensure all old materials, off-cuts, and debris are hauled away, leaving your new outdoor space spotless and ready for you to enjoy immediately."
    },
    {
      q: "What materials do you recommend for high-traffic areas?",
      a: "For high-traffic industrial or commercial zones, we recommend composite decking or pressure-treated hardwoods. These materials offer superior durability, slip resistance, and require minimal maintenance compared to traditional softwoods."
    }
  ]

  return (
    <Accordion type="single" collapsible defaultValue="item-2" className="w-full grid gap-4">
      {faqs.map((faq, i) => (
        <AccordionItem 
          key={i} 
          value={`item-${i}`} 
          className="border border-zinc-800 bg-zinc-900/50 px-6 md:px-8 data-[state=open]:border-amber-600 data-[state=open]:bg-zinc-800/80 transition-all duration-300 group hover:border-zinc-700"
        >
          <AccordionTrigger className="text-lg md:text-xl font-bold text-white py-6 md:py-8 hover:no-underline hover:text-amber-600 transition-colors uppercase text-left [&>svg]:hidden">
            <span className="flex-1 pr-6">{faq.q}</span>
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center border-2 border-zinc-700 rounded-sm group-data-[state=open]:border-amber-600 group-data-[state=open]:bg-amber-600 group-hover:border-amber-600 transition-all">
                <Plus className="h-4 w-4 absolute transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                <Minus className="h-4 w-4 absolute transition-transform duration-300 opacity-0 group-data-[state=open]:opacity-100 text-white" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed pb-8 pr-4 md:pr-12">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

