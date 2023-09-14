---
id: IMarketSettle
title: IMarketSettle.sol
---
# [IMarketSettle.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketSettle.sol)

## IMarketSettle

_Interface for market settlement._

### settle

```solidity
function settle(int16[] feeRates) external
```

Executes the settlement process for the Chromatic market.

_This function is called to settle the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | feeRates | int16[] | The feeRate list of liquidity bin to settle. |

### settleAll

```solidity
function settleAll() external
```

Executes the settlement process for the Chromatic market.

_This function is called to settle the market._

