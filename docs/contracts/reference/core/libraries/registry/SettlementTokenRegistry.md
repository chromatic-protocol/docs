---
id: SettlementTokenRegistry
title: SettlementTokenRegistry.sol
---
# [SettlementTokenRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/registry/SettlementTokenRegistry.sol)

## SettlementTokenRegistry

```solidity
struct SettlementTokenRegistry {
  EnumerableSet.AddressSet _tokens;
  mapping(address => address) _oracleProviders;
  mapping(address => InterestRate.Record[]) _interestRateRecords;
  mapping(address => uint256) _minimumMargins;
  mapping(address => uint256) _flashLoanFeeRates;
  mapping(address => uint256) _earningDistributionThresholds;
  mapping(address => uint24) _uniswapFeeTiers;
}
```

_A registry for managing settlement tokens and their associated parameters._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tokens | EnumerableSet.AddressSet | Set of registered settlement tokens |
| _oracleProviders | mapping(address &#x3D;&gt; address) | Mapping of settlement tokens to their oracle provider address |
| _interestRateRecords | mapping(address &#x3D;&gt; InterestRate.Record[]) | Mapping of settlement tokens to their interest rate records |
| _minimumMargins | mapping(address &#x3D;&gt; uint256) | Mapping of settlement tokens to their minimum margins |
| _flashLoanFeeRates | mapping(address &#x3D;&gt; uint256) | Mapping of settlement tokens to their flash loan fee rates |
| _earningDistributionThresholds | mapping(address &#x3D;&gt; uint256) | Mapping of settlement tokens to their earning distribution thresholds |
| _uniswapFeeTiers | mapping(address &#x3D;&gt; uint24) | Mapping of settlement tokens to their Uniswap fee tiers |

## SettlementTokenRegistryLib

Library for managing the settlement token registry.

### registeredOnly

```solidity
modifier registeredOnly(struct SettlementTokenRegistry self, address token)
```

Modifier to check if a token is registered in the settlement token registry.

_Throws an error with the code `Errors.UNREGISTERED_TOKEN` if the settlement token is not registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the token to check. |

### register

```solidity
function register(struct SettlementTokenRegistry self, address token, address oracleProvider, uint256 minimumMargin, uint256 interestRate, uint256 flashLoanFeeRate, uint256 earningDistributionThreshold, uint24 uniswapFeeTier) internal
```

Registers a token in the settlement token registry.

_Throws an error with the code `Errors.ALREADY_REGISTERED_TOKEN` if the settlement token is already registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the token to register. |
  | oracleProvider | address | The oracle provider address for the token. |
  | minimumMargin | uint256 | The minimum margin for the token. |
  | interestRate | uint256 | The initial interest rate for the token. |
  | flashLoanFeeRate | uint256 | The flash loan fee rate for the token. |
  | earningDistributionThreshold | uint256 | The earning distribution threshold for the token. |
  | uniswapFeeTier | uint24 | The Uniswap fee tier for the token. |

### settlementTokens

```solidity
function settlementTokens(struct SettlementTokenRegistry self) internal view returns (address[])
```

Returns an array of all registered settlement tokens.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address[] | An array of addresses representing the registered settlement tokens. |

### isRegistered

```solidity
function isRegistered(struct SettlementTokenRegistry self, address token) internal view returns (bool)
```

Checks if a token is registered in the settlement token registry.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the token to check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | bool Whether the token is registered. |

### getOracleProvider

```solidity
function getOracleProvider(struct SettlementTokenRegistry self, address token) internal view returns (address)
```

Retrieves the oracle provider address for a asettlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the asettlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | address The oralce provider address for the asettlement token. |

### setOracleProvider

```solidity
function setOracleProvider(struct SettlementTokenRegistry self, address token, address oracleProvider) internal
```

Sets the oracle provider address for asettlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | oracleProvider | address | The new oracle provider address for the settlement token. |

### getMinimumMargin

```solidity
function getMinimumMargin(struct SettlementTokenRegistry self, address token) internal view returns (uint256)
```

Retrieves the minimum margin for a asettlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the asettlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The minimum margin for the asettlement token. |

### setMinimumMargin

```solidity
function setMinimumMargin(struct SettlementTokenRegistry self, address token, uint256 minimumMargin) internal
```

Sets the minimum margin for asettlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | minimumMargin | uint256 | The new minimum margin for the settlement token. |

### getFlashLoanFeeRate

```solidity
function getFlashLoanFeeRate(struct SettlementTokenRegistry self, address token) internal view returns (uint256)
```

Retrieves the flash loan fee rate for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The flash loan fee rate for the settlement token. |

### setFlashLoanFeeRate

```solidity
function setFlashLoanFeeRate(struct SettlementTokenRegistry self, address token, uint256 flashLoanFeeRate) internal
```

Sets the flash loan fee rate for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | flashLoanFeeRate | uint256 | The new flash loan fee rate for the settlement token. |

### getEarningDistributionThreshold

```solidity
function getEarningDistributionThreshold(struct SettlementTokenRegistry self, address token) internal view returns (uint256)
```

Retrieves the earning distribution threshold for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The earning distribution threshold for the token. |

### setEarningDistributionThreshold

```solidity
function setEarningDistributionThreshold(struct SettlementTokenRegistry self, address token, uint256 earningDistributionThreshold) internal
```

Sets the earning distribution threshold for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | earningDistributionThreshold | uint256 | The new earning distribution threshold for the settlement token. |

### getUniswapFeeTier

```solidity
function getUniswapFeeTier(struct SettlementTokenRegistry self, address token) internal view returns (uint24)
```

Retrieves the Uniswap fee tier for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint24 | uint24 The Uniswap fee tier for the settlement token. |

### setUniswapFeeTier

```solidity
function setUniswapFeeTier(struct SettlementTokenRegistry self, address token, uint24 uniswapFeeTier) internal
```

Sets the Uniswap fee tier for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | uniswapFeeTier | uint24 | The new Uniswap fee tier for the settlement token. |

### appendInterestRateRecord

```solidity
function appendInterestRateRecord(struct SettlementTokenRegistry self, address token, uint256 annualRateBPS, uint256 beginTimestamp) internal
```

Appends an interest rate record for a settlement token.

_Throws an error if the settlement token is not registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | annualRateBPS | uint256 | The annual interest rate in basis points. |
  | beginTimestamp | uint256 | The timestamp when the interest rate begins. |

### removeLastInterestRateRecord

```solidity
function removeLastInterestRateRecord(struct SettlementTokenRegistry self, address token) internal returns (bool removed, struct InterestRate.Record record)
```

Removes the last interest rate record for a settlement token.

_The current time must be less than the begin timestamp of the last record.
     Throws an error with the code `Errors.INTEREST_RATE_ALREADY_APPLIED` if not.
Throws an error if the settlement token is not registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | removed | bool | Whether the removal was successful |
  | record | struct InterestRate.Record | The removed interest rate record. |

### currentInterestRate

```solidity
function currentInterestRate(struct SettlementTokenRegistry self, address token) internal view returns (uint256 annualRateBPS)
```

Retrieves the current interest rate for a settlement token.

_Throws an error if the settlement token is not registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | annualRateBPS | uint256 | The current annual interest rate in basis points. |

### calculateInterest

```solidity
function calculateInterest(struct SettlementTokenRegistry self, address token, uint256 amount, uint256 from, uint256 to) internal view returns (uint256)
```

Calculates the interest accrued for a settlement token within a specified time range.

_Throws an error if the token is not registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |
  | amount | uint256 | The amount of settlement tokens to calculate interest for. |
  | from | uint256 | The starting timestamp of the interest calculation (inclusive). |
  | to | uint256 | The ending timestamp of the interest calculation (exclusive). |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The calculated interest amount. |

### getInterestRateRecords

```solidity
function getInterestRateRecords(struct SettlementTokenRegistry self, address token) internal view returns (struct InterestRate.Record[])
```

Retrieves the array of interest rate records for a settlement token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct InterestRate.Record[] | The array of interest rate records. |

