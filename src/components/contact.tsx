import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-16 bg-gray-100 text-center">
      
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="mb-6">Feel free to reach out 👇</p>

      <div className="flex justify-center gap-8 text-blue-600 text-3xl">
        
        {/* Email */}
        <a
          href="mailto:dhanushpoloju@gmail.com"
          className="hover:text-blue-800 hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/p-dhanush-964465190/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/dhana200"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 hover:scale-110 transition"
        >
          <FaGithub />
        </a>

        {/* Phone */}
        <a
          href="tel:7358548551"
          className="hover:text-blue-800 hover:scale-110 transition"
        >
          <FaPhone />
        </a>

      </div>

    </section>
  );
}

export default Contact;