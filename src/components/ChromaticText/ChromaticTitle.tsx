import { Stage } from '@pixi/react'
import React from 'react'
import { ChromaticText } from './ChromaticText'

const texts = ['Maximum Freedom', 'Zero Price Impact', 'Default Risk-Free', 'Lower Trading Costs']

export function ChromaticTitle(props) {
  const width = 2000
  const height = 200

  return (
    <Stage
      width={width}
      height={height}
      className="flex-auto !h-auto max-w-full"
      options={{
        autoDensity: true,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0
      }}
    >
      <ChromaticText texts={texts} y={0} width={width} height={height} />
    </Stage>
  )
}
