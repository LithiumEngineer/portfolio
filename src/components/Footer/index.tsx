import { BiCopyright } from "react-icons/bi"
import TypewriterEffect from "../Introduction/Typewriter"
import { FOOTER_WORDS, FOOTER_WORDS_COLOR } from "@/constants"

const Footer = () => {
  return (
    <div className="flex justify-around mx-auto w-auto max-w-[1200px] p-10">
      <div className="whitespace-nowrap flex-shrink flex items-center text-[#cdd3f7] h-fit min-w-fit">
        <BiCopyright className="mr-2 w-5 h-5" />
        <div className="w-full">Kevin Kang 2023</div>
      </div>
      <div className="flex-shrink text-center min-w-fit">
        iaosdhfoiahdsfoiahdsiofhoiadshfoih
        {/* <TypewriterEffect words={FOOTER_WORDS} colors={FOOTER_WORDS_COLOR} cursor={false} /> */}
      </div>
      <div className="flex-shrink whitespace-nowrap text-[#cdd3f7] min-w-fit">
        All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
