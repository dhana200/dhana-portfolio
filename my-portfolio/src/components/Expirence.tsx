function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white border-t border-gray-200 hover:scale-[1.01] transition duration-300">
      
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My Journey
        </h2>

        <div className="space-y-8">

          {/* Job 3 */}
          <div className="p-6 border border-gray-700 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Software Engineer, Enterprise Application — HD Supply (GTC)
            </h3>
            <p className="text-2xl text-gray-200 mb-3">
              2025 – Present
            </p>

            <ul className="text-xl list-disc ml-5 text-gray-300 space-y-2">
              <li>Managed ~830 automation test cases with an ~85% pass rate, improving reliability by fixing flaky tests.</li>
              <li>Performed end-to-end testing for e-commerce applications, ensuring functional and regression stability.</li>
              <li>Developed and maintained Playwright automation scripts to improve test coverage and reduce manual effort.</li>
              <li>Created and maintained detailed test documentation for better knowledge sharing and maintainability.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="p-6 border border-gray-700 rounded-xl">
            <h3 className="text-2xl font-semibold">
                Engineer,Automation — Aptean India Pvt Ltd
            </h3>
            <p className="text-2xl text-gray-200 mb-3">
              2022 – 2025
            </p>

            <ul className="text-xl list-disc ml-5 text-gray-300 space-y-2">
              <li>Built a Playwright-based automation framework achieving ~80% automation coverage.</li>
              <li>Improved system performance by 40% through analysis, reporting, and optimization strategies.</li>
              <li>Integrated CI/CD pipelines, reducing manual intervention by 80%.</li>
              <li>Conducted internal training sessions, reducing manual testing effort by 50%.</li>
            </ul>
          </div>

          {/* Job 1 */}
          <div className="p-6 border border-gray-700 rounded-xl">
            <h3 className="text-2xl font-semibold">
                Associate Engineer,Automation — Aptean India Pvt Ltd
            </h3>
            <p className="text-2xl text-gray-200 mb-3">
              2022 – 2024
            </p>

            <ul className="text-xl list-disc ml-5 text-gray-300 space-y-2">
              <li>Redesigned testing workflows, improving efficiency by 80% and reducing manual effort by 70%.</li>
              <li>Developed automation scripts using Page Scripting techniques.</li>
              <li>Implemented performance testing strategies to enhance application stability.</li>
              <li>Collaborated with cross-functional teams to improve automation reliability and effectiveness.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience