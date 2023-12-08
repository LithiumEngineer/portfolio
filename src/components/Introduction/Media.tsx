import { useState } from "react"
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoDiscord,
  BiMailSend,
} from "react-icons/bi"
import PopupModal from "./PopupModal"
import { BsMailbox, BsMailbox2 } from "react-icons/bs"
import { TbMail } from "react-icons/tb"

const Media = () => {
  const [openEmail, setOpenEmail] = useState<boolean>(false)
  const [openDiscord, setOpenDiscordModal] = useState<boolean>(false)

  return (
    <>
      <TbMail
        className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-[#90ff42]"
        onClick={() => setOpenEmail(true)}
      />
      <BiLogoLinkedin className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-[#90ff42]" />
      <BiLogoGithub className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-[#90ff42]" />
      <BiLogoDiscord
        className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-[#90ff42]"
        onClick={() => setOpenDiscordModal(true)}
      />
      <PopupModal
        open={openDiscord}
        onClose={() => setOpenDiscordModal(false)}
        text={"Buff Teemo#9323"}
      />
      <PopupModal
        open={openEmail}
        onClose={() => setOpenEmail(false)}
        text={"haochenkang.business@gmail.com"}
      />
    </>
  )
}

export default Media
