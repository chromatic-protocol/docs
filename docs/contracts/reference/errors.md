---
id: errors
title: Errors
sidebar_position: 3
---

## Errors

_This library provides a set of error codes as string constants for handling exceptions and revert messages in the library._

| Code | Name |
| ---- | ---- |
| NEFL | NOT_ENOUGH_FREE_LIQUIDITY |
| TSA | TOO_SMALL_AMOUNT |
| IOV | INVALID_ORACLE_VERSION |
| IOV | EXCEED_MARGIN_RANGE |
| UTFR | UNSUPPORTED_TRADING_FEE_RATE |
| ARO | ALREADY_REGISTERED_ORACLE_PROVIDER |
| ART | ALREADY_REGISTERED_TOKEN |
| URT | UNREGISTERED_TOKEN |
| IRNI | INTEREST_RATE_NOT_INITIALIZED |
| IROF | INTEREST_RATE_OVERFLOW |
| IRPT | INTEREST_RATE_PAST_TIMESTAMP |
| IRNA | INTEREST_RATE_NOT_APPENDABLE |
| IRAA | INTEREST_RATE_ALREADY_APPLIED |
| USP | UNSETTLED_POSITION |
| IPQ | INVALID_POSITION_QTY |

### NOT_ENOUGH_FREE_LIQUIDITY

```solidity
string constant NOT_ENOUGH_FREE_LIQUIDITY = "NEFL";
```

_Error code indicating that there is not enough free liquidity available in liquidity pool when open a new poisition._
### TOO_SMALL_AMOUNT

```solidity
string constant TOO_SMALL_AMOUNT = "TSA";
```

_Error code indicating that the specified amount is too small when add liquidity to each bin._
### INVALID_ORACLE_VERSION

```solidity
string constant INVALID_ORACLE_VERSION = "IOV";
```

_Error code indicating that the provided oracle version is invalid or unsupported._
### EXCEED_MARGIN_RANGE

```solidity
string constant EXCEED_MARGIN_RANGE = "IOV";
```

_Error code indicating that the specified value exceeds the allowed margin range when claim a position._
### UNSUPPORTED_TRADING_FEE_RATE

```solidity
string constant UNSUPPORTED_TRADING_FEE_RATE = "UTFR";
```

_Error code indicating that the provided trading fee rate is not supported._
### ALREADY_REGISTERED_ORACLE_PROVIDER

```solidity
string constant ALREADY_REGISTERED_ORACLE_PROVIDER = "ARO";
```

_Error code indicating that the oracle provider is already registered._
### ALREADY_REGISTERED_TOKEN

```solidity
string constant ALREADY_REGISTERED_TOKEN = "ART";
```

_Error code indicating that the settlement token is already registered._
### UNREGISTERED_TOKEN

```solidity
string constant UNREGISTERED_TOKEN = "URT";
```

_Error code indicating that the settlement token is not registered._
### INTEREST_RATE_NOT_INITIALIZED

```solidity
string constant INTEREST_RATE_NOT_INITIALIZED = "IRNI";
```

_Error code indicating that the interest rate has not been initialized._
### INTEREST_RATE_OVERFLOW

```solidity
string constant INTEREST_RATE_OVERFLOW = "IROF";
```

_Error code indicating that the provided interest rate exceeds the maximum allowed rate._
### INTEREST_RATE_PAST_TIMESTAMP

```solidity
string constant INTEREST_RATE_PAST_TIMESTAMP = "IRPT";
```

_Error code indicating that the provided timestamp for an interest rate is in the past._
### INTEREST_RATE_NOT_APPENDABLE

```solidity
string constant INTEREST_RATE_NOT_APPENDABLE = "IRNA";
```

_Error code indicating that the provided interest rate record cannot be appended to the existing array._
### INTEREST_RATE_ALREADY_APPLIED

```solidity
string constant INTEREST_RATE_ALREADY_APPLIED = "IRAA";
```

_Error code indicating that an interest rate has already been applied and cannot be modified further._
### UNSETTLED_POSITION

```solidity
string constant UNSETTLED_POSITION = "USP";
```

_Error code indicating that the position is unsettled._
### INVALID_POSITION_QTY

```solidity
string constant INVALID_POSITION_QTY = "IPQ";
```

_Error code indicating that the position quantity is invalid._

## CLBToken

_CLBToken is an ERC1155 token contract that represents Liquidity Bin tokens.
     CLBToken allows minting and burning of tokens by the Chromatic Market contract._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

## ChromaticMarketFactory

_Contract for managing the creation and registration of Chromatic markets._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### AlreadySetLiquidator

```solidity
error AlreadySetLiquidator()
```

_Throws an error indicating that the chromatic liquidator address is already set._

### AlreadySetVault

```solidity
error AlreadySetVault()
```

_Throws an error indicating that the chromatic vault address is already set._

### AlreadySetKeeperFeePayer

```solidity
error AlreadySetKeeperFeePayer()
```

_Throws an error indicating that the keeper fee payer address is already set._

### NotRegisteredOracleProvider

```solidity
error NotRegisteredOracleProvider()
```

_Throws an error indicating that the oracle provider is not registered._

### NotRegisteredSettlementToken

```solidity
error NotRegisteredSettlementToken()
```

_Throws an error indicating that the settlement token is not registered._

### ExistMarket

```solidity
error ExistMarket()
```

_Throws an error indicating that a market already exists for the given oracle provider and settlement token._

## ChromaticVault

_A contract that implements the ChromaticVault interface
     and provides functionality for managing positions, liquidity, and fees in Chromatic markets._

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

_Throws an error indicating that the caller is nether the chormatic factory contract nor the DAO._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

_Throws an error indicating that the flash loan amount exceeds the available balance in the vault._

### NotEnoughFeePaid

```solidity
error NotEnoughFeePaid()
```

_Throws an error indicating that the recipient has not paid the sufficient flash loan fee._

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

## KeeperFeePayer

_A contract that pays keeper fees using a Uniswap router._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

_Throws an error indicating that the caller is nether the chormatic factory contract nor the DAO._

### KeeperFeeTransferFailure

```solidity
error KeeperFeeTransferFailure()
```

_Throws an error indicating that the transfer of keeper fee has failed._

### InvalidSwapValue

```solidity
error InvalidSwapValue()
```

_Throws an error indicating that the swap value for the Uniswap trade is invalid._

## Liquidator

_An abstract contract for liquidation functionality in the Chromatic protocol._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

## MarketDiamondCutFacet

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

_Throws an error indicating that the caller is nether the chormatic factory contract nor the DAO._

## MarketFacetBase

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByLiquidator

```solidity
error OnlyAccessableByLiquidator()
```

_Throws an error indicating that the caller is not the chromatic liquidator contract._

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

_Throws an error indicating that the caller is not the chromatch vault contract._

## MarketLiquidateFacet

_A contract that manages liquidations._

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

_Throws an error indicating that the position has already been closed._

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

_Throws an error indicating that the position is not claimable._

## MarketLiquidityFacet

_Contract for managing liquidity in a market._

### TooSmallAmount

```solidity
error TooSmallAmount()
```

_Throws an error indicating that the amount of liquidity is too small.
     This error is thrown when attempting to remove liquidity with an amount of zero._

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

_Throws an error indicating that the specified liquidity receipt does not exist._

### NotClaimableLpReceipt

```solidity
error NotClaimableLpReceipt()
```

_Throws an error indicating that the liquidity receipt is not claimable._

### NotWithdrawableLpReceipt

```solidity
error NotWithdrawableLpReceipt()
```

_Throws an error indicating that the liquidity receipt is not withdrawable._

### InvalidLpReceiptAction

```solidity
error InvalidLpReceiptAction()
```

_Throws an error indicating that the liquidity receipt action is invalid._

### InvalidTransferedTokenAmount

```solidity
error InvalidTransferedTokenAmount()
```

_Throws an error indicating that the transferred token amount is invalid.
     This error is thrown when the transferred token amount does not match the expected amount._

## MarketTradeFacet

_A contract that manages trading positions._

### TooSmallTakerMargin

```solidity
error TooSmallTakerMargin()
```

