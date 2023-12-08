import { Inter } from "@next/font/google"
import { WORDS_ABOUT_ME, WORDS_ABOUT_ME_COLOR } from "@/constants"
import TypewriterEffect from "./Typewriter"
import KnowMore from "./ScrollAnimation"
import { GiAirplane } from "react-icons/gi"
import WaveHand from "./WaveHand"

const inter600 = Inter({
  subsets: ["latin"],
  weight: ["600"],
})

const inter700 = Inter({
  subsets: ["latin"],
  weight: ["700"],
})

const Introduction = () => {
  return (
    <div className="flex flex-col w-screen min-h-[800px] h-screen">
      <div className="flex-1 flex items-center justify-around pt-20">
        <div className="tracking-wide w-[560px] text-left font-mono">
          <div className="text-5xl h-[100px] text-[#DEDEDF]">
            <p className="inline">I&apos;m&nbsp;</p>
            <TypewriterEffect
              words={WORDS_ABOUT_ME}
              colors={WORDS_ABOUT_ME_COLOR}
              cursor
            />
          </div>
          <div className="text-lg mt-2 text-[#cdd3f7]">
            Waterloo CS '28 | Seeking Summer 2024 Internships
          </div>
          <div className="text-xl mt-2 text-[#cdd3f7] text-opacity-80 text-justify">
            Hi, I&apos;m Kevin! I&apos;m a software developer who aspires to use
            technology to build solutions to real-world problems.
          </div>
          <div className="w-fit mx-auto">
            <a href="mailto:haochenkang.business@gmail.com">
              <div className="w-fit h-fit px-5 py-2 mt-10 mx-auto text-[#90ff42] rounded-sm border-2 border-[#90ff42] hover:text-[#5a9e2a] hover:border-[#5a9e2a] hover:cursor-pointer active:scale-95 duration-300 ">
                Hire me
              </div>
            </a>
          </div>
        </div>
        <div className="w-fit h-fit">
          <WaveHand />
        </div>
      </div>
      <div className="mx-auto mb-20">
        <KnowMore />
      </div>
    </div>
  )
}
export default Introduction
