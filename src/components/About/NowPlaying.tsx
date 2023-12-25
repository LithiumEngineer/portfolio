import { TbBrandSpotify } from "react-icons/tb"
import PlayingAnimation from "./PlayingAnimation"
import axios from "axios"
import { useState, useEffect } from "react"
import getConfig from "next/config"
 
type Props = {
  playing: boolean
}

const NowPlaying = ({ playing }: Props) => {
  const [token, setToken] = useState("")
  const [song, setSong] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [artist, setArtist] = useState("")
  const [currentTime, setCurrentTime] = useState(0)
  const [durationTime, setDurationTime] = useState(100)
  const [imageURL, setImageURL] = useState("")
  const [link, setLink] = useState("")

  useEffect(() => {
    refreshToken()
    const intervalId = setInterval(() => {
      refreshToken()
    }, 3500000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    let storedToken = window.localStorage.getItem("token")
    setToken(token)

    const intervalId = setInterval(() => {
      getSong()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [token])

  function convert_to_time(s: number) {
    let minute = String(Math.floor(Math.floor(s / 1000) / 60))
    let second = String(Math.floor(s / 1000) % 60)
    while (minute.length != 1) {
      minute = "0" + minute
    }
    while (second.length != 2) {
      second = "0" + second
    }
    return minute + ":" + second
  }

  const refreshToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token"

    try {
      const response = await axios.post(
        tokenUrl,
        `grant_type=refresh_token&refresh_token=${getConfig().publicRuntimeConfig.REFRESH_TOKEN}`,
        { 
          headers: {
            Authorization: `Basic ${btoa(`${getConfig().publicRuntimeConfig.CLIENT_ID}:${getConfig().publicRuntimeConfig.CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )

      const newAccessToken = response.data.access_token
      setToken(newAccessToken)
    } catch (error) {
      console.error("Error refreshing access token")
      throw error
    }
  }

  const getSong = async () => {
    try {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setSong(data.item.name)
      setIsPlaying(data.is_playing)
      setArtist(data.item.artists[0].name)
      setCurrentTime(data.progress_ms)
      setDurationTime(data.item.duration_ms)
      setImageURL(data.item.album.images[0].url)
      setLink(data.item.external_urls.spotify)
      console.log(data)
    } catch (error) {
      console.error("Error fetching currently playing track:", error)
    }
  }

  return (
    <div className="relative flex items-center h-20 w-full bg-[#122445] rounded-2xl">
      {isPlaying ? (
        <>
          <div className="absolute flex items-center right-10 top-3 h-fit w-fit">
            {/* <span style={{ marginRight: "10px" }}>Made with</span> */}
            <img src="./spotify.png" alt="spotify logo" className="h-5"></img>
            <span style={{ marginLeft: "2px" }}>API</span>
          </div>
          <PlayingAnimation />
          <div className="flex flex-col ml-5 w-full">
            <a href={link} target="_blank">
              <div className="flex items-center">
                <img src={imageURL} className="h-[40px] w-[40px] mr-2"></img>
                {/* <div className="bg-red-100 "></div> */}
                <div className="flex flex-col">
                  <div className="w-[300px] overflow-hidden h-[20px]">
                    {song}
                  </div>
                  <div className="text-xs font-bold">{artist}</div>
                </div>
              </div>
            </a>

            <div className="flex items-center mr-10 w-auto h-fit">
              <div className="flex-grow relative h-[2px] bg-[#6e6e6e] rounded-full mr-5">
                <div
                  className="absolute top-0 left-0 h-[2px] bg-[#cdd3f7] rounded-full mr-10"
                  style={{ width: `${(currentTime / durationTime) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs">
                {convert_to_time(currentTime)}/{convert_to_time(durationTime)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="text-center w-full text-md text-[#989cb5]">
            I&apos;m not currently listening to anything :(
          </div>
          <div className="text-center w-full text-[12px] text-[#989cb5]">
            In the meantime, check out my list of amazing songs{" "}
            <a
              href="https://open.spotify.com/playlist/0X5Bt0ltDrEbwNbA86jisw"
              target="_blank"
            >
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
