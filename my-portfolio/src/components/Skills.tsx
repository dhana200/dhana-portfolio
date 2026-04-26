function Skills() {
  return (
    <section id="skills" className="px-6 py-16 bg-blue-50 text-gray-900 border-t border-gray-200">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Skill */}
          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Playwright
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Python
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            JavaScript
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            TypeScript
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Postman API
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            MySQL
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Git
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            CI/CD
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Machine Learning
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            Numpy
          </div>

          <div className="p-4 border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 hover:bg-blue-50">
            pandas
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills;