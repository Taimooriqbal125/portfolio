export const projects = [
  {
    id: 1,
    title: "Skin Firts",
    description: "Expert care for healthy glowing skin",
    image: "/images/heathapp.png",
    tags: ["Expo", "Firebase", "Push Notification"],
    github: "https://github.com/Taimooriqbal125/healthapp",
    live: "https://project1.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Artisan Marketplace",
    description: "A convenient marketplace for discovering local services",
    image: "/images/marketplaceapp.jpeg",
    tags: ["React Native", "FastAPI", "Redis","Search by Location"],
    github: "https://github.com/Taimooriqbal125/local_marketplace_frontend",
    live: "https://project2.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "LMS App",
    description: "Simplifying learning, courses, and academic management",
    image: "/images/lmsapp.jpeg",
    tags: ["Expo", "Node JS", "Push Notification", "Multi Role"],
    github: "https://github.com/Taimooriqbal125/lms_expo-frontend",
    live: "https://project3.vercel.app",
    featured: false,
  },
   {
    id: 4,
    title: "Qible App",
    description: "All-in-one Islamic companion for daily worship",
    image: "/images/prayerapp.jpeg",
    tags: ["React Native", "MMKV", "GPS"],
    github: "https://github.com/Taimooriqbal125/prayer_app",
    live: "https://project3.vercel.app",
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
