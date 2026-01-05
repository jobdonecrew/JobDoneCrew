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
    default: "JobDoneCrew - Premium Deck Building & Outdoor Renovations",
    template: "%s | JobDoneCrew",
  },
  description:
    "Professional deck construction services in the Poconos and Scranton. Build your dream outdoor space with licensed, insured craftsmen specializing in custom decks, repairs, and fencing.",
  keywords: [
    "deck builders",
    "deck repair",
    "fence installation",
    "porch railing",
    "Scranton",
    "Pocono Mountains",
    "Monroe County",
    "outdoor renovation",
    "licensed contractor",
  ],
  authors: [{ name: "JobDoneCrew" }],
  creator: "JobDoneCrew",
  publisher: "JobDoneCrew",
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
    title: "JobDoneCrew - Premium Deck Building & Outdoor Renovations",
    description: "Your trusted local experts for custom decks, repairs, and fence installations in the Poconos and Scranton.",
    url: "https://jobdonecrew.com",
    siteName: "JobDoneCrew",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/hero.png",
        width: 1200,
        height: 630,
        alt: "JobDoneCrew Industrial Deck Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JobDoneCrew - Premium Deck Building",
    description: "Expert deck building and repair services in the Poconos.",
    images: ["/img/hero.png"],
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
