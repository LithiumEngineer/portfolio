import { Montserrat } from "@next/font/google"

const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})

const Projects = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center mx-auto w-[calc(100%-50px)] max-w-[700px] pt-32 pb-10">
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-5xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Projects
        </div>
        <div className="flex-grow h-[1px] w-auto bg-[#3b426b] rounded-full "></div>
      </div>
    </div>
  )
}
export default Projects
