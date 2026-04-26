import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Expirence";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      smooth: true,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
     <>
      <Navbar />
      <Hero />      
      <Skills />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <Contact />
    </>
  )
}

export default App