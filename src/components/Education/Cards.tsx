import Courses from "./Courses"
import { useState } from "react"
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import { Inter, Orbitron } from "@next/font/google"

const inter700 = Inter({
  subsets: ["latin"],
  weight: ["700"],
})

const orbitron400 = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
})

interface CardsProps {
  cardIndex: number
  onForward: () => void
  onPrevious: () => void
}

const Cards: React.FC<CardsProps> = ({ cardIndex, onForward, onPrevious }) => {
  const [totalClicks, setTotalClicks] = useState(0)
  const [inAnimation, setInAnimation] = useState(false)
  const cards = [
    // eslint-disable-next-line react/jsx-key
    <div>
      <Courses
        courses={[
          <>
            <p className="inline">MATH 145 - Algebra (Advanced Level) : </p>{" "}
            <p className="inline text-[#90ff42]">94%</p>
          </>,
          <>
            <p className="inline">MATH 147 - Calculus 1 (Advanced Level) : </p>{" "}
            <p className="inline text-[#90ff42]">94%</p>
          </>,
          <>
            <p className="inline">
              CS 145 - Designing functional programs (Advanced Level) :{" "}
            </p>{" "}
            <p className="inline text-[#90ff42]">92%</p>
          </>,
          <>
            <p className="inline">
              ECON 101 - Introduction to microeconomics :{" "}
            </p>{" "}
            <p className="inline text-[#90ff42]">94%</p>
          </>,
          <>
            <p className="inline">COMMST 223 - Public speaking : </p>{" "}
            <p className="inline text-[#90ff42]">89%</p>
          </>,
        ]}
        term="1A (Fall 2023)"
      />
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div>
      <Courses
        courses={[
          <>
            <p className="inline">
              MATH 146 - Linear algebra 1 (Advanced Level) :{" "}
            </p>{" "}
            <p className="inline text-[#90ff42]">In Progress</p>
          </>,
          <>
            <p className="inline">MATH 148 - Calculus 2 (Advanced Level) : </p>{" "}
            <p className="inline text-[#90ff42]">In Progress</p>
          </>,
          <>
            <p className="inline">
              CS 145 - Algorithm design and data abstraction (Advanced Level) :{" "}
            </p>{" "}
            <p className="inline text-[#90ff42]">In Progress</p>
          </>,
          <>
            <p className="inline">
              ECON 102 - Introduction to macroeconmics :{" "}
            </p>{" "}
            <p className="inline text-[#90ff42]">In Progress</p>
          </>,
          <>
            <p className="inline">ENGL 108D - Digital Lives : </p>{" "}
            <p className="inline text-[#90ff42]">In Progress</p>
          </>,
        ]}
        term="2A (Winter 2024)"
      />
    </div>,
  ]
  return (
    <div className="relative h-full w-[35vw] mx-auto text-[#cdd3f7]">
      <div
        onAnimationStart={() => setInAnimation(true)}
        onAnimationEnd={() => setInAnimation(false)}
        className={`absolute flex flex-col justify-between h-full w-[33vw] rounded-md border-[0px] ${
          cardIndex % 2 == 0
            ? totalClicks == 0
              ? "bg-[#162c54] border-black z-20"
              : "bg-[#162c54] border-black z-20 top-[30px] left-[30px] show-card"
            : "bg-[#5E5E5E] border-[#5E5E5E] z-10 hide-card"
        } duration-1000`}
      >
        {cardIndex % 2 == 0 && (
          <>
            <div
              className={`text-3xl text-center pt-2 ${orbitron400.className}`}
            >
              Courses
            </div>
            {cards[cardIndex % cards.length]}
            <div className="flex justify-between py-3 items-center">
              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 0) onPrevious()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                <div
                  className={`flex items-center text-sm ${inter700.className} hover:bg-[#091428] hover:cursor-pointer hover:scale-105 px-3 mx-5 rounded-lg duration-300`}
                >
                  {cardIndex >= 1 && (
                    <>
                      <FaArrowLeft className="mr-2 w-5 h-5" color="white" />
                      <p className="py-2">PREVIOUS</p>
                    </>
                  )}
                </div>
              </div>

              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 0) onForward()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                <div
                  className={`flex items-center text-sm ${inter700.className} hover:bg-[#091428] hover:cursor-pointer hover:scale-105 px-3 mx-5 rounded-lg duration-300`}
                >
                  {cardIndex < cards.length - 1 && (
                    <>
                      <p className="py-2">NEXT</p>
                      <FaArrowRight className="ml-2 w-5 h-5" color="white" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        onAnimationStart={() => setInAnimation(true)}
        onAnimationEnd={() => setInAnimation(false)}
        className={`absolute flex flex-col justify-between h-full w-[33vw] rounded-md z-10 border-[0px] ${
          cardIndex % 2 == 0
            ? totalClicks == 0
              ? "bg-[#5E5E5E] border-[#5E5E5E] z-10 top-[30px] left-[30px]"
              : "bg-[#5E5E5E] border-[#5E5E5E] z-10 hide-card"
            : "bg-[#162c54] border-black z-20 top-[30px] left-[30px] show-card"
        } duration-1000`}
      >
        {cardIndex % 2 == 1 && (
          <>
            <div
              className={`text-3xl text-center pt-2 ${orbitron400.className}`}
            >
              Courses
            </div>
            {cards[cardIndex % cards.length]}
            <div className="flex justify-between py-3 items-center">
              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 1) onPrevious()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                <div
                  className={`flex items-center text-sm ${inter700.className} hover:bg-[#091428] hover:cursor-pointer hover:scale-105 px-3 mx-5 rounded-lg duration-300`}
                >
                  {cardIndex >= 1 && (
                    <>
                      <FaArrowLeft className="mr-2 w-5 h-5" color="white" />
                      <p className="py-2">PREVIOUS</p>
                    </>
                  )}
                </div>
              </div>

              <div
                onClick={() => {
                  if (!inAnimation) {
                    if (cardIndex % 2 == 1) onForward()
                    setTotalClicks(totalClicks + 1)
                  }
                }}
              >
                <div
                  className={`flex items-center text-sm ${inter700.className} hover:bg-[#091428] hover:cursor-pointer hover:scale-105 px-3 mx-5 rounded-lg duration-300`}
                >
                  {cardIndex < cards.length - 1 && (
                    <>
                      <p className="py-2">NEXT</p>
                      <FaArrowRight className="ml-2 w-5 h-5" color="white" />
                    </>
                  )}
                </div>
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
