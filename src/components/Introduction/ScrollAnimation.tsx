import { useEffect, useState } from "react"

const ScrollAnimation = () => {
  const [opacity, setOpacity] = useState(1)

  const handleScroll = () => {
    const introductionHeight = Math.max(window.innerHeight, 800) //800 is min-height of <Introduction/>
    const newOpacity = Math.max(
      0.2,
      1 - (window.scrollY - (introductionHeight - window.innerHeight)) / 500
    )
    setOpacity(newOpacity)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div style={{ opacity: opacity }} className="w-fit mx-auto">
        <div className="w-7 h-11 rounded-full border-white border-2">
          <div className="down-effect w-[3px] h-[6px] mt-1 rounded-lg bg-white mx-auto" />
        </div>
      </div>
      <style jsx>{`
        @keyframes down {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(7px);
            opacity: 1;
          }
          100% {
            transform: translateY(14px);
            opacity: 0.4;
          }
        }

        .down-effect {
          animation: down 1500ms infinite linear;
        }
      `}</style>
    </>
  )
}

export default ScrollAnimation
