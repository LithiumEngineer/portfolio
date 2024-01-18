import { Montserrat } from "@next/font/google"
import Project from "./Project"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Projects = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Projects
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>
      <div className="flex flex-wrap w-full h-fit mx-10">
        <Project
          title="Pandemic Simulation"
          description="Models the spread of a pandemic based on airport connections based on several statistical and probability models."
          languages={["#Java", "#Java Swing"]}
          githubURL="https://github.com/LithiumEngineer/Pandemic-Simulation-Software"
          imageURL="./virus.png"
        />
      </div>
    </div>
  )
}
export default Projects
