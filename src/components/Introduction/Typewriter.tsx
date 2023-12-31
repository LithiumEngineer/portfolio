import { WORDS_ABOUT_ME, WORDS_ABOUT_ME_COLOR } from "@/constants"
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"


interface TypewriterProps {
  words: string[];
  colors: string[]; // Assuming courses is an array of React nodes
  cursor: boolean;
}

const TypewriterEffect: React.FC<TypewriterProps> = ({ words, colors, cursor = false }) => {
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [wordIndex, setWordIndex] = useState(-1)

  return (
    <div className="inline" style={{ color: colors[wordIndex % words.length] }}>
      <Typewriter
        words={words}
        cursor={cursor}
        cursorBlinking
        loop={true}
        onType={() => {
          if (!isTyping) {
            setIsTyping(true)
            setWordIndex(wordIndex + 1)
          }
        }}
        onDelete={() => setIsTyping(false)}
      />
    </div>
  )
}
export default TypewriterEffect
