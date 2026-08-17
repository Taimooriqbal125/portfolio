import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Frontend Developer | Your Name",
  description:
    "Portfolio website showcasing my work as a frontend developer",
  keywords: ["frontend", "developer", "portfolio", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Frontend Developer | Your Name",
    description:
      "Portfolio website showcasing my work as a frontend developer",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050208] text-[#f8fafc]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
