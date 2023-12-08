import { Montserrat } from "@next/font/google"
import EducationCard from "../Education/EducationCard"
import { LANGUAGES, LANGUAGES_YEARS } from "@/constants"
import BulletPoint from "../BulletPoint"
import NowPlaying from "./NowPlaying"
import Media from "../Introduction/Media"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const About = () => {
  return (
    <div className="w-screen h-fit">
      <div className="flex items-center mx-auto w-[500px] py-10">
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          About me
        </div>
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
      </div>

      <div className="flex w-full justify-center px-10 text-[#cdd3f7] text-md font-mono">
        <div className="flex flex-col mr-10">
          <img
            src="./myself.png"
            alt="image of myself"
            className="rounded-full w-[300px] h-[300px]"
          ></img>
          <div className="flex mx-auto mt-5">
            <Media />
          </div>
        </div>
        <div className="flex flex-col justify-between h-fit ml-10 max-w-[550px] text-sm">
          <div>
            Hi! My name is Kevin and I'm currently a{" "}
            <p className="inline text-[#90ff42]">
              first year Computer Science Co-op student
            </p>{" "}
            at the{" "}
            <p className="inline text-[#90ff42]">University of Waterloo</p>. I
            am one of the ~10 recipients of the $25,000 René Descartes
            Mathematics National Scholarship offered by the University of
            Waterloo for outstanding academic achievements and extracurricular
            involvement.
            <p className="mt-4">
              I love to build software that make our day-to-day lives easier or
              that are just cool. So far, I have been working to improve my
              skills in web development, but in the future I would love to enter
              the field of AI someday. I also really love algorithms and
              problem-solving through competitive programming.
            </p>
            <p className="mt-4">
              Outside of coding, I love playing badminton or binge watching
              Youtube Shorts. I also love listening to pop music! Check out what
              I'm currently listening to:
            </p>
            <div className="mt-2">
              <NowPlaying playing />
            </div>
          </div>

          <div className="mt-10">
            <div>Some programming languages I have worked with include:</div>
            <div className="flex flex-row justify-between w-auto h-fit">
              {LANGUAGES.map((i, col) => {
                return (
                  <ul key={col}>
                    {i.map((j, row) => {
                      return (
                        <div key={row} className="relative ">
                          <BulletPoint className="mt-2" key={row}>
                            <div className="w-[130px] overflow-hidden">
                              <div className="flex w-fit hover:-translate-x-[130px] hover:cursor-pointer duration-500">
                                <div className="w-[130px]">{j}</div>
                                <div className="w-[130px]">
                                  {LANGUAGES_YEARS[col * 3 + row]}
                                </div>
                              </div>
                            </div>
                          </BulletPoint>
                        </div>
                      )
                    })}
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
