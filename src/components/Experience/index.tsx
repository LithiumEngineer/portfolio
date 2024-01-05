import { Montserrat } from "@next/font/google"
import ExperienceItem from "./ExperienceItem"
import BulletPoint from "../BulletPoint"
import { useState } from "react"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Experience = () => {
  const [hover, setHover] = useState("none")

  return (
    <div className="w-screen h-fit">
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Experience
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>
      <div className="mx-auto h-fit w-fit">
        <ul>
          <li>
            <ExperienceItem
              title="ECSSEN Career School"
              role="Software Engineer"
              time="June 2022 - August 2022"
              img="/ecssen.png"
              url="https://ecssen.ca/"
              description={[
                <p key="1">
                  A Government of Canada sponsored project to build a
                  decentralized and transparent volunteer management system
                  using blockchain technology.
                </p>,
                <p key="2">
                  Built a full-stack website that allows volunteers to record
                  volunteer hours using smart contracts and Lens Protocol.
                </p>,
                <p key="3">
                  Learned about smart contracts, tokenization, and the benefits
                  of the blockchain ecosystem.
                </p>,
              ]}
              onMouseEnter={() => setHover("ecssen2")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "ecssen2"}
            />
            <ExperienceItem
              title="ECSSEN Career School"
              role="Software Engineer"
              time="June 2023 - August 2023"
              img="/ecssen.png"
              url="https://ecssen.ca/"
              description={[
                <p key="1">
                  Utilized Figma to revamp the UI/UX design and website flows of
                  numerous webpages to increase traffic flow.
                </p>,
                <p key="2">
                  Designed and built the functionality to allow volunteers to
                  apply to volunteering opportunities and organizations to
                  approve these applications.
                </p>,
                <p key="3">
                  Acted as team leader, monitoring progress, leading meetings,
                  and reviewed and approved GitHub pull requests.
                </p>,
              ]}
              onMouseEnter={() => setHover("ecssen1")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "ecssen1"}
            />
            <ExperienceItem
              title="Western Canada High School Robotics Lab"
              role="Content Writer"
              time="September 2020 - May 2023"
              img="/wchs.png"
              url="https://school.cbe.ab.ca/school/WesternCanada/Pages/default.aspx"
              description={[
                <p key="1">
                  Helped the teacher develop tutorial materials for the Grade 10
                  Robotics course.
                </p>,
                <p key="2">
                  Came up with LEGO Mindstorm and VEX programming challenges and
                  wrote a RobotC programming textbook.
                </p>,
              ]}
              onMouseEnter={() => setHover("robotics")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "robotics"}
            />
            <ExperienceItem
              title="WCHS Computer Science Club"
              role="Founder"
              time="September 2021 - May 2023"
              img="/csclub.png"
              url="https://school.cbe.ab.ca/school/WesternCanada/Pages/default.aspx"
              description={[
                <p key="1">
                  Conducted weekly lessons on algorithms and data structures in
                  C++ to a group of around 30 high school students passionate
                  about computer science.
                </p>,
                <p key="2">
                  Wrote and prepared weekly problems on an online judge,
                  allowing members to submit and verify their solutions.
                </p>,
              ]}
              onMouseEnter={() => setHover("csclub")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "csclub"}
            />
            <ExperienceItem
              title="KFC"
              role="Line Cook"
              time="May 2023 - July 2023"
              img="/kfc.png"
              description={[
                <p key="1">
                  Assigned with the burger station duty, memorized the recipe
                  for and assembled 10+ types of chicken burgers and wraps.
                </p>,
                <p key="2">
                  Cooperated and communicated with co-workers effectively to
                  ensure quick and up to standards delivery of food.
                </p>,
                <p key="3">
                  Learned to deal with stress and work under a fast-paced
                  environment to satisfy customer needs.
                </p>,
              ]}
              onMouseEnter={() => setHover("kfc")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "kfc"}
            />
            <ExperienceItem
              title="Pho Thanh Nga"
              role="Server, Clerk"
              time="May 2023 - July 2023"
              img="/pho.png"
              description={[
                <p key="1">
                  Assisted customers with dietary restrictions and food
                  allergies by recommending appropriate dishes
                </p>,
                <p key="2">
                  Learned how to provide excellent customer service,
                  consistently upholding a friendly attitude while interacting
                  with diverse customers.
                </p>,
              ]}
              onMouseEnter={() => setHover("pho")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "pho"}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Experience
