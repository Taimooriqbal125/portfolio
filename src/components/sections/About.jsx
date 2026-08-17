import SectionHeading from "@/components/ui/SectionHeading"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I&apos;m a passionate frontend developer with a love for creating
              beautiful, functional, and user-friendly web applications. With
              expertise in modern JavaScript frameworks and a keen eye for design,
              I bring ideas to life through clean and efficient code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              blog posts and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                20+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Happy Clients
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Open Source Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
