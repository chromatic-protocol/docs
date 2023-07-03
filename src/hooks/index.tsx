import React, { useEffect, useMemo, useState } from 'react'
import { gradient } from '../utils/color'
import { trimDecimal } from '../utils/number'

interface IUseGradient {
  ref: React.MutableRefObject<any>
  color: { main: string; sub: string }
  map: { start: number; end: number }[]
  offset: number
}

function useGradient(props: IUseGradient) {
  const { ref, color, map, offset } = props

  const [page, setPage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setPage(trimDecimal(ref.current?.current / ref.current.space, 3))
    }
    const container = ref.current.container.current
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function getRatio() {
    const range = map.find(({ start, end }) => page > start && page < end)
    if (!range) {
      return 0
    } else if (page <= range.start + offset) {
      return trimDecimal((page - range.start) / offset)
    } else if (page >= range.end - offset) {
      return trimDecimal((range.end - page) / offset)
    } else {
      return 1
    }
  }

  const calculated = useMemo(() => {
    const ratio = getRatio()

    const main = gradient(color.main, color.sub, ratio)
    const sub = gradient(color.main, color.sub, 1 - ratio)

    return { main, sub }
  }, [page])

  console.log(calculated)
  return calculated
}

export default useGradient