_Throws an error indicating that the taker margin provided is smaller than the minimum required margin for the specific settlement token.
     The minimum required margin is determined by the DAO and represents the minimum amount required for operations such as liquidation and payment of keeper fees._

### NotEnoughMarginTransfered

```solidity
error NotEnoughMarginTransfered()
```

_Throws an error indicating that the margin settlement token balance does not increase by the required margin amount after the callback._

### NotPermitted

```solidity
error NotPermitted()
```

_Throws an error indicating that the caller is not permitted to perform the action as they are not the owner of the position._

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

_Throws an error indicating that the position has already been closed and cannot be closed again._

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

_Throws an error indicating that the position cannot be claimed as it is not eligible for claim in the current oracle version._

### ExceedMaxAllowableTradingFee

```solidity
error ExceedMaxAllowableTradingFee()
```

_Throws an error indicating that the total trading fee (including protocol fee) exceeds the maximum allowable trading fee._

### ExceedMaxAllowableLeverage

```solidity
error ExceedMaxAllowableLeverage()
```

_Throws an error indicating thatwhen the specified leverage exceeds the maximum allowable leverage level set by the Oracle Provider.
     Each Oracle Provider has a specific maximum allowable leverage level, which is determined by the DAO.
     The default maximum allowable leverage level is 0, which corresponds to a leverage of up to 10x._

### NotAllowableTakerMargin

```solidity
error NotAllowableTakerMargin()
```

_Throws an error indicating that the taker margin value is not within the allowable range based on the quantity and the maximum allowable leverage.
     The taker margin should be equal to or greater than the product of the absolute quantity and the reciprocal of the maximum allowable leverage, and it should not exceed 100% of the absolute quantity._

### NotAllowableMakerMargin

```solidity
error NotAllowableMakerMargin()
```

_Throws an error indicating that the maker margin value is not within the allowable range based on the absolute quantity and the specified minimum/maximum take-profit basis points (BPS).
     The maker margin must fall within the range calculated based on the absolute quantity of the position and the specified minimum/maximum take-profit basis points (BPS) set by the Oracle Provider.
     The default range for the minimum/maximum take-profit basis points is 10% to 1000%._

## MarketTradeFacetBase

### NotExistPosition

```solidity
error NotExistPosition()
```

_Throws an error indicating that the requested position does not exist._

### ClaimPositionCallbackError

```solidity
error ClaimPositionCallbackError()
```

_Throws an error indicating that an error occurred during the claim position callback._

## InitializationFunctionReverted

```solidity
error InitializationFunctionReverted(address _initializationContractAddress, bytes _calldata)
```

## ChainlinkFeedOracle

Chainlink implementation of the IOracle interface.

_One instance per Chainlink price feed should be deployed. Multiple products may use the same
     ChainlinkOracle instance if their payoff functions are based on the same underlying oracle.
     This implementation only support non-negative prices._

### UnableToSyncError

```solidity
error UnableToSyncError()
```

## IOracleProvider

### InvalidOracleRound

```solidity
error InvalidOracleRound()
```

_Error for invalid oracle round_

## ChromaticAccount

_This contract manages user accounts and positions._

### NotRouter

```solidity
error NotRouter()
```

_Throws an error indicating that the caller is not the chromatic router contract._

### NotOwner

```solidity
error NotOwner()
```

_Throws an error indicating that the caller is not the owner of this account contract._

### AlreadyInitialized

```solidity
error AlreadyInitialized()
```

_Throws an error indicating that the account is already initialized, and calling the initialization function again is not allowed._

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

_Throws an error indicating that the account does not have sufficient balance to perform a particular operation, such as withdrawing an amount of tokens._

### NotExistPosition

```solidity
error NotExistPosition()
```

_Throws an error indicating that the caller is not the owner of this account contractthat the caller is not the owner of this account contract._

## ChromaticRouter

_A router contract that facilitates liquidity provision and trading on Chromatic._

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

_Throws an error indicating that the specified receipt ID does not exist for the liquidity provider in the given market._

## VerifyCallback

_Abstract contract for verifying callback functions from registered markets._

### NotMarket

```solidity
error NotMarket()
```

_Throws an error indicating that the caller is not a registered market._

