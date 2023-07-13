import { Stage } from '@pixi/react'
import React, { useEffect, useState } from 'react'
import { ChromaticText } from './ChromaticText'

const texts = ['Maximum Freedom', 'Zero Price Impact', 'Default Risk-Free', 'Lower Trading Costs']

// const getIsMobile = () => window.innerWidth <= 996 // docusaurus

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined)

  useEffect(() => {
    function onResize() {
      setWindowWidth(window.innerWidth)
      console.log(`resized: ${window.innerWidth}, ${window.innerHeight}`)
    }
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return windowWidth
}

export function ChromaticTitle(props) {
  const width = 1200
  const height = 200
  const ratio = width / height
  const W = useWindowWidth()

  return (
    <Stage
      width={W}
      height={height}
      className="flex-auto h-auto max-w-full"
      options={{
        autoDensity: true,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0
      }}
    >
      <ChromaticText texts={texts} y={0} width={W} height={height} />
    </Stage>
  )
}
