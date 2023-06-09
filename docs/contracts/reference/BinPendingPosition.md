# Solidity API

## BinPendingPosition

```solidity
struct BinPendingPosition {
  uint256 openVersion;
  int256 totalLeveragedQty;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
  struct AccruedInterest accruedInterest;
}
```

