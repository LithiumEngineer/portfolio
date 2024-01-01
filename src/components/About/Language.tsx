type Props = {
  imageURL: string
  text: string
}

const Language = ({ imageURL, text }: Props) => {
  return (
    <div className="flex flex-col h-fit w-fit mx-2 my-2 px-1 py-2 bg-[#122445] rounded-2xl hover:scale-110 duration-100">
      <div className="rounded-full w-14 h-14 mx-2 bg-white">
        <img src={imageURL} className="px-2 py-2"></img>
      </div>
      <div className="h-fit w-fit mx-auto mt-1 text-base font-sans">{text}</div>
    </div>
  )
}
export default Language
