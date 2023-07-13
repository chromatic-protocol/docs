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
  textInterval: number
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
  const { text, x, maskProps, textStyles, textInterval, pauseX, outX } = props
  const y = props.y ?? 0
  const mask: any = useRef(undefined)
  const [X, setX] = useState(x)
  const [elapsed, setElapsed] = useState(0)
  const intervals = [textInterval * (1 / 3), textInterval * (2 / 3), textInterval]
  useTick((delta) => {
    setElapsed(elapsed + delta * 16.66)
    if (elapsed < intervals[0]) {
      const currentX = x + (pauseX - x) * easing.outQuint(elapsed / intervals[0])
      setX(currentX)
    } else if (elapsed > intervals[0] && elapsed < intervals[1]) {
      // stay
    } else if (elapsed >= intervals[1]) {
      const currentX = pauseX + (outX - pauseX) * easing.inQuint((elapsed - intervals[1]) / 1000)
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
            fontSize: 150, //50
            fontWeight: 'bold',
            fill: '#ffffff',
            stroke: '#01d27e',
            letterSpacing: -4,
            ...textStyles
            // strokeThickness: 5,
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
