import { Montserrat } from "@next/font/google"
import EducationCard from "../Education/EducationCard"
import { LANGUAGES, LANGUAGES_YEARS } from "@/constants"
import BulletPoint from "../BulletPoint"
import NowPlaying from "./NowPlaying"
import Media from "../Introduction/Media"
import Language from "./Language"
import { RxOpenInNewWindow } from "react-icons/rx"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const About = () => {
  return (
    <div className="w-screen h-fit">
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          About me
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>

      <div className="flex flex-grow flex-wrap w-full px-10 text-[#cdd3f7] text-md font-mono">
        <div className="flex flex-col min-w-[300px] mx-auto">
          <img
            src="./myself.png"
            alt="image of myself"
            className="rounded-full w-[300px] h-[300px]"
          ></img>
          <div className="flex mx-auto mt-5">
            <Media />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between h-fit pl-10 pt-5 text-sm min-w-[400px] max-w-[700px] mx-auto">
          <div>
            Hi! My name is Kevin and I&apos;m currently a{" "}
            <p className="inline text-[#90ff42]">
              first year Computer Science Co-op student
            </p>{" "}
            at the{" "}
            <p className="inline text-[#90ff42]">University of Waterloo</p>.
            <div className="mt-4">
              <p className="inline">
                I love to build software that make our day-to-day lives easier
                or that are just cool. So far, I have been working to improve my
                skills in web development, but in the future I would love to
                enter the field of AI someday. I also really love algorithms and
                problem-solving through competitive programming on{" "}
              </p>
              
              <a
                className="text-[#90ff42] hover:text-white"
                href="https://codeforces.com/profile/haochenkang"
                target="_blank"
              >
                <p className="inline">Codeforces</p>
                <RxOpenInNewWindow className="inline" />
              </a>
              and{" "}
              <a
                className="text-[#90ff42] hover:text-white"
                href="https://leetcode.com/haochenkang/"
                target="_blank"
              >
                <p className="inline">Leetcode</p>
                <RxOpenInNewWindow className="inline" />
              </a>
              .
            </div>
            <p className="mt-4">
              Outside of coding, I love playing badminton or binge watching
              Youtube Shorts. I also love listening to pop music! Check out what
              I&apos;m currently listening to:
            </p>
            <div className="mt-5 w-full mx-auto">
              <NowPlaying playing />
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#cdd3f7] text-md ml-20 mt-20 font-mono">
        Check out what I have been working with:{" "}
      </div>

      <div className="text-[#cdd3f7] mt-5 mx-10">
        <div className={`text-2xl w-fit mx-auto ${montserrat600.className}`}>
          Languages
        </div>
        <div className="mt-2 w-fit flex flex-wrap mx-auto">
          <Language imageURL="/cpp.png" text="C++" />
          <Language imageURL="/java.png" text="Java" />
          <Language imageURL="/python.png" text="Python" />
          <Language imageURL="/html.png" text="HTML5" />
          <Language imageURL="/css.png" text="CSS3" />
          <Language imageURL="/js.png" text="Javascript" />
        </div>
      </div>

      <div className="text-[#cdd3f7] mt-10 mx-10">
        <div className={`text-2xl w-fit mx-auto ${montserrat600.className}`}>
          Frameworks
        </div>
        <div className="mt-2 w-fit flex flex-wrap mx-auto">
          <Language imageURL="/react.png" text="React" />
          <Language imageURL="/next.png" text="Next" />
          <Language imageURL="/tailwind.png" text="Tailwind" />
          <Language imageURL="/three.png" text="Three.js" />
        </div>
      </div>

      <div className="text-[#cdd3f7] mt-10 mx-10">
        <div className={`text-2xl w-fit mx-auto ${montserrat600.className}`}>
          Tools
        </div>
        <div className="mt-2 w-fit flex flex-wrap mx-auto">
          <Language imageURL="/blender.png" text="Blender" />
          <Language imageURL="/jira.png" text="Jira" />
          <Language imageURL="/git.png" text="Git" />
          <Language imageURL="/polygon.png" text="Blockchain" />
          <Language imageURL="/figma.png" text="Figma" />
          <Language imageURL="/aws.png" text="AWS" />
        </div>
      </div>
    </div>
  )
}
export default About
