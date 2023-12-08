import { TbBrandSpotify } from "react-icons/tb"
import PlayingAnimation from "./PlayingAnimation"

type Props = {
  playing: boolean
}

const NowPlaying = ({ playing }: Props) => {
  return (
    <div className="relative flex items-center h-20 w-full bg-[#122445] rounded-2xl">
      {playing ? (
        <>
          <div className="absolute flex items-center right-10 top-3 h-fit w-fit">
            <img src="./spotify.png" alt="spotify logo" className="h-5"></img>
          </div>
          <PlayingAnimation />
          <div className="flex flex-col ml-5 w-full">
            <div>Whatcha Say</div>
            <div className="text-xs font-bold">Jason Derulo</div>
            <div className="flex items-center mr-10 w-auto h-fit">
              <div className="flex-grow relative h-[2px] bg-[#6e6e6e] rounded-full mr-5">
                <div className="absolute top-0 left-0 h-[2px] bg-[#cdd3f7] rounded-full mr-10 w-[30px]"></div>
              </div>
              <div className="text-xs">0:30/4:24</div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="text-center w-full text-md text-[#989cb5]">
            I'm not currently listening to anything :(
          </div>
          <div className="text-center w-full text-[12px] text-[#989cb5]">
            In the meantime, check out my list of amazing songs{" "}
            <a href="https://spotify.com" target="_blank">
              <p className="inline text-[#90ff42] hover:text-white">here</p>
            </a>
            .
          </div>
        </div>
      )}
    </div>
  )
}
export default NowPlaying
