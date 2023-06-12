---
id: ChromaticMarketFactory
title: ChromaticMarketFactory.sol
---
# [ChromaticMarketFactory.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/ChromaticMarketFactory.sol)

## ChromaticMarketFactory

_Contract for managing the creation and registration of Chromatic markets._

### dao

```solidity
address dao
```

Returns the address of the DAO.

| Name | Type | Description |
| ---- | ---- | ----------- |

### liquidator

```solidity
address liquidator
```

Returns the address of the liquidator.

| Name | Type | Description |
| ---- | ---- | ----------- |

### vault

```solidity
address vault
```

Returns the address of the vault.

| Name | Type | Description |
| ---- | ---- | ----------- |

### keeperFeePayer

```solidity
address keeperFeePayer
```

Returns the address of the keeper fee payer.

| Name | Type | Description |
| ---- | ---- | ----------- |

### treasury

```solidity
address treasury
```

Returns the address of the DAO treasury.

| Name | Type | Description |
| ---- | ---- | ----------- |

### AlreadySetLiquidator

```solidity
error AlreadySetLiquidator()
```

### AlreadySetVault

```solidity
error AlreadySetVault()
```

### AlreadySetKeeperFeePayer

```solidity
error AlreadySetKeeperFeePayer()
```

### NotRegisteredOracleProvider

```solidity
error NotRegisteredOracleProvider()
```

### NotRegisteredSettlementToken

```solidity
error NotRegisteredSettlementToken()
```

### WrongTokenAddress

```solidity
error WrongTokenAddress()
```

### ExistMarket

```solidity
error ExistMarket()
```

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO address_

### constructor

```solidity
constructor() public
```

_Initializes the ChromaticMarketFactory contract._

### updateDao

```solidity
function updateDao(address _dao) external
```

Updates the DAO address.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _dao | address |  |

### updateTreasury

```solidity
function updateTreasury(address _treasury) external
```

Updates the DAO treasury address.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _treasury | address |  |

### setLiquidator

```solidity
function setLiquidator(address _liquidator) external
```

Sets the liquidator address.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _liquidator | address |  |

### setVault

```solidity
function setVault(address _vault) external
```

Sets the vault address.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vault | address |  |

### setKeeperFeePayer

```solidity
function setKeeperFeePayer(address _keeperFeePayer) external
```

Sets the keeper fee payer address.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _keeperFeePayer | address |  |

### getMarkets

```solidity
function getMarkets() external view returns (address[])
```

Returns an array of all market addresses.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] |  |

### getMarketsBySettlmentToken

```solidity
function getMarketsBySettlmentToken(address settlementToken) external view returns (address[])
```

Returns an array of market addresses associated with a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of market addresses. |

### getMarket

```solidity
function getMarket(address oracleProvider, address settlementToken) external view returns (address)
```

Returns the address of a market associated with an oracle provider and settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider. |
| settlementToken | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the market. |

### isRegisteredMarket

```solidity
function isRegisteredMarket(address market) external view returns (bool)
```

Checks if a market is registered.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the market is registered, false otherwise. |

### createMarket

```solidity
function createMarket(address oracleProvider, address settlementToken) external
```

Creates a new market associated with an oracle provider and settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider. |
| settlementToken | address | The address of the settlement token. |

### parameters

```solidity
function parameters() external view returns (address oracleProvider, address settlementToken)
```

Get the parameters to be used in constructing the market, set transiently during market creation.

_Called by the market constructor to fetch the parameters of the market
Returns underlyingAsset The underlying asset of the market
Returns settlementToken The settlement token of the market
Returns vPoolCapacity Capacity of virtual future pool
Returns vPoolA Amplification coefficient of virtual future pool, precise value_

### registerOracleProvider

```solidity
function registerOracleProvider(address oracleProvider) external
```

Registers an oracle provider.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to register. |

### unregisterOracleProvider

```solidity
function unregisterOracleProvider(address oracleProvider) external
```

Unregisters an oracle provider.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to unregister. |

### registeredOracleProviders

```solidity
function registeredOracleProviders() external view returns (address[])
```

