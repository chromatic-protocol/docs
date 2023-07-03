export function gradient(color1: string, color2: string, ratio: number) {
  const from = getRgb(color1)
  const to = getRgb(color2)

  const r = Math.ceil(to.r * ratio + from.r * (1 - ratio))
  const g = Math.ceil(to.g * ratio + from.g * (1 - ratio))
  const b = Math.ceil(to.b * ratio + from.b * (1 - ratio))

  return '#' + getHex(r) + getHex(g) + getHex(b)
}

function getRgb(color: string) {
  const hex = color.replace('#', '')
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  }
}

function getHex(num: number) {
  const str = num.toString(16)
  return str.length == 1 ? '0' + str : str
}
