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
    <div className="w-screen h-fit mt-20">
      <div className="flex-1 flex flex-wrap flex-row-reverse items-center justify-around pt-20">
        <div className="w-fit h-fit mx-10">
          <WaveHand />
        </div>
        <div className="tracking-wide w-[560px] text-left font-mono mx-10 mt-10">
          <div className="text-3xl sm:text-5xl h-[2em] text-[#DEDEDF]">
            <p className="inline">I&apos;m&nbsp;</p>
            <TypewriterEffect
              words={WORDS_ABOUT_ME}
              colors={WORDS_ABOUT_ME_COLOR}
              cursor
            />
          </div>
          <div className="text-lg mt-5 text-[#cdd3f7]">
            Waterloo CS &apos;28 | Seeking Summer 2024 Internships
          </div>
          <div className="text-md sm:text-xl mt-2 text-[#cdd3f7] text-opacity-80">
            Hi, I&apos;m Kevin! I&apos;m a software developer who loves to use
            technology to build cool projects!
          </div>

          <div className="w-fit mx-auto">
            <a href="mailto:haochenkang.business@gmail.com">
              <div className="w-fit h-fit px-5 py-2 mt-10 mx-auto text-[#90ff42] rounded-sm border-2 border-[#90ff42] hover:text-[#5a9e2a] hover:border-[#5a9e2a] hover:cursor-pointer active:scale-95 duration-300 ">
                Hire me
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20">
        <KnowMore />
      </div>
    </div>
  )
}
export default Introduction
