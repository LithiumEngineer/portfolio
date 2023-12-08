import Courses from "./Courses"
import { useState } from "react"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { Inter, Orbitron } from "@next/font/google"

const inter700 = Inter({
  subsets: ["latin"],
  weight: ["700"],
})

const orbitron400 = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
})

const Cards = ({ cardIndex, onForward, onPrevious }) => {
  const [totalClicks, setTotalClicks] = useState(0)
  const [inAnimation, setInAnimation] = useState(false)
  const cards = [
    <div>
      <Courses
        courses={[
          "MATH 135 - Algebra",
          "MATH 137 - Calculus 1",
          "CS 145 - Designing functional programs (Advanced Level)",
          "ECON 101 - Introduction to microeconmics",
          "COMMST 223 - Public speaking",
        ]}
        term="1A"
      />

      <Courses
        className="mt-5"
        courses={[
          "MATH 136 - Linear Algebra 1",
          "MATH 138 - Calculus 2",
          "CS 146 - Elementary algorithm design and data abstraction (Advanced Level)",
          "TBD",
          "TBD",
        ]}
        term="1B"
      />
    </div>,
  ]
  return (
    <div className="relative h-[710px] w-[430px]">
      <div
        onAnimationStart={() => setInAnimation(true)}
        onAnimationEnd={() => setInAnimation(false)}
        className={`absolute flex flex-col h-[680px] w-[400px] rounded-md border-[5px] ${
          cardIndex % 2 == 0
            ? totalClicks == 0
              ? "bg-[#eaeaea] border-black z-20"
              : "bg-[#eaeaea] border-black z-20 top-[30px] left-[30px] show-card"
            : "bg-[#5E5E5E] border-[#5E5E5E] z-10 hide-card"
        } duration-1000`}
      >
        {cardIndex % 2 == 0 && (
          <>
            <div
              className={`text-3xl text-center pt-10 pb-5 ${orbitron400.className}`}
            >
              Courses
            </div>
            {cards[cardIndex % cards.length]}
            <div className="absolute bottom-5 flex justify-between px-5 w-full h-fit">
              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 0) onPrevious()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                {cardIndex >= 1 && (
                  <div
                    className={`flex items-center text-sm ${inter700.className} hover:bg-[#d8d8d8] hover:cursor-pointer hover:scale-105 py-2 px-3 rounded-lg duration-300`}
                  >
                    <GrLinkPrevious className="mr-2 w-5 h-5" />
                    PREVIOUS
                  </div>
                )}
              </div>

              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 0) onForward()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                {cardIndex < cards.length - 1 && (
                  <div
                    className={`flex items-center text-sm ${inter700.className} hover:bg-[#d8d8d8] hover:cursor-pointer hover:scale-105 py-2 px-3 rounded-lg duration-300`}
                  >
                    NEXT
                    <GrLinkNext className="ml-2 w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div
        onAnimationStart={() => setInAnimation(true)}
        onAnimationEnd={() => setInAnimation(false)}
        className={`absolute flex flex-col h-[680px] w-[400px] rounded-md z-10 border-[5px] ${
          cardIndex % 2 == 0
            ? totalClicks == 0
              ? "bg-[#5E5E5E] border-[#5E5E5E] z-10 top-[30px] left-[30px]"
              : "bg-[#5E5E5E] border-[#5E5E5E] z-10 hide-card"
            : "bg-[#eaeaea] border-black z-20 top-[30px] left-[30px] show-card"
        } duration-1000`}
      >
        {cardIndex % 2 == 1 && (
          <>
            <div
              className={`text-5xl text-center py-10 ${orbitron400.className}`}
            >
              Courses
            </div>
            {cards[cardIndex % cards.length]}
            <div className="absolute bottom-5 flex justify-between px-5 w-full h-fit">
              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 1) onPrevious()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                {cardIndex >= 1 && (
                  <div
                    className={`flex items-center text-sm ${inter700.className} hover:bg-[#d8d8d8] hover:cursor-pointer hover:scale-105 py-2 px-3 rounded-lg duration-300`}
                  >
                    <GrLinkPrevious className="mr-2 w-5 h-5" />
                    PREVIOUS
                  </div>
                )}
              </div>

              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 1) onForward()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                {cardIndex < cards.length - 1 && (
                  <div
                    className={`flex items-center text-sm ${inter700.className} hover:bg-[#d8d8d8] hover:cursor-pointer hover:scale-105 py-2 px-3 rounded-lg duration-300`}
                  >
                    NEXT
                    <GrLinkNext className="ml-2 w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        @keyframes hideCard {
          50% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(30px) translateX(30px);
          }
        }

        .hide-card {
          animation: hideCard 600ms ease-in-out;
          animation-fill-mode: forwards;
        }

        @keyframes showCard {
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(-30px) translateX(-30px);
          }
        }

        .show-card {
          animation: showCard 600ms ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}

export default Cards
