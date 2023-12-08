import { BsCaretRight } from "react-icons/bs"

const BulletPoint = ({ children, className = "" }) => {
  return (
    <li className={`flex ${className}`}>
      <BsCaretRight className="w-5 mt-1 text-[#90ff42]" />
      <div className="ml-2 w-full">{children}</div>
    </li>
  )
}

export default BulletPoint
