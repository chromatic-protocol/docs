import React, { useState, useEffect, useRef } from 'react'

interface TypingEffectProps {
  text: string
  delay?: number
  className?: string
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, delay = 100, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]

        if (target.isIntersecting) {
          setTimeout(() => {
            setShowText(true)
          }, 400)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (showText && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
      }, delay)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [currentIndex, delay, showText, text.length])

  return (
    <div ref={containerRef}>
      {text.split('').map((char, index) => {
        const shouldShow = showText && index <= currentIndex
        const isSpacing = char === ' '

        return (
          <div
            key={index}
            className={`relative inline-flex items-center min-w-[20px] h-auto ${className}`}
          >
            <div
              className="absolute inline-block w-full h-[70%] bg-black"
              style={{
                opacity: shouldShow ? 0 : 1,
                transition: 'opacity 0.1s ease-in-out'
              }}
            />
            {shouldShow && !isSpacing ? char : null}
          </div>
        )
      })}
    </div>
  )
}

export default TypingEffect
