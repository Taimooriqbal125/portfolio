export const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of this amazing project and what technologies were used",
    image: "/images/projects/project1.jpg",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description: "Another fantastic project showcasing different skills and technologies",
    image: "/images/projects/project2.jpg",
    tags: ["JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    description: "A responsive web application with modern UI/UX design principles",
    image: "/images/projects/project3.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/project3",
    live: "https://project3.vercel.app",
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
