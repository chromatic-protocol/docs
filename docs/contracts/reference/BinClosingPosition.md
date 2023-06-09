# Solidity API

## BinClosingPosition

```solidity
struct BinClosingPosition {
  uint256 closeVersion;
  int256 totalLeveragedQty;
  uint256 totalEntryAmount;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
  struct AccruedInterest accruedInterest;
}
```

