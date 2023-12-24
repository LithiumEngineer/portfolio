import { Inter } from "@next/font/google"
import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BiCheck, BiCheckCircle } from "react-icons/bi"
import { TbClipboardText } from "react-icons/tb"

const inter500 = Inter({
  subsets: ["latin"],
  weight: ["500"],
})

type Props = {
  open: boolean
  onClose: () => void
  text: string
}

const PopupModal = ({ open, onClose, text }: Props) => {
  const [copied, setCopied] = useState<boolean>(false)

  const clickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
  
    if (target.classList.contains("outer")) {
      onClose();
      setCopied(false);
    }
  }
  
  

  return (
    <div
      onClick={clickOutside}
      style={{ backgroundColor: "rgba(44, 44, 44, 0.90" }}
      className={`outer fixed flex justify-around items-center top-0 left-0 z-50 h-screen w-screen ${
        !open && "hidden"
      }`}
    >
      <div className="relative flex justify-around items-center w-fit h-[50px] rounded-lg bg-[#F9FAFB]">
        <div className="flex justify-between h-full w-full items-center">
          <div
            className={`px-3 grow flex justify-around text-[#383838] text-2xl ${inter500.className}`}
          >
            {text}
          </div>
          <div className="w-[2px] h-[40px] bg-[#ababab]"></div>
          <div className="px-3 grow flex justify-around">
            {copied ? (
              <BiCheckCircle className="w-8 h-8 text-[#208323]" />
            ) : (
              <TbClipboardText
                onClick={() => {
                  navigator.clipboard.writeText(text)
                  setCopied(true)
                }}
                className="w-8 h-8 text-[#383838] hover:cursor-pointer hover:text-[#4253ec]"
              />
            )}
          </div>
        </div>
        {copied && (
          <div className="absolute -top-7 -right-2 w-fit h-fit px-2 rounded-md bg-[#cfffc3]">
            Copied!
          </div>
        )}
        <AiOutlineCloseCircle
          className="absolute -top-5 -right-10 text-[#eaeaea] w-6 h-6 hover:text-[#ff4949] hover:cursor-pointer"
          onClick={() => {
            onClose()
            setCopied(false)
          }}
        />
      </div>
    </div>
  )
}
export default PopupModal
