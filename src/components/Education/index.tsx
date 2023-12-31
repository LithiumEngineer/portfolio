import { Montserrat } from "@next/font/google"
import { useState } from "react"
import { Model } from "./Blender"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import EducationCard from "./EducationCard"
import Cards from "./Cards"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Education = () => {
  const [cardIndex, setCardIndex] = useState(0)

  return (
    <div className="flex flex-col h-fit">
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Education
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>
      <div className="flex-grow flex flex-row-reverse flex-wrap w-full h-fit">
        <div className="flex-1 min-w-[400px] overflow-hidden flex items-center justify-around mr-5 pb-5">
          <div className="min-h-[300px] flex-1 h-4/5">
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
        <div className="mx-10 flex-1 min-w-[400px] h-fit">
          <EducationCard />
        </div>
      </div>
    </div>
  )
}

export default Education
