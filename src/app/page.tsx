import { IndustrialLanding } from "@/components/industrial-landing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deck Contractor Near Me | Deck Replacement & Repair - Job Done Crew",
  description:
    "Top-rated deck contractor serving Scranton & Pocono Mountains. Expert deck replacement, deck repair, porch repair, and custom deck building. Licensed decking contractor with 5+ years experience. Free quotes!",
  keywords:
    "deck contractor, deck replacement, deck replacement contractor, deck repair, decking contractor, deck contractor near me, porch repair, deck repair contractor, deck repair services, deck builder tannersville pa, custom deck builder, composite decking, residential deck contractor, wood deck repair, Scranton deck builders",
  openGraph: {
    title: "Professional Deck Contractor | Deck Replacement & Repair Services",
    description:
      "Expert deck contractor specializing in deck replacement, deck repair, and porch repair. Licensed decking contractor serving Scranton & Pocono Mountains.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Deck Contractor | Deck Replacement & Repair Services",
    description:
      "Expert deck contractor specializing in deck replacement, deck repair, and porch repair. Licensed decking contractor serving Scranton & Pocono Mountains.",
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Job Done Crew",
    image: "https://jobdonecrew.com/logo.svg",
    description:
      "Professional deck contractor offering deck replacement, deck repair, porch repair, and custom deck building services in Scranton, Pocono Mountains, and Monroe County PA.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stroudsburg",
      addressRegion: "PA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9868,
      longitude: -75.1946,
    },
    url: "https://jobdonecrew.com",
    telephone: "+19174050440",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      "Scranton",
      "Stroudsburg",
      "East Stroudsburg",
      "Mount Pocono",
      "Tannersville",
      "Tobyhanna",
      "Pocono Lake",
      "Albrightsville",
      "Blakeslee",
      "Brodheadsville",
      "Saylorsburg",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustrialLanding />
    </>
  )
}