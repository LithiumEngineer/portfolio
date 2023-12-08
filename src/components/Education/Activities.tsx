import { Montserrat, Orbitron } from "@next/font/google"

const orbitron400 = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
})

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
})

const Activities = () => {
  return (
    <>
      <div className={`text-5xl text-center py-10 ${orbitron400.className}`}>
        Activities
      </div>
      <div className={`px-8 text-lg ${montserrat400.className}`}>
        <ul className="list-disc list-inside">
          <li className="">CS Club</li>
          <li className="mt-5">Math Club</li>
        </ul>
      </div>
    </>
  )
}

export default Activities
