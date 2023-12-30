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
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center mx-auto w-full py-10">
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full"></div>
        <div
          className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Education
        </div>
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full"></div>
      </div>
      <div className="flex-grow flex w-full">
        <EducationCard />
        <div className="flex-1 mx-4 my-4">
          <div className="h-[500px] text-red-100">
            <div className="h-[30vw] max-h-[30vw] w-full mx-auto mt-[50%]">
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
            {/* <div className="h-[50%]">
              <Cards
                onForward={() => setCardIndex(cardIndex + 1)}
                onPrevious={() => setCardIndex(cardIndex - 1)}
                cardIndex={cardIndex}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
