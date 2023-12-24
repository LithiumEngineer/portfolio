import { Montserrat, Orbitron } from "@next/font/google"
import BulletPoint from "../BulletPoint"

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
})

const montserrat700 = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
})

const Courses = ({ className = "", courses, term }) => {
  return (
    <div className={className}>
      <div className={`px-8 text-lg ${montserrat400.className}`}>
        <p className={`text-2xl tracking-widest ${montserrat700.className} mb-2`}>
          {term}
        </p>
        <ul className="list-disc list-inside">
          {courses.map((value, idx) => {
            return (
              <BulletPoint key={value} className={`${idx != 0 && "mt-2"}`}>
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
