# Solidity API

## PositionParam

```solidity
struct PositionParam {
  uint256 openVersion;
  uint256 closeVersion;
  int256 leveragedQty;
  uint256 takerMargin;
  uint256 makerMargin;
  uint256 openTimestamp;
  uint256 closeTimestamp;
  struct IOracleProvider.OracleVersion _entryVersionCache;
  struct IOracleProvider.OracleVersion _exitVersionCache;
}
```

