# Solidity API

## LiquidityPool

```solidity
struct LiquidityPool {
  mapping(uint16 => struct LiquidityBin) _longBins;
  mapping(uint16 => struct LiquidityBin) _shortBins;
}
```

