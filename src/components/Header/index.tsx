import { Montserrat } from "@next/font/google"
import { FC } from "react"

interface HeaderProps {
  title: string
}

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`hover:animate-move hover:text-[#6cf7cf] text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          {title}
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-3px);
          }
          50% {
            transform: translateY(0px);
          }
          75% {
            transform: translateY(3px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .hover\:animate-move:hover {
          animation: move 1000ms linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  )
}

export default Header
