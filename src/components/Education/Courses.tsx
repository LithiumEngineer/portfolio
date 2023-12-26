import { Montserrat, Orbitron } from "@next/font/google"
import BulletPoint from "../BulletPoint"
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, Key } from "react"

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
})

const montserrat700 = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
})

interface CoursesProps {
  className?: string;
  courses: ReactNode[]; 
  term: string;
}

const Courses: React.FC<CoursesProps> = ({ className = "", courses, term }) => {
  return (
    <div className={className}>
      <div className={`px-8 text-[1.5vw] ${montserrat400.className}`}>
        <p className={`text-base tracking-widest ${montserrat700.className} mb-2`}>
          {term}
        </p>
        <ul className="list-disc list-inside">
          {courses.map((value: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | Key | null | undefined, idx: number) => {
            return (
              <BulletPoint key={idx} className={`text-sm ${idx != 0 && "mt-2"}`}>
                {value}
              </BulletPoint>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Courses
