import React, { useState, useCallback, useContext, useMemo, type ReactNode } from 'react'
import { useLocalPathname, useColorMode } from '@docusaurus/theme-common/internal'

type ContextValue = {
  readonly color: Color
  readonly setColor: (color: Color) => void
}

const Context = React.createContext<ContextValue | undefined>(undefined)

const Colors = {
  light: 'light',
  dark: 'dark'
} as const

export type Color = (typeof Colors)[keyof typeof Colors]

function useContextValue(): ContextValue {
  // landing default color mode
  const [color, setColorState] = useState<Color>(Colors.light)

  const setColor = useCallback((newColor: Color | null) => {
    setColorState(newColor)
  }, [])

  return useMemo(
    () => ({
      color,
      setColor
    }),
    [color, setColor]
  )
}

export function ColorProvider({ children }: { children: ReactNode }): JSX.Element {
  const value = useContextValue()
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useColor(): ContextValue {
  const localPathName = useLocalPathname()
  const { colorMode, setColorMode } = useColorMode()

  const isHome = useMemo(() => {
    return localPathName === '/'
  }, [localPathName])

  const context = useContext(Context)

  if (isHome) {
    return context
  } else {
    return {
      color: colorMode,
      setColor: setColorMode
    }
  }
}
