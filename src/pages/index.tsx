import About from "@/components/About"
import Contact from "@/components/Contact"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Introduction from "@/components/Introduction"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import { RefObject, useRef } from "react"

export default function Home() {
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)

  const scroll = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      const pos = ref.current.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: pos, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#0b1b2d]">
      <Navbar
        onClick={scroll}
        aboutRef={aboutRef}
        educationRef={educationRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
      />
      <Introduction />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      {/* <div>
        <Contact />
      </div> */}
      <Footer />
    </div>
  )
}
