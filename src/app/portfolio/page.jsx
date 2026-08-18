import SectionHeading from "@/components/ui/SectionHeading"
import ProjectGrid from "@/components/portfolio/ProjectGrid"
import { projects } from "@/data/projects"

export const metadata = {
  title: "Portfolio | Your Name",
  description: "Explore my portfolio of web development projects",
}

export default function PortfolioPage() {
  return (
    <section className="py-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Shipped & Scaled."
          subtitle="A collection of my recent work and projects"
        />

        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}
