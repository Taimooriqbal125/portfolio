import ProjectCard from "./ProjectCard"

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#94a3b8] text-lg">
          No projects found matching your criteria.
        </p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
