---
id: ISettlementTokenRegistry
title: ISettlementTokenRegistry.sol
---
# [ISettlementTokenRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/factory/ISettlementTokenRegistry.sol)

## ISettlementTokenRegistry

_Interface for the Settlement Token Registry contract._

### SettlementTokenRegistered

```solidity
event SettlementTokenRegistered(address token, address oracleProvider, uint256 minimumMargin, uint256 interestRate, uint256 flashLoanFeeRate, uint256 earningDistributionThreshold, uint24 uniswapFeeTier)
```

_Emitted when a new settlement token is registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the registered settlement token. |
  | oracleProvider | address | The oracle provider address for the settlement token. |
  | minimumMargin | uint256 | The minimum margin for the markets using this settlement token. |
  | interestRate | uint256 | The interest rate for the settlement token. |
  | flashLoanFeeRate | uint256 | The flash loan fee rate for the settlement token. |
  | earningDistributionThreshold | uint256 | The earning distribution threshold for the settlement token. |
  | uniswapFeeTier | uint24 | The Uniswap fee tier for the settlement token. |

### SetSettlementTokenOracleProvider

```solidity
event SetSettlementTokenOracleProvider(address token, address oracleProvider)
```

_Emitted when the oracle provider address for a settlement token is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | oracleProvider | address | The oracle provider address for the settlement token. |

### SetMinimumMargin

```solidity
event SetMinimumMargin(address token, uint256 minimumMargin)
```

_Emitted when the minimum margin for a settlement token is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | minimumMargin | uint256 | The new minimum margin for the settlement token. |

### SetFlashLoanFeeRate

```solidity
event SetFlashLoanFeeRate(address token, uint256 flashLoanFeeRate)
```

_Emitted when the flash loan fee rate for a settlement token is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | flashLoanFeeRate | uint256 | The new flash loan fee rate for the settlement token. |

### SetEarningDistributionThreshold

```solidity
event SetEarningDistributionThreshold(address token, uint256 earningDistributionThreshold)
```

_Emitted when the earning distribution threshold for a settlement token is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | earningDistributionThreshold | uint256 | The new earning distribution threshold for the settlement token. |

### SetUniswapFeeTier

```solidity
event SetUniswapFeeTier(address token, uint24 uniswapFeeTier)
```

_Emitted when the Uniswap fee tier for a settlement token is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | uniswapFeeTier | uint24 | The new Uniswap fee tier for the settlement token. |

### InterestRateRecordAppended

```solidity
event InterestRateRecordAppended(address token, uint256 annualRateBPS, uint256 beginTimestamp)
```

_Emitted when an interest rate record is appended for a settlement token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | annualRateBPS | uint256 | The annual interest rate in basis points (BPS). |
  | beginTimestamp | uint256 | The timestamp when the interest rate record begins. |

### LastInterestRateRecordRemoved

```solidity
event LastInterestRateRecordRemoved(address token, uint256 annualRateBPS, uint256 beginTimestamp)
```

_Emitted when the last interest rate record is removed for a settlement token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | annualRateBPS | uint256 | The annual interest rate in basis points (BPS). |
  | beginTimestamp | uint256 | The timestamp when the interest rate record begins. |

### registerSettlementToken

```solidity
function registerSettlementToken(address token, address oracleProvider, uint256 minimumMargin, uint256 interestRate, uint256 flashLoanFeeRate, uint256 earningDistributionThreshold, uint24 uniswapFeeTier) external
```

Registers a new settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token to register. |
  | oracleProvider | address | The oracle provider address for the settlement token. |
  | minimumMargin | uint256 | The minimum margin for the settlement token. |
  | interestRate | uint256 | The interest rate for the settlement token. |
  | flashLoanFeeRate | uint256 | The flash loan fee rate for the settlement token. |
  | earningDistributionThreshold | uint256 | The earning distribution threshold for the settlement token. |
  | uniswapFeeTier | uint24 | The Uniswap fee tier for the settlement token. |

### registeredSettlementTokens

```solidity
function registeredSettlementTokens() external view returns (address[])
```

Gets the list of registered settlement tokens.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address[] | An array of addresses representing the registered settlement tokens. |

### isRegisteredSettlementToken

```solidity
function isRegisteredSettlementToken(address token) external view returns (bool)
```

Checks if a settlement token is registered.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token to check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | True if the settlement token is registered, false otherwise. |

### getSettlementTokenOracleProvider

```solidity
function getSettlementTokenOracleProvider(address token) external view returns (address)
```

Gets the oracle provider address for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The oracle provider address for the settlement token. |

### setSettlementTokenOracleProvider

```solidity
function setSettlementTokenOracleProvider(address token, address oracleProvider) external
```

Sets the oracle provider address for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | oracleProvider | address | The new oracle provider address for the settlement token. |

### getMinimumMargin

```solidity
function getMinimumMargin(address token) external view returns (uint256)
```

Gets the minimum margin for a settlement token.

_The minimumMargin is used as the minimum value for the taker margin of a position
     or as the minimum value for the maker margin of each bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The minimum margin for the settlement token. |

### setMinimumMargin

```solidity
function setMinimumMargin(address token, uint256 minimumMargin) external
```

Sets the minimum margin for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | minimumMargin | uint256 | The new minimum margin for the settlement token. |

### getFlashLoanFeeRate

```solidity
function getFlashLoanFeeRate(address token) external view returns (uint256)
```

Gets the flash loan fee rate for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The flash loan fee rate for the settlement token. |

### setFlashLoanFeeRate

```solidity
function setFlashLoanFeeRate(address token, uint256 flashLoanFeeRate) external
```

Sets the flash loan fee rate for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | flashLoanFeeRate | uint256 | The new flash loan fee rate for the settlement token. |

### getEarningDistributionThreshold

```solidity
function getEarningDistributionThreshold(address token) external view returns (uint256)
```

Gets the earning distribution threshold for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The earning distribution threshold for the settlement token. |

### setEarningDistributionThreshold

```solidity
function setEarningDistributionThreshold(address token, uint256 earningDistributionThreshold) external
```

Sets the earning distribution threshold for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | earningDistributionThreshold | uint256 | The new earning distribution threshold for the settlement token. |

### getUniswapFeeTier

```solidity
function getUniswapFeeTier(address token) external view returns (uint24)
```

Gets the Uniswap fee tier for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint24 | The Uniswap fee tier for the settlement token. |

### setUniswapFeeTier

```solidity
function setUniswapFeeTier(address token, uint24 uniswapFeeTier) external
```

Sets the Uniswap fee tier for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | uniswapFeeTier | uint24 | The new Uniswap fee tier for the settlement token. |

### appendInterestRateRecord

```solidity
function appendInterestRateRecord(address token, uint256 annualRateBPS, uint256 beginTimestamp) external
```

Appends an interest rate record for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | annualRateBPS | uint256 | The annual interest rate in basis points (BPS). |
  | beginTimestamp | uint256 | The timestamp when the interest rate record begins. |

### removeLastInterestRateRecord

```solidity
function removeLastInterestRateRecord(address token) external
```

Removes the last interest rate record for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### currentInterestRate

```solidity
function currentInterestRate(address token) external view returns (uint256)
```

Gets the current interest rate for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The current interest rate for the settlement token. |

### getInterestRateRecords

```solidity
function getInterestRateRecords(address token) external view returns (struct InterestRate.Record[])
```

Gets all the interest rate records for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct InterestRate.Record[] | An array of interest rate records for the settlement token. |

