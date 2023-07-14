import { Stage } from '@pixi/react'
import React from 'react'
import { ChromaticText } from './ChromaticText'
import { useColor } from '@site/src/theme/Contexts/color'

const texts = [
  'Limitless Trading Pairs',
  'Maximum Freedom',
  'Zero Price Impact',
  'No Default Risk',
  'Lower Trading Costs'
]

export function ChromaticTitle(props) {
  const width = 2016
  const height = 200
  const { color } = useColor()
  const isDark = color === 'dark'

  return (
    <Stage
      width={width}
      height={height}
      className="flex-auto !h-auto max-w-full flex items-center"
      options={{
        autoDensity: true,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0
      }}
    >
      <ChromaticText
        texts={texts}
        y={0}
        width={width}
        height={height}
        fill={isDark ? '#ffffff' : '#030303'}
      />
    </Stage>
  )
}
