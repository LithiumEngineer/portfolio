import { Inter, Montserrat } from "@next/font/google"
import { IoMdOpen } from "react-icons/Io"
import BulletPoint from "../BulletPoint"

const inter400 = Inter({
  subsets: ["latin"],
  weight: ["400"],
})

const inter500 = Inter({
  subsets: ["latin"],
  weight: ["500"],
})

const inter600 = Inter({
  subsets: ["latin"],
  weight: ["600"],
})

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
})

const montserrat500 = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
})

const EducationCard = () => {
  return (
    <div className="flex flex-col justify-between h-full w-auto text-[#cdd3f7]">
      <div className="flex flex-col items-center w-auto h-fit px-[25px] py-[25px] bg-[#122445] rounded-md">
        <div className="flex flex-col w-full ">
          <p className={`text-[#cdd3f7] text-xl ${inter500.className}`}>
            Bachelor&apos;s of Computer Science (BCS)
          </p>
          <p className={`text-[#8b94c1] text-sm ${inter600.className}`}>
            UNIVERSITY OF WATERLOO
          </p>
          <p
            className={`px-3 py-1 mt-2 border-[1.2px] border-[#8b94c1] text-[#8b94c1] w-fit rounded-lg ${inter400.className}`}
          >
            2023 - Present
          </p>
        </div>
        <div className="w-full h-[1px] my-5 bg-[#3b426b] rounded-full"></div>
        <div className="text-lg tracking-wide w-full text-left">
          <p className={`text-[#cdd3f7] text-lg ${inter400.className}`}>
            Activities
          </p>
          <div
            className={`mt-2 px-2 text-sm text-[#8b94c1] ${montserrat400.className}`}
          >
            <ul className="list-disc list-inside">
              <BulletPoint className="mt-2">
                <p className={`inline`}>Computer Science Club (tentative)</p>
              </BulletPoint>
              <BulletPoint className="mt-2">
                <p className={`inline`}>Data Science Club (tentative)</p>
              </BulletPoint>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] my-5 bg-[#3b426b] rounded-full"></div>
        <div className="text-lg tracking-wide w-full text-left">
          <p className={`text-[#cdd3f7] text-lg ${inter400.className}`}>
            Awards
          </p>
          <div className={`text-sm text-[#8b94c1] ${montserrat400.className}`}>
            <ul className="list-inside">
            <BulletPoint className="mt-2">
                <p
                  className={`inline ${montserrat500.className} text-[#90ff42]`}
                >
                  $25,000 Rene Descartes National Math Scholarship
                </p>
                , awarded to around 10 outstanding students entering the Faculty
                of Mathematics at the University of Waterloo&nbsp;
                <a
                  className="hover:text-blue-700 hover:underline"
                  href="https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships"
                  target="_blank"
                >
                  <IoMdOpen className="inline text-[#90ff42] hover:text-white" />
                </a>
              </BulletPoint>
              <BulletPoint className="mt-2">
                <p
                  className={`inline ${montserrat500.className} text-[#90ff42]`}
                >
                  $1,000 Promissory Mathematics Scholarship
                </p>
                , awarded to outstanding math and computer science contest
                performance in high school
              </BulletPoint>
              <BulletPoint className="mt-2">
                <p
                  className={`inline ${montserrat500.className} text-[#90ff42]`}
                >
                  $1,000 Keith Yu Memorial Scholarship{" "}
                </p>
                for academic excellence in Computer Science in high school
              </BulletPoint>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
