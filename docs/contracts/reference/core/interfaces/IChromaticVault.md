---
id: IChromaticVault
title: IChromaticVault.sol
---
# [IChromaticVault.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IChromaticVault.sol)

## IChromaticVault

Interface for the Chromatic Vault contract.

### MarketEarningAccumulated

```solidity
event MarketEarningAccumulated(address market, uint256 earning)
```

_Emitted when market earning is accumulated._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| earning | uint256 | The amount of earning accumulated. |

### MakerEarningDistributed

```solidity
event MakerEarningDistributed(address token, uint256 earning, uint256 usedKeeperFee)
```

_Emitted when maker earning is distributed._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| earning | uint256 | The amount of earning distributed. |
| usedKeeperFee | uint256 | The amount of keeper fee used. |

### MarketEarningDistributed

```solidity
event MarketEarningDistributed(address market, uint256 earning, uint256 usedKeeperFee, uint256 marketBalance)
```

_Emitted when market earning is distributed._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| earning | uint256 | The amount of earning distributed. |
| usedKeeperFee | uint256 | The amount of keeper fee used. |
| marketBalance | uint256 | The balance of the market. |

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external
```

Creates a maker earning distribution task for a token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a maker earning distribution task for a token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external
```

Creates a market earning distribution task for a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

