import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jobdonecrew.com"),
  title: {
    default: "Job Done Crew - Premium Deck Building & Outdoor Renovations",
    template: "%s | Job Done Crew",
  },
  description:
    "Professional deck construction services in the Poconos and Scranton. Build your dream outdoor space with licensed, insured craftsmen specializing in custom decks, repairs, and fencing.",
  keywords: [
    "deck builders Scranton",
    "deck repair Scranton",
    "fence installation Scranton",
    "porch railing Scranton",
    "Scranton",
    "Pocono Mountains",
    "Monroe County",
    "outdoor renovation",
    "licensed contractor",
  ],
  authors: [{ name: "Job Done Crew" }],
  creator: "Job Done Crew",
  publisher: "Job Done Crew",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Job Done Crew - Premium Deck Building & Outdoor Renovations",
    description: "Your trusted Scranton experts for custom decks, repairs, and fence installations in the Poconos and Scranton.",
    url: "https://jobdonecrew.com",
    siteName: "Job Done Crew",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Job Done Crew Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Done Crew - Premium Deck Building & Outdoor Renovations",
    description: "Your trusted Scranton experts for custom decks, repairs, and fence installations in the Poconos and Scranton.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        {modal}
        <Analytics />
      </body>
    </html>
  )
}
