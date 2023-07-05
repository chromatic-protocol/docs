import { ScrollDirection } from '@site/src/hooks/useScroll'
import React, { useEffect, useRef } from 'react'

function DebuggingElement() {
  return (
    <div
      style={{
        position: 'absolute',
        height: '2px',
        width: '100px',
        backgroundColor: 'green',
        color: 'green',
        whiteSpace: 'nowrap'
      }}
    >
      Trigger
    </div>
  )
}

interface ITrigger {
  current: number
  previous: number
  direction: ScrollDirection
  onUp?: (...args: any[]) => void
  onDown?: (...args: any[]) => void
  offset?: React.CSSProperties['margin']
  debug?: boolean
}

function Trigger({ current, previous, direction, onUp, onDown, offset = 0, debug }: ITrigger) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggerPosition = (ref.current.getBoundingClientRect().y ?? 0) + current

    if (
      onDown &&
      direction === ScrollDirection.down &&
      triggerPosition >= previous &&
      triggerPosition <= current
    ) {
      onDown()
    } else if (
      onUp &&
      direction === ScrollDirection.up &&
      triggerPosition <= previous &&
      triggerPosition >= current
    ) {
      onUp()
    }
  }, [current])

  const style: React.CSSProperties = { position: 'absolute', marginTop: offset }

  return (
    <div ref={ref} style={style}>
      {debug && <DebuggingElement />}
    </div>
  )
}

export default Trigger
