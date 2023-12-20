---
id: IChromaticMarketFactory
title: IChromaticMarketFactory.sol
---
# [IChromaticMarketFactory.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IChromaticMarketFactory.sol)

## IChromaticMarketFactory

_Interface for the Chromatic Market Factory contract._

### DaoUpdated

```solidity
event DaoUpdated(address daoOld, address daoNew)
```

Emitted when the DAO address is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | daoOld | address | The old DAO address. |
  | daoNew | address | The new DAO address. |

### TreasuryUpdated

```solidity
event TreasuryUpdated(address treasuryOld, address treasuryNew)
```

Emitted when the DAO treasury address is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | treasuryOld | address | The old DAO treasury address. |
  | treasuryNew | address | The new DAO treasury address. |

### LiquidatorUpdated

```solidity
event LiquidatorUpdated(address liquidatorOld, address liquidatorNew)
```

Emitted when the liquidator address is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | liquidatorOld | address | The old liquidator address. |
  | liquidatorNew | address | The new liquidator address. |

### KeeperFeePayerUpdated

```solidity
event KeeperFeePayerUpdated(address keeperFeePayerOld, address keeperFeePayerNew)
```

Emitted when the keeper fee payer address is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | keeperFeePayerOld | address | The old keeper fee payer address. |
  | keeperFeePayerNew | address | The new keeper fee payer address. |

### DefaultProtocolFeeRateUpdated

```solidity
event DefaultProtocolFeeRateUpdated(uint16 defaultProtocolFeeRateOld, uint16 defaultProtocolFeeRateNew)
```

Emitted when the default protocol fee rate is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | defaultProtocolFeeRateOld | uint16 | The old default protocol fee rate. |
  | defaultProtocolFeeRateNew | uint16 | The new default protocol fee rate. |

### VaultSet

```solidity
event VaultSet(address vault)
```

Emitted when the vault address is set.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | vault | address | The vault address. |

### MarketSettlementUpdated

```solidity
event MarketSettlementUpdated(address marketSettlementOld, address marketSettlementNew)
```

Emitted when the market settlement task address is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketSettlementOld | address | The old market settlement task address. |
  | marketSettlementNew | address | The new market settlement task address. |

### MarketCreated

```solidity
event MarketCreated(address oracleProvider, address settlementToken, address market)
```

Emitted when a market is created.

- Parameters:

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

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the DAO. |

### treasury

```solidity
function treasury() external view returns (address)
```

Returns the address of the DAO treasury.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the DAO treasury. |

### liquidator

```solidity
function liquidator() external view returns (address)
```

Returns the address of the liquidator.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the liquidator. |

### vault

```solidity
function vault() external view returns (address)
```

Returns the address of the vault.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the vault. |

### keeperFeePayer

```solidity
function keeperFeePayer() external view returns (address)
```

Returns the address of the keeper fee payer.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the keeper fee payer. |

### marketSettlement

```solidity
function marketSettlement() external view returns (address)
```

Returns the address of the market settlement task.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the market settlement task. |

### defaultProtocolFeeRate

```solidity
function defaultProtocolFeeRate() external view returns (uint16)
```

Returns the default protocol fee rate.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint16 | The default protocol fee rate. |

### updateDao

```solidity
function updateDao(address _dao) external
```

Updates the DAO address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _dao | address | The new DAO address. |

### updateTreasury

```solidity
function updateTreasury(address _treasury) external
```

Updates the DAO treasury address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _treasury | address | The new DAO treasury address. |

### updateLiquidator

```solidity
function updateLiquidator(address _liquidator) external
```

Updates the liquidator address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidator | address | The new liquidator address. |

### updateKeeperFeePayer

```solidity
function updateKeeperFeePayer(address _keeperFeePayer) external
```

Updates the keeper fee payer address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _keeperFeePayer | address | The new keeper fee payer address. |

### updateDefaultProtocolFeeRate

```solidity
function updateDefaultProtocolFeeRate(uint16 _defaultProtocolFeeRate) external
```

Updates the default protocl fee rate.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _defaultProtocolFeeRate | uint16 | The new default protocol fee rate. |

### setVault

```solidity
function setVault(address _vault) external
```

Sets the vault address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _vault | address | The vault address. |

### updateMarketSettlement

```solidity
function updateMarketSettlement(address _marketSettlement) external
```

Updates the market settlement task address.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _marketSettlement | address | The new market settlement task address. |

### getMarkets

```solidity
function getMarkets() external view returns (address[] markets)
```

Returns an array of all market addresses.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | markets | address[] | An array of all market addresses. |

### getMarketsBySettlmentToken

```solidity
function getMarketsBySettlmentToken(address settlementToken) external view returns (address[])
```

Returns an array of market addresses associated with a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | settlementToken | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address[] | An array of market addresses. |

### getMarket

```solidity
function getMarket(address oracleProvider, address settlementToken) external view returns (address)
```

Returns the address of a market associated with an oracle provider and settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | settlementToken | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the market. |

### createMarket

```solidity
function createMarket(address oracleProvider, address settlementToken) external
```

Creates a new market associated with an oracle provider and settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | settlementToken | address | The address of the settlement token. |

### isRegisteredMarket

```solidity
function isRegisteredMarket(address market) external view returns (bool)
```

Checks if a market is registered.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | True if the market is registered, false otherwise. |

