import React, { useEffect, useRef, useState } from 'react'
// import { TextMask } from "./TextMask";
import { VerticalText } from './VerticalText'
export type ChromaticTextProps = {
  texts: string[]
  textInterval?: number
  width: number
  height: number
  y?: number
}

function prepareParameters(n: number, maskWidth: number, width: number, y: number) {
  return [...Array(n)].map((_, i) => {
    const x = -maskWidth + (i * maskWidth) / n - i * (width / 2)
    return {
      x: x + width / 2,
      pauseX: width / 2,
      outX: width - x,
      y: y
    }
  })
}

export const ChromaticText = (props: ChromaticTextProps) => {
  const { texts, width, height } = props
  const textInterval = props.textInterval ?? 4000

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
  let [parameters, setParameters] = useState(prepareParameters(5, 40, width, props.y ?? 0))
  let [common, setCommon] = useState({
    width: width,
    height: height,
    rate: 1,
    baseWidth: 28,
    showCycle: parameters.length
  })

  useEffect(() => {
    setParameters(prepareParameters(5, 40, width, props.y ?? 0))
    setCommon({
      width: width,
      height: height,
      rate: 1,
      baseWidth: 28,
      showCycle: parameters.length
    })
  }, [width])

  return (
    <>
      {parameters.map((props, idx) => (
        <VerticalText
          key={idx}
          text={text}
          textInterval={textInterval}
          {...props}
          maskProps={{ ...common, start: 0, showMod: idx }}
          textStyles={{ fontSize: width / 12 }}
        />
      ))}
    </>
  )
}
