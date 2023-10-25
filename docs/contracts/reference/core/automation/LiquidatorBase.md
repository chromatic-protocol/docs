---
id: LiquidatorBase
title: LiquidatorBase.sol
---
# [LiquidatorBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/LiquidatorBase.sol)

## LiquidatorBase

### factory

```solidity
contract IChromaticMarketFactory factory
```

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyMarket

```solidity
modifier onlyMarket()
```

_Modifier to check if the calling contract is a registered market.
     Throws an `OnlyAccessableByMarket` error if the caller is not a registered market._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory) internal
```

_Constructor function._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |

### liquidate

```solidity
function liquidate(address market, uint256 positionId) public
```

Liquidates a position in a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |
  | positionId | uint256 | The ID of the position to be liquidated. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) public
```

Claims a position in a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |
  | positionId | uint256 | The ID of the position to be claimed. |

### _getFeeInfo

```solidity
function _getFeeInfo() internal view virtual returns (uint256 fee, address feePayee)
```

