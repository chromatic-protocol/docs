# Solidity API

## IChromaticMarketFactory

_Interface for the Chromatic Market Factory contract._

### UpdateDao

```solidity
event UpdateDao(address dao)
```

Emitted when the DAO address is updated.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dao | address | The new DAO address. |

### UpdateTreasury

```solidity
event UpdateTreasury(address treasury)
```

Emitted when the DAO treasury address is updated.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| treasury | address | The new DAO treasury address. |

### SetLiquidator

```solidity
event SetLiquidator(address liquidator)
```

Emitted when the liquidator address is set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| liquidator | address | The liquidator address. |

### SetVault

```solidity
event SetVault(address vault)
```

Emitted when the vault address is set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault address. |

### SetKeeperFeePayer

```solidity
event SetKeeperFeePayer(address keeperFeePayer)
```

Emitted when the keeper fee payer address is set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| keeperFeePayer | address | The keeper fee payer address. |

### MarketCreated

```solidity
event MarketCreated(address oracleProvider, address settlementToken, address market)
```

Emitted when a market is created.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider. |
| settlementToken | address | The address of the settlement token. |
| market | address | The address of the created market. |

### dao

```solidity
function dao() external view returns (address)
```

Returns the address of the DAO.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the DAO. |

### treasury

```solidity
function treasury() external view returns (address)
```

Returns the address of the DAO treasury.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the DAO treasury. |

### liquidator

```solidity
function liquidator() external view returns (address)
```

Returns the address of the liquidator.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the liquidator. |

### vault

```solidity
function vault() external view returns (address)
```

Returns the address of the vault.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the vault. |

### keeperFeePayer

```solidity
function keeperFeePayer() external view returns (address)
```

Returns the address of the keeper fee payer.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the keeper fee payer. |

### updateDao

```solidity
function updateDao(address dao) external
```

Updates the DAO address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dao | address | The new DAO address. |

### updateTreasury

```solidity
function updateTreasury(address treasury) external
```

Updates the DAO treasury address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| treasury | address | The new DAO treasury address. |

### setLiquidator

```solidity
function setLiquidator(address liquidator) external
```

Sets the liquidator address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| liquidator | address | The liquidator address. |

### setVault

```solidity
function setVault(address vault) external
```

Sets the vault address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault address. |

### setKeeperFeePayer

```solidity
function setKeeperFeePayer(address keeperFeePayer) external
```

Sets the keeper fee payer address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| keeperFeePayer | address | The keeper fee payer address. |

### getMarkets

```solidity
function getMarkets() external view returns (address[] markets)
```

Returns an array of all market addresses.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| markets | address[] | An array of all market addresses. |

### getMarketsBySettlmentToken

```solidity
function getMarketsBySettlmentToken(address settlementToken) external view returns (address[])
```

Returns an array of market addresses associated with a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of market addresses. |

### getMarket

```solidity
function getMarket(address oracleProvider, address settlementToken) external view returns (address)
```

Returns the address of a market associated with an oracle provider and settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider. |
| settlementToken | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market. |

### createMarket

```solidity
function createMarket(address oracleProvider, address settlementToken) external
```

Creates a new market associated with an oracle provider and settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider. |
| settlementToken | address | The address of the settlement token. |

### isRegisteredMarket

```solidity
function isRegisteredMarket(address market) external view returns (bool)
```

Checks if a market is registered.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the market is registered, false otherwise. |

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external
```

Creates a Maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a Maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external
```

Creates a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

