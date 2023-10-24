---
id: IVaultEarningDistributor
title: IVaultEarningDistributor.sol
---
# [IVaultEarningDistributor.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IVaultEarningDistributor.sol)

## IVaultEarningDistributor

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

### resolveMakerEarningDistribution

```solidity
function resolveMakerEarningDistribution(address token) external view returns (bool canExec, bytes execPayload)
```

Resolves the maker earning distribution for a specific token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | True if the distribution can be executed, otherwise False. |
  | execPayload | bytes | The payload for executing the distribution. |

### distributeMakerEarning

```solidity
function distributeMakerEarning(address token) external
```

Distributes the maker earning for a token to the each markets.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

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

### resolveMarketEarningDistribution

```solidity
function resolveMarketEarningDistribution(address market) external view returns (bool canExec, bytes execPayload)
```

Resolves the market earning distribution for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | True if the distribution can be executed. |
  | execPayload | bytes | The payload for executing the distribution. |

### distributeMarketEarning

```solidity
function distributeMarketEarning(address market) external
```

Distributes the market earning for a market to the each bins.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

