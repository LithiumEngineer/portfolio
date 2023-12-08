import { Montserrat } from "@next/font/google"
import { useState } from "react"

import EducationCard from "./EducationCard"

import Cards from "./Cards"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Education = () => {
  const [cardIndex, setCardIndex] = useState(0)

  return (
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
      <div className="flex justify-around w-full h-fit">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-center w-[550px] h-fit px-[25px] py-[25px] bg-[#122445] rounded-md">
            <EducationCard />
          </div>
        </div>
        <div className="flex ml-10">
          <Cards
            onForward={() => setCardIndex(cardIndex + 1)}
            onPrevious={() => setCardIndex(cardIndex - 1)}
            cardIndex={cardIndex}
          />
        </div>
      </div>
    </div>
  )
}
export default Education
