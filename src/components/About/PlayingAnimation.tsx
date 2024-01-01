const PlayingAnimation = () => {
  return (
    <div className="flex items-end h-fit w-fit ml-5">
      <div className="flex items-end justify-between w-fit h-[20px]">
        <div className="h-[10px] w-[2px] mx-[1px] bg-[#90ff42] fast"></div>
        <div className="h-full w-[2px] mx-[1px] bg-[#90ff42] slow"></div>
        <div className="h-full w-[2px] mx-[1px] bg-[#90ff42] medium"></div>
        <style jsx>{`
        @keyframes play {
          0% {
            height:100%
          }
          50% {
            height:0%
          }
          100% {
            height:100%
          }
        }

        .slow {
          animation: play 1000ms infinite linear;
          animation-fill-mode: forward;
        }
        .medium {
          animation: play 800ms infinite linear;
          animation-fill-mode: forward;
        }
        .fast {
          animation: play 500ms infinite linear;
          animation-fill-mode: forward;
        }

      `}</style>
      </div>
    </div>
  )
}
export default PlayingAnimation
