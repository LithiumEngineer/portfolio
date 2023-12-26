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
    <>
      <div className="flex flex-col h-[calc(100vh-70px)] min-h-[900px] w-screen">
        <div className="flex items-center mx-auto w-[500px] py-20">
          <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
          <div
            className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
          >
            Education
          </div>
          <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
        </div>
        <div className="flex justify-around w-full h-full flex-grow">
          <div className="flex flex-col items-center flex-1 h-full mx-10 bg-[#162c54] rounded-md">
            <EducationCard />
          </div>
          <div className="flex-grow flex-1">
            <div className="h-[50%]">
              <Canvas camera={{ fov: 100, position: [8, 0, 0] }}>
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
            <div className="h-[50%]">
              <Cards
                onForward={() => setCardIndex(cardIndex + 1)}
                onPrevious={() => setCardIndex(cardIndex - 1)}
                cardIndex={cardIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Education
