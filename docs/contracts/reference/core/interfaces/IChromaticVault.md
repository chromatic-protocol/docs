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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |
  | earning | uint256 | The amount of earning accumulated. |

### MakerEarningDistributed

```solidity
event MakerEarningDistributed(address token, uint256 earning, uint256 usedKeeperFee)
```

_Emitted when maker earning is distributed._

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |
  | earning | uint256 | The amount of earning distributed. |
  | usedKeeperFee | uint256 | The amount of keeper fee used. |
  | marketBalance | uint256 | The balance of the market. |

### VaultEarningDistributorSet

```solidity
event VaultEarningDistributorSet(address vaultEarningDistributor, address oldVaultEarningDistributor)
```

Emitted when the vault earning distributor address is set.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | vaultEarningDistributor | address | The vault earning distributor address. |
  | oldVaultEarningDistributor | address | The old vault earning distributor address. |

### setVaultEarningDistributor

```solidity
function setVaultEarningDistributor(address _earningDistributor) external
```

### pendingMakerEarnings

```solidity
function pendingMakerEarnings(address token) external view returns (uint256)
```

### pendingMarketEarnings

```solidity
function pendingMarketEarnings(address market) external view returns (uint256)
```

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external
```

Creates a maker earning distribution task for a token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a maker earning distribution task for a token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### distributeMakerEarning

```solidity
function distributeMakerEarning(address token, uint256 fee, address keeper) external
```

Distributes the maker earning for a token to the each markets.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | fee | uint256 | The keeper fee amount. |
  | keeper | address | The keeper address to receive fee. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external
```

Creates a market earning distribution task for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### distributeMarketEarning

```solidity
function distributeMarketEarning(address market, uint256 fee, address keeper) external
```

Distributes the market earning for a market to the each bins.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |
  | fee | uint256 | The fee amount. |
  | keeper | address | The keeper address to receive fee. |

### acquireTradingLock

```solidity
function acquireTradingLock() external
```

### releaseTradingLock

```solidity
function releaseTradingLock() external
```

