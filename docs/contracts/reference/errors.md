---
id: errors
title: Errors
---

## CLBToken

_CLBToken is an ERC1155 token contract that represents Liquidity Bin tokens.
     CLBToken allows minting and burning of tokens by the Chromatic Market contract._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

## ChromaticMarketFactory

_Contract for managing the creation and registration of Chromatic markets._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

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

## ChromaticVault

_A contract that implements the ChromaticVault interface
     and provides functionality for managing positions, liquidity, and fees in Chromatic markets._

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

### NotEnoughFeePaid

```solidity
error NotEnoughFeePaid()
```

### ExistMarketEarningDistributionTask

```solidity
error ExistMarketEarningDistributionTask()
```

## KeeperFeePayer

_A contract that pays keeper fees using a Uniswap router._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

### KeeperFeeTransferFailure

```solidity
error KeeperFeeTransferFailure()
```

### InvalidSwapValue

```solidity
error InvalidSwapValue()
```

## Liquidator

_An abstract contract for liquidation functionality in the Chromatic protocol._

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

## MarketDiamondCutFacet

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

## MarketFacetBase

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

### OnlyAccessableByLiquidator

```solidity
error OnlyAccessableByLiquidator()
```

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

## MarketLiquidateFacet

_A contract that manages liquidations._

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

## MarketLiquidityFacet

_Contract for managing liquidity in a market._

### TooSmallAmount

```solidity
error TooSmallAmount()
```

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

### NotClaimableLpReceipt

```solidity
error NotClaimableLpReceipt()
```

### NotWithdrawableLpReceipt

```solidity
error NotWithdrawableLpReceipt()
```

### InvalidLpReceiptAction

```solidity
error InvalidLpReceiptAction()
```

### InvalidTransferedTokenAmount

```solidity
error InvalidTransferedTokenAmount()
```

## MarketTradeFacet

_A contract that manages trading positions._

### ZeroTargetAmount

```solidity
error ZeroTargetAmount()
```

### TooSmallTakerMargin

```solidity
error TooSmallTakerMargin()
```

### NotEnoughMarginTransfered

```solidity
error NotEnoughMarginTransfered()
```

### NotPermitted

```solidity
error NotPermitted()
```

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

### ExceedMaxAllowableTradingFee

```solidity
error ExceedMaxAllowableTradingFee()
```

### ExceedMaxAllowableLeverage

```solidity
error ExceedMaxAllowableLeverage()
```

### NotAllowableTakerMargin

```solidity
error NotAllowableTakerMargin()
```

### NotAllowableMakerMargin

```solidity
error NotAllowableMakerMargin()
```

## MarketTradeFacetBase

### NotExistPosition

```solidity
error NotExistPosition()
```

### ClaimPositionCallbackError

```solidity
error ClaimPositionCallbackError()
```

## InitializationFunctionReverted

```solidity
error InitializationFunctionReverted(address _initializationContractAddress, bytes _calldata)
```

## Errors

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

### TOO_SMALL_AMOUNT

```solidity
string constant TOO_SMALL_AMOUNT = "TSA";
```

### INVALID_ORACLE_VERSION

```solidity
string constant INVALID_ORACLE_VERSION = "IOV";
```

### EXCEED_MARGIN_RANGE

```solidity
string constant EXCEED_MARGIN_RANGE = "IOV";
```

### UNSUPPORTED_TRADING_FEE_RATE

```solidity
string constant UNSUPPORTED_TRADING_FEE_RATE = "UTFR";
```

### ALREADY_REGISTERED_ORACLE_PROVIDER

```solidity
string constant ALREADY_REGISTERED_ORACLE_PROVIDER = "ARO";
```

### ALREADY_REGISTERED_TOKEN

```solidity
string constant ALREADY_REGISTERED_TOKEN = "ART";
```

### UNREGISTERED_TOKEN

```solidity
string constant UNREGISTERED_TOKEN = "URT";
```

### INTEREST_RATE_NOT_INITIALIZED

```solidity
string constant INTEREST_RATE_NOT_INITIALIZED = "IRNI";
```

### INTEREST_RATE_OVERFLOW

```solidity
string constant INTEREST_RATE_OVERFLOW = "IROF";
```

### INTEREST_RATE_PAST_TIMESTAMP

```solidity
string constant INTEREST_RATE_PAST_TIMESTAMP = "IRPT";
```

### INTEREST_RATE_NOT_APPENDABLE

```solidity
string constant INTEREST_RATE_NOT_APPENDABLE = "IRNA";
```

### INTEREST_RATE_ALREADY_APPLIED

```solidity
string constant INTEREST_RATE_ALREADY_APPLIED = "IRAA";
```

### UNSETTLED_POSITION

```solidity
string constant UNSETTLED_POSITION = "USP";
```

### INVALID_POSITION_QTY

```solidity
string constant INVALID_POSITION_QTY = "IPQ";
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

### NotOwner

```solidity
error NotOwner()
```

### AlreadyInitialized

```solidity
error AlreadyInitialized()
```

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

### NotExistPosition

```solidity
error NotExistPosition()
```

## ChromaticRouter

_A router contract that facilitates liquidity provision and trading on Chromatic._

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

## VerifyCallback

_Abstract contract for verifying callback functions from registered markets._

### NotMarket

```solidity
error NotMarket()
```

_Throws an error indicating that the caller is not a registered market._

