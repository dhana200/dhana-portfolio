import { motion } from "framer-motion";

function Hero() {
  return (
   <section
            id="home"
            className="scroll-mt-24 min-h-[65vh] flex items-center justify-center px-6 pt-24 pb-4 bg-no-repeat bg-cover bg-center relative"
            style={{ backgroundImage: "url('/hero-bg.jpg')"}}>

      {/* Overlay */}
      <div className="bg-gradient-to-b from-black/60 to-black/30"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3,ease: "easeInOut" }}
        className = "relative z-10 text-center w-full" 
      >   

      <div className="text-center w-full">
        
        {/* 👤 Passport Photo */}
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-75 h-75 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover"
        />

        {/* 👋 Name */}
        <h1 className="text-3xl md:text-4xl font-bold font-italic mb-2">
          P Dhanush 👋
        </h1>

        {/* 💼 Role */}
        <p className="text-lg md:text-xl text-gray-900 mb-2">
          Software Engineer, Enterprise Application | Aspiring Machine Learning Engineer
        </p>

        {/* 📝 Summary */}
        <div className="max-w-6xl mx-auto mt-4">
            <p className="text-2xl md:text-2xl text-gray-900 leading-relaxed">
                Automation Engineer with 3+ years of experience building scalable 
                automation frameworks and exploring AI/ML solutions.
            </p>
        </div>

        {/*Links*/}
        <div className="mt-4 text-2xl space-x-4 text-blue-600">
          <a 
            href="https://www.linkedin.com/in/p-dhanush-964465190/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/dhana200" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:underline"
          >Github</a>          
          <a 
            href="mailto:dhanushpoloju@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:underline"
          >
            Gmail
            </a>
        </div>

      </div>
      </motion.div>   
    </section>
  )
}

export default Hero;