import { Montserrat } from "@next/font/google"


const montserrat600 = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
})


const Projects = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center mx-auto w-[500px] py-10">
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
        <div
          className={`text-3xl mx-10 text-[#cdd3f7] ${montserrat600.className}`}
        >
          Projects
        </div>
        <div className="flex-grow h-[1px] bg-[#3b426b] rounded-full "></div>
      </div>
    </div>
  )
}
export default Projects
