import { Montserrat } from "next/font/google"
import { useState } from "react"
import Header from "../Header"
import ExperienceItem from "./ExperienceItem"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Experience = () => {
  const [hover, setHover] = useState("none")

  return (
    <div className="w-screen h-fit">
      <Header title="Experience" />
      <div className="mx-auto h-fit w-fit">
        <ul>
          <li>
            <ExperienceItem
              key="shopify"
              title="Shopify (Incoming)"
              role="Applied ML Engineer"
              time="January 2025 - April 2025"
              img="/shopify.png"
              url="https://www.shopify.com/"
              description={[<p key="1">Lending team on Shopify Capital. </p>]}
              onMouseEnter={() => setHover("shopify")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "shopify"}
              imagePadding={3}
            />

            <ExperienceItem
              key="dt"
              title="Deep Trekker"
              role="Software Developer"
              time="May 2024 - August 2024"
              img="/DT_Logo.jpg"
              url="https://www.deeptrekker.com/"
              description={[
                <div key="1" className="inline">
                  Built <p className="inline font-bold">remote controller</p>,{" "}
                  <p className="inline font-bold">embedded</p> and{" "}
                  <p className="inline font-bold">firmware</p> software for
                  underwater ROVs used by customers in 80+ countries
                </div>,
                <div key="2">
                  Developed features for{" "}
                  <p className="inline font-bold">
                    autonomous robot navigation
                  </p>
                  , including interactive waypoint planning, mission management
                  system, database design and 3D route calculation using
                  analytical geometry
                </div>,
                <div key="3">
                  Led <p className="inline font-bold">database migration</p>{" "}
                  from PrismaSQL to browser-based IndexedDB database, improving
                  app efficiency by <p className="inline font-bold">40%</p>
                </div>,
                <div key="4">
                  Developed embedded software by writing a{" "}
                  <p className="inline font-bold">ROS C++ driver</p> over{" "}
                  <p className="inline font-bold">UDP/IP protocol</p> for a
                  camera head system featuring multi-axis rotation and lights,
                  diagnosing and fixing various firmware bugs
                </div>,
              ]}
              onMouseEnter={() => setHover("deeptrekker")}
              onMouseLeave={() => setHover("none")}
              isHovered={hover == "deeptrekker"}
              imagePadding={1}
              outstanding
            />
            <ExperienceItem
              key="ecssen2"
              title="ECSSEN Career School"
              role="Software Developer"
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
              key="ecssen1"
              title="ECSSEN Career School"
              role="Software Developer"
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
            {/* <ExperienceItem
              title="Western Canada High School Robotics Lab"
              role="Teaching Assistant/Technical Writer"
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
            /> */}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Experience
