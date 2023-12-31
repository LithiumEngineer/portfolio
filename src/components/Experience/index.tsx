import { Montserrat } from "@next/font/google"
import ExperienceItem from "./ExperienceItem"
import BulletPoint from "../BulletPoint"
import { useState } from "react"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Experience = () => {
  const [hover, setHover] = useState(0)

  return (
    <div className="w-screen h-fit">
      <div className="flex items-center mx-auto w-fit py-10">
        <div className="flex-grow h-[1px] w-[80px] bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Experience
        </div>
        <div className="flex-grow h-[1px] w-[80px] bg-[#3b426b] rounded-full "></div>
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
              onMouseEnter={() => setHover(6)}
              onMouseLeave={() => setHover(0)}
              isHovered={hover == 6}
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
              onMouseEnter={() => setHover(5)}
              onMouseLeave={() => setHover(0)}
              isHovered={hover == 5}
            />
            <ExperienceItem
              title="Western Canada High School Robotics Lab"
              role="Content Writer"
              time="September 2020 - May 2023"
              img="/wchs.png"
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
              onMouseEnter={() => setHover(4)}
              onMouseLeave={() => setHover(0)}
              isHovered={hover == 4}
            />
            <ExperienceItem
              title="WCHS Computer Science Club"
              role="Founder"
              time="September 2021 - May 2023"
              img="/csclub.png"
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
              onMouseEnter={() => setHover(3)}
              onMouseLeave={() => setHover(0)}
              isHovered={hover == 3}
            />
            <ExperienceItem
              title="KFC"
              role="Line Cook"
              time="May 2023 - July 2023"
              img="/kfc.png"
              description={[
                <p key="1">
                  Cooperated and communicated with co-workers effectively to
                  ensure quick and up to standards delivery of food.
                </p>,
                <p key="2">
                  Learned to deal with stress and work under a fast-paced
                  environment to satisfy customer needs.
                </p>,
              ]}
              onMouseEnter={() => setHover(2)}
              onMouseLeave={() => setHover(0)}
              isHovered={hover == 2}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Experience