Gets the registered oracle providers.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of registered oracle provider addresses. |

### isRegisteredOracleProvider

```solidity
function isRegisteredOracleProvider(address oracleProvider) external view returns (bool)
```

Checks if an oracle provider is registered.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating if the oracle provider is registered. |

### registerSettlementToken

```solidity
function registerSettlementToken(address token, uint256 minimumMargin, uint256 interestRate, uint256 flashLoanFeeRate, uint256 earningDistributionThreshold, uint24 uniswapFeeTier) external
```

Registers a new settlement token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token to register. |
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

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of addresses representing the registered settlement tokens. |

### isRegisteredSettlementToken

```solidity
function isRegisteredSettlementToken(address token) external view returns (bool)
```

Checks if a settlement token is registered.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the settlement token is registered, false otherwise. |

### getMinimumMargin

```solidity
function getMinimumMargin(address token) external view returns (uint256)
```

Gets the minimum margin for a settlement token.

_The minimumMargin is used as the minimum value for the taker margin of a position
     or as the minimum value for the maker margin of each bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The minimum margin for the settlement token. |

### setMinimumMargin

```solidity
function setMinimumMargin(address token, uint256 minimumMargin) external
```

Sets the minimum margin for a settlement token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| minimumMargin | uint256 | The new minimum margin for the settlement token. |

### getFlashLoanFeeRate

```solidity
function getFlashLoanFeeRate(address token) external view returns (uint256)
```

Gets the flash loan fee rate for a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The flash loan fee rate for the settlement token. |

### setFlashLoanFeeRate

```solidity
function setFlashLoanFeeRate(address token, uint256 flashLoanFeeRate) external
```

Sets the flash loan fee rate for a settlement token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| flashLoanFeeRate | uint256 | The new flash loan fee rate for the settlement token. |

### getEarningDistributionThreshold

```solidity
function getEarningDistributionThreshold(address token) external view returns (uint256)
```

Gets the earning distribution threshold for a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The earning distribution threshold for the settlement token. |

### setEarningDistributionThreshold

```solidity
function setEarningDistributionThreshold(address token, uint256 earningDistributionThreshold) external
```

Sets the earning distribution threshold for a settlement token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| earningDistributionThreshold | uint256 | The new earning distribution threshold for the settlement token. |

### getUniswapFeeTier

```solidity
function getUniswapFeeTier(address token) external view returns (uint24)
```

Gets the Uniswap fee tier for a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint24 | The Uniswap fee tier for the settlement token. |

### setUniswapFeeTier

```solidity
function setUniswapFeeTier(address token, uint24 uniswapFeeTier) external
```

Sets the Uniswap fee tier for a settlement token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| uniswapFeeTier | uint24 | The new Uniswap fee tier for the settlement token. |

### appendInterestRateRecord

```solidity
function appendInterestRateRecord(address token, uint256 annualRateBPS, uint256 beginTimestamp) external
```

Appends an interest rate record for a settlement token.

_This function can only be called by the DAO address._

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

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### getInterestRateRecords

```solidity
function getInterestRateRecords(address token) external view returns (struct InterestRate.Record[])
```

Gets all the interest rate records for a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct InterestRate.Record[] | An array of interest rate records for the settlement token. |

### currentInterestRate

```solidity
function currentInterestRate(address token) external view returns (uint256 annualRateBPS)
```

Gets the current interest rate for a settlement token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| annualRateBPS | uint256 | The current interest rate for the settlement token. |

### calculateInterest

```solidity
function calculateInterest(address token, uint256 amount, uint256 from, uint256 to) external view returns (uint256)
```

Calculates the interest accrued for a given token and amount within a specified time range.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |
| amount | uint256 | The amount of the token. |
| from | uint256 | The starting timestamp (inclusive) of the time range. |
| to | uint256 | The ending timestamp (exclusive) of the time range. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accrued interest for the specified token and amount within the given time range. |

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external
```

Creates a Maker earning distribution task for a token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a Maker earning distribution task for a token.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external
```

Creates a market earning distribution task for a market.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

_This function can only be called by the DAO address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

