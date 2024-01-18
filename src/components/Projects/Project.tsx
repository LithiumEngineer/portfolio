import { Inter } from "@next/font/google"

const inter400 = Inter({
  subsets: ["latin"],
  weight: ["400"],
})

const inter600 = Inter({
  subsets: ["latin"],
  weight: ["600"],
})

type Props = {
  title: string
  description: string
  languages: string[]
  githubURL: string
  imageURL: string
}

const Project = ({
  title,
  description,
  languages,
  githubURL,
  imageURL,
}: Props) => {
  const color = (text: string) => {
    // language = #2d922f
    if (text == "#Java") return "#2d922f"
    // framework = #5291e9
    else if (text == "#React") return "#5291e9"
    else if (text == "#Tailwind CSS") return "#5291e9"
    else if (text == "#Node.js") return "#5291e9"
    else if (text == "#Java Swing") return "#5291e9"
    // tool = #eb5050
    else if (text == "#AWS") return "#eb5050"
    else return "#ffffff"
  }
  return (
    <div className="relative flex flex-col mx-4 my-4 w-[350px] h-[500px] rounded-3xl bg-[#162c54]">
      <a href={githubURL} target="_blank">
        <div className="absolute right-5 top-5 w-[50px] h-[50px] bg-white rounded-full">
          <img src="./github.png" className="p-2"></img>
        </div>
      </a>
      <img
        src={imageURL}
        className="h-[300px] object-contain mx-10 my-5 rounded-2xl"
      ></img>
      <div className="flex flex-col mx-auto px-5">
        <div
          className={`text-[#ededfd] text-2xl ${inter600.className} tracking-normal`}
        >
          {title}
        </div>
        <div className="text-[#999ebc] mt-2 text-sm">{description}</div>
        <div className="text-sm mt-5">
          {languages.map((value, idx) => (
            <>
              {idx != 0 && <div className="inline">&nbsp;&nbsp;</div>}
              <div
                key={value}
                style={{ color: color(value) }}
                className={`inline`}
              >
                {value}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Project
