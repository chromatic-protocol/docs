---
id: IMarketErrors
title: IMarketErrors.sol
---
# [IMarketErrors.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketErrors.sol)

## IMarketErrors

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

### InvalidTransferredTokenAmount

```solidity
error InvalidTransferredTokenAmount()
```

_Throws an error indicating that the transferred token amount is invalid.
     This error is thrown when the transferred token amount does not match the expected amount._

### DuplicatedTradingFeeRate

```solidity
error DuplicatedTradingFeeRate()
```

### AddLiquidityDisabled

```solidity
error AddLiquidityDisabled()
```

### RemoveLiquidityDisabled

```solidity
error RemoveLiquidityDisabled()
```

### TooSmallTakerMargin

```solidity
error TooSmallTakerMargin()
```

_Throws an error indicating that the taker margin provided is smaller than the minimum required margin for the specific settlement token.
     The minimum required margin is determined by the DAO and represents the minimum amount required for operations such as liquidation and payment of keeper fees._

### NotEnoughMarginTransferred

```solidity
error NotEnoughMarginTransferred()
```

_Throws an error indicating that the margin settlement token balance does not increase by the required margin amount after the callback._

### NotPermitted

```solidity
error NotPermitted()
```

_Throws an error indicating that the caller is not permitted to perform the action as they are not the owner of the position._

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

### NotAllowableMakerMargin

```solidity
error NotAllowableMakerMargin()
```

_Throws an error indicating that the maker margin value is not within the allowable range based on the absolute quantity and the specified minimum/maximum take-profit basis points (BPS).
     The maker margin must fall within the range calculated based on the absolute quantity of the position and the specified minimum/maximum take-profit basis points (BPS) set by the Oracle Provider.
     The default range for the minimum/maximum take-profit basis points is 10% to 1000%._

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

### OpenPositionDisabled

```solidity
error OpenPositionDisabled()
```

### ClosePositionDisabled

```solidity
error ClosePositionDisabled()
```

