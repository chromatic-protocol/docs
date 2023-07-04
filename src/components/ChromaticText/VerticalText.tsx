import { Graphics, Text, useTick } from '@pixi/react'
import { ITextStyle, TextStyle } from 'pixi.js'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { easing } from 'ts-easing'

export type VerticalRectsMaskProps = {
  width: number // per rect
  height: number // per rect
  start: number // start position
  rate: number
  baseWidth: number
  showCycle: number
  showMod?: number
}

export type VerticalTextProps = {
  text: string
  x: number
  pauseX: number
  outX: number
  y?: number
  maskProps: VerticalRectsMaskProps
  textStyles?: Partial<ITextStyle>
}

function getRects(
  width: number,
  height: number,
  start: number,
  rate: number,
  baseWidth: number,
  showCycle: number,
  showMod: number | undefined
) {
  let x = start
  let w = baseWidth
  let output = []
  let i = 0
  const which = showMod ?? 0
  while (x < width) {
    if (i % showCycle === which) {
      output.push({ x: x, y: 0, w: w, h: height })
    }
    x = x + w
    // w = w * rate;
    i += 1
  }
  return output
}

export const VerticalText = (props: VerticalTextProps) => {
  const { text, x, maskProps, textStyles, pauseX, outX } = props
  const y = props.y ?? 0
  const mask: any = useRef(undefined)
  const [X, setX] = useState(x)
  const [elapsed, setElapsed] = useState(0)

  useTick((delta) => {
    setElapsed(elapsed + delta * 50)
    if (elapsed < 1000) {
      const currentX = x + (pauseX - x) * easing.outQuart(elapsed / 1000)
      setX(currentX)
    } else if (elapsed > 10000 && elapsed < 2500) {
      // stay
    } else if (elapsed >= 2500) {
      const currentX = pauseX + (outX - pauseX) * easing.inQuart((elapsed - 2000) / 1000)
      setX(currentX)
    }
  })
  useEffect(() => {
    setX(x)
    setElapsed(0)
  }, [text, x])

  const { width, height, start, rate, baseWidth, showCycle, showMod } = maskProps

  const verticals = getRects(width, height, start, rate, baseWidth, showCycle, showMod)

  const draw = useCallback(
    (g: any) => {
      g.clear()
      g.lineStyle(1, 0x000000)
      g.beginFill(0x000000, 1)
      for (let vertical of verticals) {
        g.drawRect(vertical.x, vertical.y, vertical.w, vertical.h)
      }
      g.endFill()
    },
    [verticals]
  )

  return (
    <>
      <Text
        text={text}
        anchor={{ x: 0.5, y: 0 }}
        x={X}
        y={y}
        mask={mask.current}
        style={
          new TextStyle({
            align: 'left',
            textBaseline: 'alphabetic',
            fontFamily: '"Source Code Pro", Helvetica, sans-serif',
            fontSize: 140,
            fontWeight: 'bold',
            fill: '#000000',
            stroke: '#01d27e',
            ...textStyles
            // strokeThickness: 5,
            // letterSpacing: 20,
            // dropShadow: true,
            // dropShadowColor: "#ccced2",
            // dropShadowBlur: 4,
            // dropShadowAngle: Math.PI / 6,
            // dropShadowDistance: 6,
          })
        }
      />
      {/* {maskProps && <VerticalRectsMask {...maskProps} ref={mask} />} */}
      <Graphics draw={draw} ref={mask} />
    </>
  )
}
