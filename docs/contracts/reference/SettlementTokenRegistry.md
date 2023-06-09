# Solidity API

## SettlementTokenRegistry

```solidity
struct SettlementTokenRegistry {
  struct EnumerableSet.AddressSet _tokens;
  mapping(address => struct InterestRate.Record[]) _interestRateRecords;
  mapping(address => uint256) _minimumMargins;
  mapping(address => uint256) _flashLoanFeeRates;
  mapping(address => uint256) _earningDistributionThresholds;
  mapping(address => uint24) _uniswapFeeTiers;
}
```

