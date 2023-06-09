# Solidity API

## Position

```solidity
struct Position {
  uint256 id;
  uint256 openVersion;
  uint256 closeVersion;
  int224 qty;
  uint32 leverage;
  uint256 openTimestamp;
  uint256 closeTimestamp;
  uint256 takerMargin;
  address owner;
  struct BinMargin[] _binMargins;
}
```

