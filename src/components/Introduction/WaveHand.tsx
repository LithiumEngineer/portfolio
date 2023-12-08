const WaveHand = () => {
  return (
    <>
      <div className="inline wave-effect text-9xl">👋</div>
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          75% {
            transform: rotate(20deg);
          }
        }

        .wave-effect {
          display: inline-block;
          animation: wave 800ms infinite linear;
          animation-fill-mode: both;
        }
      `}</style>
    </>
  )
}

export default WaveHand
