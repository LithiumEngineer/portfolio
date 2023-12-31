import { ReactNode } from "react"
import BulletPoint from "../BulletPoint"
import { FaJava, FaPython } from "react-icons/fa6"
import {
  BiLogoCPlusPlus,
  BiLogoJava,
  BiLogoPython,
  BiLogoTypescript,
} from "react-icons/bi"

interface Props {
  title?: string
  role?: string
  time?: string
  img?: string
  url?: string
  description?: ReactNode[]
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isHovered?: boolean
}

const ExperienceItem: React.FC<Props> = ({
  title,
  role,
  time,
  img,
  url,
  description,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {
  return (
    <div
      className="flex max-w-[600px] w-fit h-fit mx-5 my-10 "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative min-w-[60px] w-[60px] rounded-full">
        <div className="bg-[#717380] h-[calc(100%+50px)] w-[2px] mx-auto"></div>
        <a href={url} target="_blank">
          <img
            src={img}
            className={`absolute top-0 left-0 w-[60px] h-[60px] ${
              isHovered && "scale-125"
            } duration-300`}
          ></img>
        </a>
        {/* <div className="absolute -bottom-4 w-[2px] h-5 bg-[#717380] rounded-full"></div> */}
      </div>
      <div className="ml-5">
        <div className="text-2xl text-[#dfdfdf]">{title}</div>
        <div
          className={`text-sm ${
            isHovered ? "text-[#b4b9cf]" : "text-[#80859d]"
          } mt-2 duration-300`}
        >
          {role} | {time}
        </div>
        <ul
          className={`${
            isHovered ? "text-[#ccd0e4]" : "text-[#acacac]"
          } text-sm mt-4 duration-300`}
        >
          {description?.map((value, idx) => (
            <BulletPoint key={idx} className="mt-1">
              {value}
            </BulletPoint>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceItem
