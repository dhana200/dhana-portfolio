function About() {
  return (
  <section id="about" className="px-6 py-16 bg-blue-100 text-gray-900 border-t border-gray-200">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h2 className="px-10 text-3xl md:text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-black-600 leading-relaxed text-xl md:text-xl font-semibold">
          
          <p>
            I am an Automation Engineer with over 3 years of experience in building 
            and optimizing scalable automation solutions for enterprise applications, 
            especially Microsoft Business Central.
          </p>

          <p>
            I specialize in Playwright, Python, JavaScript/TypeScript, Postman API, 
            and MySQL, enabling me to deliver reliable and efficient testing frameworks. 
            Currently, I handle end-to-end testing for e-commerce applications, ensuring 
            functional and regression stability.
          </p>

          <p>
            I have built and maintained large-scale automation suites and am actively 
            transitioning into Machine Learning by working on real-world projects in 
            data analysis and model building.
          </p>

        </div>

      </div>
    </section>
  )
}

export default About