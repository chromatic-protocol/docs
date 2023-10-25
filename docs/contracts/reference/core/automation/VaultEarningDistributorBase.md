---
id: VaultEarningDistributorBase
title: VaultEarningDistributorBase.sol
---
# [VaultEarningDistributorBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/VaultEarningDistributorBase.sol)

## VaultEarningDistributorBase

### factory

```solidity
contract IChromaticMarketFactory factory
```

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

_Throws an error indicating that the caller is not the chromatch vault contract._

### ExistMakerEarningDistributionTask

```solidity
error ExistMakerEarningDistributionTask()
```

_Throws an error indicating that a maker earning distribution task already exists._

### ExistMarketEarningDistributionTask

```solidity
error ExistMarketEarningDistributionTask()
```

_Throws an error indicating that a market earning distribution task already exists._

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict a function to be called only by the vault contract.
     Throws an `OnlyAccessableByVault` error if the caller is not the chromatic vault contract._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory) internal
```

### distributeMakerEarning

```solidity
function distributeMakerEarning(address token) public
```

Distributes the maker earning for a token to the each markets.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### distributeMarketEarning

```solidity
function distributeMarketEarning(address market) public
```

Distributes the market earning for a market to the each bins.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### _getFeeInfo

```solidity
function _getFeeInfo() internal view virtual returns (uint256 fee, address feePayee)
```

### _makerEarningDistributable

```solidity
function _makerEarningDistributable(address token) internal view returns (bool)
```

_Internal function to check if the maker earning is distributable for a token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | True if the maker earning is distributable, False otherwise. |

### _marketEarningDistributable

```solidity
function _marketEarningDistributable(address market) internal view returns (bool)
```

_Internal function to check if the market earning is distributable for a market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | True if the market earning is distributable, False otherwise. |

