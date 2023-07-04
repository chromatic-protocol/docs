import { useEffect, useState, useRef } from 'react'

export const enum ScrollDirection {
  'up',
  'down'
}

function useScrollPosition() {
  const initialY = 0

  const prevY = useRef(initialY)

  const [state, setState] = useState({
    previous: initialY,
    current: initialY,
    direction: ScrollDirection.down
  })

  const setPrevY = (y: number) => {
    prevY.current = y
  }

  const handleScroll = () => {
    const nextY = window.scrollY

    const direction = nextY > prevY.current ? ScrollDirection.down : ScrollDirection.up

    setState({
      previous: prevY.current,
      current: nextY,
      direction: direction
    })
    setPrevY(nextY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return state
}

export { useScrollPosition }
