import { BiCopyright } from "react-icons/bi"
import TypewriterEffect from "../Introduction/Typewriter"
import { FOOTER_WORDS, FOOTER_WORDS_COLOR } from "@/constants"

const Footer = () => {
  return (
    <div className="w-screen mt-20 pb-14">
      <div className="text-center mx-auto h-[1em]">
        <TypewriterEffect words={FOOTER_WORDS} colors={FOOTER_WORDS_COLOR} cursor={false} />
      </div>
      <div className="flex text-[#cdd3f7] h-fit w-fit mx-auto mt-5">
        <BiCopyright className="mr-2 my-auto w-3 h-3" />
        <div className="w-fit text-xs">Kevin Kang 2024. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer
