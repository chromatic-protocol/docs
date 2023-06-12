---
id: ChromaticMarket
title: ChromaticMarket.sol
---
# [ChromaticMarket.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/ChromaticMarket.sol)

## ChromaticMarket

_A contract that represents a Chromatic market, combining trade and liquidity functionalities._

### settle

```solidity
function settle() external
```

Executes the settlement process for the Chromatic market.

_This function settles the market by synchronizing the oracle version
     and calling the settle function of the liquidity pool._

