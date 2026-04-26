function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-100 text-gray-900 border-t border-gray-200">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Project Card */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Playwright Automation Framework
            </h3>

            <p className="text-gray-600 mb-4">
              Built an end-to-end automation framework for web applications using 
              Playwright, reducing manual testing effort and improving reliability.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Playwright, TypeScript, CI/CD
            </p>

            <a 
              href="https://github.com/dhana200/Playwright" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Project Card */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              ML House Price Prediction
            </h3>

            <p className="text-gray-600 mb-4">
              Developed a regression model to predict housing prices using real-world 
              datasets and machine learning techniques.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Pandas, Scikit-learn
            </p>

            <a 
              href="https://www.kaggle.com/code/dhanaben/student-scores-prediction" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Project Card */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              AI Ticket Classifier
            </h3>

            <p className="text-gray-600 mb-4">
              A simple AI-powered system that classifies and summarizes support tickets using LLMs.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, OpenAI-API
            </p>

            <a 
              href="https://github.com/dhana200/ai-ticket-classifier" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Project Card */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Email Automtion
            </h3>

            <p className="text-gray-600 mb-4">
              A simple python script that automates email sending based on specific triggers, improving communication efficiency.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, SMTP protocol
            </p>

            <a 
              href="https://github.com/dhana200/PythonPlay/tree/batch/mailAutomation" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

            {/* Project Card */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Tic-Tac-Toe Game
            </h3>

            <p className="text-gray-600 mb-4">
              This is a simple console-based Tic-Tac-Toe game implemented in Python. The game allows two players to take turns choosing positions on a 3x3 grid, using 'X' and 'O' as their markers. The program validates user input, checks for winning conditions after each move, and announces the winner or a draw when the game ends.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python
            </p>

            <a 
              href="https://github.com/dhana200/PythonPlay/tree/batch/TicTacToe" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects