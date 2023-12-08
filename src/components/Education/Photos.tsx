import { Waterloo_Images_Size } from "@/constants"
import { useState } from "react"

const Photos = () => {
  const [imageColor, setImageColor] = useState("rgb(255, 99, 71)")
  const [displayImageIndex, setDisplayImageIndex] = useState(0)

  const generateRandomColor = () => {
    let r = (Math.floor(Math.random() * 80) + 150).toString()
    let g = (Math.floor(Math.random() * 80) + 150).toString()
    let b = (Math.floor(Math.random() * 80) + 150).toString()
    return "rgb(" + r + " " + g + " " + b + ")"
  }

  return (
    <div
      onMouseEnter={() => {
        setImageColor(generateRandomColor())
        setDisplayImageIndex((displayImageIndex + 1) % Waterloo_Images_Size)
      }}
      style={{ backgroundColor: imageColor }}
      className={`flex justify-around items-center mx-auto rounded-2xl w-[550px] h-[350px] hover:scale-110 hover:cursor-pointer duration-200`}
    >
      <img
        src={`./Waterloo_Images/${displayImageIndex + 1}.jpg`}
        alt="University of Waterloo Images"
        className="w-[500px] h-[300px]"
      ></img>
    </div>
  )
}
export default Photos
