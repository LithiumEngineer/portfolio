import { BiCopyright } from "react-icons/bi"
import TypewriterEffect from "../Introduction/Typewriter"
import { FOOTER_WORDS, FOOTER_WORDS_COLOR } from "@/constants"

const Footer = () => {
  return (
    <div className="flex justify-between mx-auto w-auto max-w-[1200px] p-10">
      <div className="whitespace-nowrap flex items-center text-[#cdd3f7] h-fit">
        <BiCopyright className="mr-2 w-5 h-5" />
        <div className="w-full">Kevin Kang 2023</div>
      </div>
      <div className="text-center mx-5">
        <TypewriterEffect words={FOOTER_WORDS} colors={FOOTER_WORDS_COLOR} />
      </div>
      <div className="whitespace-nowrap text-[#cdd3f7]">
        All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
