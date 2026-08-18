import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata = {
  title: "Temoor Iqbal | Full-Stack Developer",
  description:
    "Portfolio website showcasing my work as a full-stack developer",
  keywords: ["frontend", "developer", "portfolio", "react", "next.js", "react native"],
  authors: [{ name: "Temoor Iqbal" }],
  openGraph: {
    title: "Temoor Iqbal | Full-Stack Developer",
    description:
      "Portfolio website showcasing my work as a full-stack developer",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable} ${jetbrains.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col bg-[#050208] text-[#f8fafc] font-[family-name:var(--font-jakarta)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
