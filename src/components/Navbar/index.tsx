import { BiMenu } from "react-icons/bi"
import { RefObject, useCallback, useEffect, useState } from "react"

const useMobile = () => {
  const [mobile, setMobile] = useState<boolean>(true)

  const updateSize = () => {
    if (window.innerWidth >= 760) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }

  const reload = useCallback(() => {
    updateSize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [reload])

  return mobile
}

interface NavbarProps {
  onClick: (ref: RefObject<HTMLElement>) => void;
  aboutRef: RefObject<HTMLElement>;
  projectRef: RefObject<HTMLElement>;
  experienceRef: RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({ onClick, aboutRef, projectRef, experienceRef }) => {  const mobile = useMobile()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const clickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
  
    if (target.classList.contains("outer")) {
      setOpenMobileMenu(false)
    }
  }


  // When user stretches window wider, the mobile menu will automatically hide
  const handleResize = () => {
    if (window.innerWidth >= 760) {
      setOpenMobileMenu(false)
    } 
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="sticky top-0 z-50 h-0">
      <div className="flex justify-between items-center w-screen min-w-fit h-[70px] bg-[#0b1b2d] opacity-95">
        <div className="ml-10 mr-4 text-white">Kevin Kang</div>
        {!mobile && (
          <div className="flex ">
            <div
              onClick={() => onClick(aboutRef)}
              className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 duration-700"
            >
              ABOUT
            </div>
            <div
              onClick={() => onClick(experienceRef)}
              className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 duration-700"
            >
              EXPERIENCE
            </div>
            <div
              onClick={() => onClick(projectRef)}
              className="px-5 mx-5 text-md text-white rounded-lg py-2 opacity-70 bg-opacity-0 hover:cursor-pointer bg-violet-950 hover:opacity-100 duration-700"
            >
              PROJECTS
            </div>
          </div>
        )}
        {mobile && (
          <BiMenu
            key="icon"
            className={`w-10 h-10 mr-10 text-white hover:cursor-pointer ${
              openMobileMenu ? "rotate-0" : "rotate-180"
            } duration-500`}
            onClick={() => {
              setOpenMobileMenu(!openMobileMenu)
            }}
          />
        )}
      </div>

      {/* Outer div is for detecting when user clicks outside navbar */}
      <div onClick={clickOutside} className={`outer absolute w-screen ${openMobileMenu ? "h-[calc(100vh-70px)]" : "h-0"} duration-300`}> 
        <div
          className={`absolute right-0 w-screen bg-[#0b1b2d] opacity-95 z-30
          ${openMobileMenu ? "h-[220px]" : "h-0"} expand-effect
        `}
        >
          <style jsx>{`
        @keyframes expand {
          0% {
            height: 0
          }
          100% {
            height: 100%
          }
        }

        .expand-effect {
          animation: expand 2s ease-in-out;
          animation-fill-mode: forward;
        }
      `}</style>
          <div
            onClick={() => {
              onClick(experienceRef)
              setOpenMobileMenu(!openMobileMenu)
            }}
            className={`text-white px-10 py-5 text-xl text-center hover:bg-[#112540] hover:cursor-pointer ${
              openMobileMenu ? "" : "hidden"
            }`}
          >
            EXPERIENCE
          </div>
          <div
            onClick={() => {
              onClick(projectRef)
              setOpenMobileMenu(!openMobileMenu)
            }}
            className={`text-white px-10 py-5 text-xl text-center hover:bg-[#112540] hover:cursor-pointer ${
              openMobileMenu ? "" : "hidden"
            }`}
          >
            PROJECTS
          </div>

          <div
            onClick={() => {
              setOpenMobileMenu(!openMobileMenu)
            }}
            className={`text-white px-10 py-5 text-xl text-center hover:bg-[#112540] hover:cursor-pointer ${
              openMobileMenu ? "" : "hidden"
            }`}
          >
            RESUME
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
