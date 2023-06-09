# Solidity API

## BinPosition

```solidity
struct BinPosition {
  int256 totalLeveragedQty;
  uint256 totalEntryAmount;
  uint256 _totalMakerMargin;
  uint256 _totalTakerMargin;
  struct BinPendingPosition _pending;
  struct AccruedInterest _accruedInterest;
}
```

