export default function ProjectPage({ params }) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Detail Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Project slug: {params.slug}
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-4">
            This page will display detailed information about a specific project.
          </p>
        </div>
      </div>
    </section>
  )
}
