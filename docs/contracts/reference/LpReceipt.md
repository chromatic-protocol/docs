# Solidity API

## LpReceipt

```solidity
struct LpReceipt {
  uint256 id;
  uint256 oracleVersion;
  uint256 amount;
  address recipient;
  enum LpAction action;
  int16 tradingFeeRate;
}
```

