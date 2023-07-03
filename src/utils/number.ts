export function trimDecimal(value: number, decimal?: number) {
  return +value.toFixed(decimal ?? 2)
}
