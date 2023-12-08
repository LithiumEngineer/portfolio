import { Montserrat } from "@next/font/google"
import ExperienceItem from "./ExperienceItem"
import BulletPoint from "../BulletPoint"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Experience = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center mx-auto w-[500px] py-10">
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Experience
        </div>
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
      </div>
      <div className="mx-auto h-full w-fit">
        <ul>
          <li>
            <div className="flex max-w-[500px] w-fit h-fit mx-5 ">
              <div className="relative mt-2 min-w-[2px] h-auto bg-[#717380] rounded-full">
                <div className="absolute -bottom-4 w-[2px] h-5 bg-[#717380] rounded-full"></div>
              </div>
              <div className="ml-5">
                <div className="text-2xl text-[#cdd3f7]">
                  Front-End Developer @ ECSSEN Career School (Return Offer)
                </div>
                <div className="text-sm text-[#8b94c1] mt-2">
                  July 2023 - August 2023 | Calgary, Canada
                </div>
                <ul className="text-[#8b94c1] text-sm mt-6">
                  <BulletPoint className="mt-1">
                    built new website from scratch basically
                  </BulletPoint>
                  <BulletPoint className="mt-1">
                    Developed fuzzy searching, filtering, and sorting
                    functionality, allowing users to conveniently find what they
                    are looking for.
                  </BulletPoint>
                </ul>
              </div>
            </div>
          </li>
          <li className="mt-10 ">
            <div className="flex max-w-[500px] w-fit h-fit mx-5 ">
              <div className="relative mt-2 min-w-[2px] h-auto bg-[#717380] rounded-full">
                <div className="absolute -bottom-4 w-[2px] h-5 bg-[#717380] rounded-full"></div>
              </div>
              <div className="ml-5">
                <div className="text-2xl text-[#cdd3f7]">
                  Front-End Developer @ ECSSEN Career School
                </div>
                <div className="text-sm text-[#8b94c1] mt-2">
                  June 2022 - August 2022 | Calgary, Canada
                </div>
                <ul className="text-[#8b94c1] text-sm mt-6">
                  <BulletPoint className="mt-1">
                    Used Next.js and Tailwind CSS to build a site used by
                    charities to track volunteer hours.
                  </BulletPoint>
                  <BulletPoint className="mt-1">
                    Developed form used by volunteers to submit volunteer hours,
                    with features such as error-trapping and text auto-complete.
                  </BulletPoint>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Experience
