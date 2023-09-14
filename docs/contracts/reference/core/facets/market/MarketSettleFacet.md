---
id: MarketSettleFacet
title: MarketSettleFacet.sol
---
# [MarketSettleFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketSettleFacet.sol)

## MarketSettleFacet

### settle

```solidity
function settle(int16[] feeRates) external
```

Executes the settlement process for the Chromatic market.

_This function settles the market by synchronizing the oracle version
     and calling the settle function of the liquidity pool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | feeRates | int16[] | The feeRate list of liquidity bin to settle. |

### settleAll

```solidity
function settleAll() external
```

Executes the settlement process for the Chromatic market.

_This function settles the market by synchronizing the oracle version
     and calling the settle function of the liquidity pool._

