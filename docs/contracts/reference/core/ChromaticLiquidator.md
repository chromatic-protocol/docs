---
id: ChromaticLiquidator
title: ChromaticLiquidator.sol
---
# [ChromaticLiquidator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/ChromaticLiquidator.sol)

## ChromaticLiquidator

_A contract that handles the liquidation and claiming of positions in Chromatic markets.
     It extends the Liquidator and AutomateReady contracts and implements the IChromaticLiquidator interface._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate, address opsProxyFactory) public
```

_Constructor function._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
| _automate | address | The address of the Gelato Automate contract. |
| opsProxyFactory | address | The address of the Ops Proxy Factory contract. |

### getAutomate

```solidity
function getAutomate() internal view returns (contract IAutomate)
```

_Retrieves the IAutomate contract instance._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IAutomate | IAutomate The IAutomate contract instance. |

### liquidate

```solidity
function liquidate(address market, uint256 positionId) external
```

Liquidates a position in a market.

_Can only be called by the dedicated message sender._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be liquidated. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position in a market.

_Can only be called by the dedicated message sender._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be claimed. |

