# Solidity API

## BinClosedPosition

```solidity
struct BinClosedPosition {
  uint256 _totalMakerMargin;
  struct BinClosingPosition _closing;
  struct EnumerableSet.UintSet _waitingVersions;
  mapping(uint256 => struct _ClaimWaitingPosition) _waitingPositions;
  struct AccruedInterest _accruedInterest;
}
```

