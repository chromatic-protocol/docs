import React, { useEffect, useState, useCallback, useContext, useMemo, type ReactNode } from 'react'
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
  const breakpoints = {
    mobile: 1024
  }

  const mobileColor = Colors.light
  const pcColor = Colors.dark

  // State for color mode
  const [color, setColorState] = useState<Color>(getColorMode(getWindowWidth()))

  // Function to get the window width or a default value if window is not available
  function getWindowWidth(): number {
    return typeof window !== 'undefined' ? window.innerWidth : 1024
  }

  // Function to determine color mode based on window width
  function getColorMode(windowWidth: number): Color {
    return windowWidth <= breakpoints.mobile ? mobileColor : pcColor
  }

  // Event listener to update color mode when the window is resized
  useEffect(() => {
    const updateColorMode = () => {
      const newColor = getColorMode(getWindowWidth())
      setColorState(newColor)
    }

    // Check if running on the client side before updating color mode
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateColorMode)
      updateColorMode()

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', updateColorMode)
      }
    }
  }, [])

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
