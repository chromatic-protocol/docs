# Solidity API

## SettlementTokenRegistry

```solidity
struct SettlementTokenRegistry {
  struct EnumerableSet.AddressSet _tokens;
  mapping(address => struct InterestRate.Record[]) _interestRateRecords;
  mapping(address => uint256) _minimumMargins;
  mapping(address => uint256) _flashLoanFeeRates;
  mapping(address => uint256) _earningDistributionThresholds;
  mapping(address => uint24) _uniswapFeeTiers;
}
```

## SettlementTokenRegistryLib

Library for managing the settlement token registry.

### registeredOnly

```solidity
modifier registeredOnly(struct SettlementTokenRegistry self, address token)
```

Modifier to check if a token is registered in the settlement token registry.

_Throws an error if the token is not registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the token to check. |

### register

```solidity
function register(struct SettlementTokenRegistry self, address token, uint256 minimumMargin, uint256 interestRate, uint256 flashLoanFeeRate, uint256 earningDistributionThreshold, uint24 uniswapFeeTier) external
```

Registers a token in the settlement token registry.

_Throws an error if the token is already registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the token to register. |
| minimumMargin | uint256 | The minimum margin for the token. |
| interestRate | uint256 | The initial interest rate for the token. |
| flashLoanFeeRate | uint256 | The flash loan fee rate for the token. |
| earningDistributionThreshold | uint256 | The earning distribution threshold for the token. |
| uniswapFeeTier | uint24 | The Uniswap fee tier for the token. |

### settlementTokens

```solidity
function settlementTokens(struct SettlementTokenRegistry self) external view returns (address[])
```

Returns an array of all registered settlement tokens.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of addresses representing the registered settlement tokens. |

### isRegistered

```solidity
function isRegistered(struct SettlementTokenRegistry self, address token) external view returns (bool)
```

Checks if a token is registered in the settlement token registry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the token to check. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool Whether the token is registered. |

### getMinimumMargin

```solidity
function getMinimumMargin(struct SettlementTokenRegistry self, address token) external view returns (uint256)
```

Retrieves the minimum margin for a asettlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the asettlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The minimum margin for the asettlement token. |

### setMinimumMargin

```solidity
function setMinimumMargin(struct SettlementTokenRegistry self, address token, uint256 minimumMargin) external
```

Sets the minimum margin for asettlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| minimumMargin | uint256 | The new minimum margin for the settlement token. |

### getFlashLoanFeeRate

```solidity
function getFlashLoanFeeRate(struct SettlementTokenRegistry self, address token) external view returns (uint256)
```

Retrieves the flash loan fee rate for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The flash loan fee rate for the settlement token. |

### setFlashLoanFeeRate

```solidity
function setFlashLoanFeeRate(struct SettlementTokenRegistry self, address token, uint256 flashLoanFeeRate) external
```

Sets the flash loan fee rate for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| flashLoanFeeRate | uint256 | The new flash loan fee rate for the settlement token. |

### getEarningDistributionThreshold

```solidity
function getEarningDistributionThreshold(struct SettlementTokenRegistry self, address token) external view returns (uint256)
```

Retrieves the earning distribution threshold for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The earning distribution threshold for the token. |

### setEarningDistributionThreshold

```solidity
function setEarningDistributionThreshold(struct SettlementTokenRegistry self, address token, uint256 earningDistributionThreshold) external
```

Sets the earning distribution threshold for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| earningDistributionThreshold | uint256 | The new earning distribution threshold for the settlement token. |

### getUniswapFeeTier

```solidity
function getUniswapFeeTier(struct SettlementTokenRegistry self, address token) external view returns (uint24)
```

Retrieves the Uniswap fee tier for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | uint24 The Uniswap fee tier for the settlement token. |

### setUniswapFeeTier

```solidity
function setUniswapFeeTier(struct SettlementTokenRegistry self, address token, uint24 uniswapFeeTier) external
```

Sets the Uniswap fee tier for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| uniswapFeeTier | uint24 | The new Uniswap fee tier for the settlement token. |

### appendInterestRateRecord

```solidity
function appendInterestRateRecord(struct SettlementTokenRegistry self, address token, uint256 annualRateBPS, uint256 beginTimestamp) external
```

Appends an interest rate record for a settlement token.

_Throws an error if the settlement token is not registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| annualRateBPS | uint256 | The annual interest rate in basis points. |
| beginTimestamp | uint256 | The timestamp when the interest rate begins. |

### removeLastInterestRateRecord

```solidity
function removeLastInterestRateRecord(struct SettlementTokenRegistry self, address token) external returns (bool removed, struct InterestRate.Record record)
```

Removes the last interest rate record for a settlement token.

_The current time must be less than the begin timestamp of the last record.
     Otherwise throws an error with the message `INTEREST_RATE_ALREADY_APPLIED`.
Throws an error if the settlement token is not registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| removed | bool | Whether the removal was successful |
| record | struct InterestRate.Record | The removed interest rate record. |

### currentInterestRate

```solidity
function currentInterestRate(struct SettlementTokenRegistry self, address token) external view returns (uint256 annualRateBPS)
```

Retrieves the current interest rate for a settlement token.

_Throws an error if the settlement token is not registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| annualRateBPS | uint256 | The current annual interest rate in basis points. |

### calculateInterest

```solidity
function calculateInterest(struct SettlementTokenRegistry self, address token, uint256 amount, uint256 from, uint256 to) external view returns (uint256)
```

Calculates the interest accrued for a settlement token within a specified time range.

_Throws an error if the token is not registered._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |
| amount | uint256 | The amount of settlement tokens to calculate interest for. |
| from | uint256 | The starting timestamp of the interest calculation (inclusive). |
| to | uint256 | The ending timestamp of the interest calculation (exclusive). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The calculated interest amount. |

### getInterestRateRecords

```solidity
function getInterestRateRecords(struct SettlementTokenRegistry self, address token) public view returns (struct InterestRate.Record[])
```

Retrieves the array of interest rate records for a settlement token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct SettlementTokenRegistry | The SettlementTokenRegistry storage. |
| token | address | The address of the settlement token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct InterestRate.Record[] | The array of interest rate records. |

