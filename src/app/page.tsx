import { IndustrialLanding } from "@/components/industrial-landing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Job Done Crew - Scranton Deck Builders | Deck Repair & Fence Installation",
  description:
    "Top-rated Scranton deck builders near you. Expert deck repair, installation, porch railing replacement, and fence repair services. Licensed & insured professionals. Get a free quote!",
  keywords:
    "deck builders Scranton, Scranton deck repair, deck installation, porch railing replacement, fence repair Scranton, custom deck builder, composite decking, fence installation, residential deck contractor, wood deck repair",
  openGraph: {
    title: "Job Done Crew - Trusted Scranton Deck & Fence Services",
    description:
      "Your Scranton experts for deck building, repair, and fence installation. Quality craftsmanship guaranteed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Done Crew - Trusted Scranton Deck & Fence Services",
    description:
      "Your Scranton experts for deck building, repair, and fence installation. Quality craftsmanship guaranteed.",
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
      "Top-rated Scranton deck builders near you. Expert deck repair, installation, porch railing replacement, and fence repair services in the Poconos and Scranton.",
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