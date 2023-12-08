import { Montserrat, Orbitron } from "@next/font/google"

const orbitron400 = Orbitron({
    subsets: ["latin"],
    weight: ["400"],
  })
  

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
})

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Awards = () => {
  return (
    <>
      <div className={`text-5xl text-center py-10 ${orbitron400.className}`}>Awards</div>
      <div className={`px-8 text-lg ${montserrat400.className}`}>
        <ul className="list-disc list-inside">
          <a
            className="hover:text-blue-700 hover:underline"
            href="https://uwaterloo.ca/undergraduate-entrance-awards/awards/mathematics-national-scholarships"
            target="_blank"
          >
            <li>
              <p className={`inline ${montserrat600.className}`}>
                $25,000 Rene Descartes National Math Scholarship
              </p>
              , awarded to the 10 most outstanding students entering the Faculty
              of Mathematics
            </li>
          </a>
          <li className="mt-5">
            <p className={`inline ${montserrat600.className}`}>
              $1,000 Promissory Mathematics Scholarship
            </p>
            , awarded to outstanding math and computer science contest
            performance in high school
          </li>
          <li className="mt-5">
            Invited to{" "}
            <p className={`inline ${montserrat600.className}`}>
              Exploring Math and Computer Science Workshop
            </p>
            , an invitation-only math camp for ~40 top math students in Canada.
          </li>
        </ul>
      </div>
    </>
  )
}

export default Awards