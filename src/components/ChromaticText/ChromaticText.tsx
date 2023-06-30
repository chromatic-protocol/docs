import React, { useEffect, useRef, useState } from 'react'
// import { TextMask } from "./TextMask";
import { VerticalText } from './VerticalText'
export type ChromaticTextProps = {
  texts: string[]
  textInterval?: number
  y?: number
}

function prepareParameters(n: number, width: number, speed: number, y: number) {
  return [...Array(n)].map((_, i) => {
    const x = -width + (i * width) / n
    return {
      x: x,
      y: y,
      move: -x * speed
    }
  })
}

export const ChromaticText = (props: ChromaticTextProps) => {
  const { texts } = props
  const textInterval = props.textInterval ?? 1000

  const [text, setText] = useState(texts[0])
  const i = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      i.current = (i.current + 1) % texts.length
      setText(texts[i.current])
    }, textInterval)
    return () => {
      clearInterval(interval)
    }
  }, [texts])
  const parameters = prepareParameters(5, 40, 0.015, props.y ?? 0)

  const common = {
    width: 1200,
    height: 180,
    rate: 1,
    baseWidth: 28,
    showCycle: parameters.length
  }

  return (
    <>
      {parameters.map((props, idx) => (
        <VerticalText
          key={idx}
          text={text}
          {...props}
          maskProps={{ ...common, start: 0, showMod: idx }}
        />
      ))}
    </>
  )
}
