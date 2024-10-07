import { Montserrat } from "next/font/google"
import Header from "../Header"
import Project from "./Project"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Projects = () => {
  return (
    <div className="w-screen h-fit">
      <Header title="Projects" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 justify-items-center w-screen px-4">
        <Project
          title="MyReceiptify"
          description="a full-stack finance website using MERN that scans receipts and automatically generate spending reports."
          languages={[
            "#React",
            "#Express.js",
            "#Node.js",
            "#MongoDB",
            "#OpenCV",
            "#Tesseract",
          ]}
          githubURL="https://github.com/LithiumEngineer/MyReceiptify"
          imageURL="./dollar.png"
        />
        <Project
          title="Posture Detector"
          description="A Python app based on Tensorflow's deep learning model to accurately assess body posture and send real-time desktop alerts."
          languages={["#Python", "#OpenCV", "#TensorFlow"]}
          githubURL="https://github.com/LithiumEngineer/Posture-Detector"
          imageURL="./chair.png"
        />
        <Project
          title="Dayly"
          description="A React web application with minimalist design that combines calendar, to-do, and weather forecast into one."
          languages={["#React", "#Node.js", "#Tailwind CSS", "#AWS"]}
          githubURL="https://github.com/LithiumEngineer/dayly"
          imageURL="./calendar.png"
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
      </div>
    </div>
  )
}
export default Projects
