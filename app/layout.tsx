import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Funeraria Monteros - Con fe, en cada despedida",
  description:
    "Servicios funerarios con más de 30 años de experiencia. Ofrecemos paz, consuelo y acompañamiento a su familia en momentos difíciles. Disponibles 24/7 en Chalchuapa, Santa Ana Norte.",
  keywords:
    "funeraria, servicios funerarios, Monteros, Chalchuapa, Santa Ana, El Salvador, velatorio, sepelio, cremación",
  authors: [{ name: "Funeraria Monteros" }],
  creator: "Funeraria Monteros",
  publisher: "Funeraria Monteros",
  robots: "index, follow",
  openGraph: {
    title: "Funeraria Monteros - Con fe, en cada despedida",
    description:
      "Servicios funerarios con más de 30 años de experiencia. Paz, consuelo y acompañamiento en momentos difíciles.",
    type: "website",
    locale: "es_ES",
    siteName: "Funeraria Monteros",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funeraria Monteros - Con fe, en cada despedida",
    description:
      "Servicios funerarios con más de 30 años de experiencia. Paz, consuelo y acompañamiento en momentos difíciles.",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
