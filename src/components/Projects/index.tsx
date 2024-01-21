import { Montserrat } from "@next/font/google"
import Project from "./Project"
import Header from "../Header"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Projects = () => {
  return (
    <div className="w-screen h-fit">
      <Header title="Projects" />
      <div className="flex flex-wrap w-fit h-fit mx-auto">
        <Project
          title="Dayly"
          description="A React web application with minimalist design that combines calendar, to-do, and weather forecast into one."
          languages={["#React", "#Node.js", "#Tailwind CSS", "#AWS"]}
          githubURL="https://github.com/LithiumEngineer/dayly"
          imageURL="./calendar.png"
        />
        <Project
          title="Pandemic Simulation"
          description="Models the spread of a pandemic based on airport connections based on several statistical and probability models."
          languages={["#Java", "#Java Swing"]}
          githubURL="https://github.com/LithiumEngineer/Pandemic-Simulation-Software"
          imageURL="./virus.png"
        />
        <Project
          title="Sudoku Solver"
          description="Sudoku solver that solves any sudoku by using four logic cycles and a guessing algorithm with backtracking."
          languages={["#Java"]}
          githubURL="https://github.com/LithiumEngineer/Sudoku-Solver"
          imageURL="./brain.png"
        />
        <Project
          title="A* Path Finding"
          description="A CLI game that lets you input starting location, ending location, walls, and finds the shortest path from start to end using A*."
          languages={["#Java"]}
          githubURL="https://github.com/LithiumEngineer/A-Path-Finding"
          imageURL="./cave.png"
        />
        {/* <Project
          title="Flood Game"
          description="A CLI game that replicates the classic game Flood-It"
          languages={["#Java"]}
          githubURL="https://github.com/LithiumEngineer/Flood-game"
          imageURL="./flood.png"
        /> */}
      </div>
    </div>
  )
}
export default Projects
