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
    default: "Deck Contractor | Deck Replacement & Repair Services - Job Done Crew",
    template: "%s | Job Done Crew",
  },
  description:
    "Professional deck contractor specializing in deck replacement, deck repair, and custom deck building. Licensed decking contractor serving Scranton, Pocono Mountains & Monroe County. Expert porch repair services. Get a free quote today!",
  keywords: [
    "deck contractor",
    "deck replacement",
    "deck replacement contractor",
    "deck repair",
    "decking contractor",
    "deck builder tannersville pa",
    "porch repair",
    "deck repair contractor",
    "deck repair services",
    "deck builders Scranton",
    "deck contractor near me",
    "custom decks",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Deck Contractor | Deck Replacement & Repair Services - Job Done Crew",
    description: "Professional deck contractor specializing in deck replacement, deck repair, and porch repair. Licensed decking contractor serving Scranton & Pocono Mountains.",
    url: "https://jobdonecrew.com",
    siteName: "Job Done Crew",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Job Done Crew - Professional Deck Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Contractor | Deck Replacement & Repair Services - Job Done Crew",
    description: "Professional deck contractor specializing in deck replacement, deck repair, and porch repair. Licensed decking contractor serving Scranton & Pocono Mountains.",
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
