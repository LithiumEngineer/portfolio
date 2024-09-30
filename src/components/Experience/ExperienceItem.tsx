import { Tooltip } from "antd"
import { ReactNode } from "react"
import BulletPoint from "../BulletPoint"

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
  imagePadding?: number
  outstanding?: boolean
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
  imagePadding = 0,
  outstanding,
}) => {
  return (
    <div
      className="relative flex max-w-[600px] w-fit h-fit mx-5 mb-10 "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative min-w-[60px] w-[60px] rounded-full ">
        <div className="bg-[#717380] h-[calc(100%+50px)] w-[2px] mx-auto"></div>
        <a href={url} target="_blank">
          <div
            className={`flex items-center justify-around absolute top-0 left-0 w-[60px] h-[60px] bg-white rounded-full border-4 border-solid border-[#e6e6e6] ${
              isHovered && "scale-125"
            } duration-300`}
          >
            <Tooltip
              title={
                <>
                  "<p className="text-orange-500">Outstanding</p>" work-term
                  evaluation
                </>
              }
            >
              {outstanding && (
                <div className="bg-white border-solid border-2 border-slate-200 rounded-full absolute w-6 h-6 -top-2 -right-2 flex justify-around items-center">
                  🌟
                </div>
              )}
            </Tooltip>
            <img
              src={img}
              className={`w-auto h-auto max-w-full max-h-full px-${imagePadding}`}
            ></img>
          </div>
        </a>
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
