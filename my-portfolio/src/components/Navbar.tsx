import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  // 🔥 refs for underline
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // ✅ Scroll detection (fixed logic)
  useEffect(() => {
    const sections = ["home", "skills", "about", "experience", "projects"];

    const handleScroll = () => {
      let current = "home";
      let closest = Number.POSITIVE_INFINITY;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < closest) {
            closest = distance;
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Move underline
  useEffect(() => {
    const el = linkRefs.current[active];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  // ✅ Smooth scroll click
  const handleScrollClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-900">
          My Portfolio
        </h1>

        {/* 🔥 Navbar links */}
        <div className="relative flex gap-6">

          <a
            ref={(el) => { linkRefs.current["home"] = el; }}
            href="#home"
            onClick={handleScrollClick("#home")}
            className={`transition ${
              active === "home"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Home
          </a>

          <a
            ref={(el) => { linkRefs.current["skills"] = el; }}
            href="#skills"
            onClick={handleScrollClick("#skills")}
            className={`transition ${
              active === "skills"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Skills
          </a>

          <a
            ref={(el) => { linkRefs.current["about"] = el; }}
            href="#about"
            onClick={handleScrollClick("#about")}
            className={`transition ${
              active === "about"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            About
          </a>

          <a
            ref={(el) => { linkRefs.current["experience"] = el; }}
            href="#experience"
            onClick={handleScrollClick("#experience")}
            className={`transition ${
              active === "experience"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Experience
          </a>

          <a
            ref={(el) => { linkRefs.current["projects"] = el; }}
            href="#projects"
            onClick={handleScrollClick("#projects")}
            className={`transition ${
              active === "projects"
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Projects
          </a>

          {/* 🔥 Sliding underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;