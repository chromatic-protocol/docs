# Solidity API

## LpContext

```solidity
struct LpContext {
  contract IOracleProvider oracleProvider;
  contract IInterestCalculator interestCalculator;
  contract IChromaticVault vault;
  contract ICLBToken clbToken;
  address market;
  address settlementToken;
  uint256 tokenPrecision;
  struct IOracleProvider.OracleVersion _currentVersionCache;
}
```

