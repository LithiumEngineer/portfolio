import { ReactNode } from "react";
import { BsCaretRight } from "react-icons/bs"

interface BulletPointProps {
  children: ReactNode;
  className?: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ children, className = "" }) => {
  return (
    <li className={`flex ${className}`}>
      <BsCaretRight className="w-5 mt-1 text-[#90ff42]" />
      <div className="ml-2 w-full">{children}</div>
    </li>
  )
}

export default BulletPoint
