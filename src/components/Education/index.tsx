import { Montserrat } from "next/font/google"
import { useState } from "react"
import { Model } from "./Blender"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import EducationCard from "./EducationCard"
import Cards from "./Cards"
import Header from "../Header"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Education = () => {
  const [cardIndex, setCardIndex] = useState(0)

  return (
    <div className="flex flex-col h-fit">
      <Header title="Education" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-4 sm:px-10">
        <div className="h-fit">
          <EducationCard />
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-[500px] w-full">
            <Canvas
              camera={{ fov: 100, position: [8, 0, 0] }}
              className="responsive-canvas"
            >
              <ambientLight intensity={5} />
              <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                autoRotate={true}
                maxPolarAngle={Math.PI / 2}
              />
              <Model />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
