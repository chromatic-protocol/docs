const defaultTheme = require('tailwindcss/defaultTheme')
const monospace = (function () {
  const fonts = defaultTheme.fontFamily.mono
  const monospace = fonts.find((font) => font === 'monospace')
  if (monospace === null || monospace === undefined) {
    throw new Error('no monospace')
  }
  return monospace
})()

export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const darkMode = ['class', '[data-theme="dark"]']
export const theme = {
  extend: {
    fontFamily: {
      mono: ['Source Code Pro', monospace]
    },
    colors: {
      current: 'currentColor',
      black: '#030303',
      gray: '#D4D4D4',
      grayL: '#EEEEEE',
      grayD: '#333333',
      grayD2: '#5A5A5A',

      standby: '#FF8A00',
      completed: '#00E23F',
      inprocess: '#08E3D6',

      long: '#a6d85b',
      short: '#fb6115'
    },
    boxShadow: {
      md: '4px 4px 20px rgba(121, 121, 121, 0.08)',
      lg: '4px 4px 32px rgba(229, 229, 229, 0.18)',
      xl: '4px 4px 60px rgba(229, 229, 229, 0.16)'
    },
    fontSize: {
      xs: ['10px', 'normal'],
      sm: ['11px', 'normal'],
      base: ['12px', 'normal'],
      lg: ['14px', 'normal'],
      xl: ['16px', 'normal'],
      '2xl': ['20px', 'normal'],
      '3xl': ['24px', 'normal'],
      '4xl': ['32px', 'normal']
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite'
    }
  }
}
export const plugins = []
export const corePlugins = { preflight: false }
