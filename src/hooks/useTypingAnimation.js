import { useState, useEffect } from 'react'

export const useTypingAnimation = (texts, speed = 100, deleteSpeed = 50, delayBetweenTexts = 2000) => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    const currentText = texts[textIndex]
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1))
      }, deleteSpeed)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1))
      }, speed)
    }

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTextIndex((current) => (current + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delayBetweenTexts])

  return displayText
}