---
id: ILiquidity
title: ILiquidity.sol
---
# [ILiquidity.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/ILiquidity.sol)

## ILiquidity

_The interface for liquidity operations in a market._

### TooSmallAmount

```solidity
error TooSmallAmount()
```

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

### InvalidLpReceiptAction

```solidity
error InvalidLpReceiptAction()
```

### AddLiquidity

```solidity
event AddLiquidity(address recipient, struct LpReceipt receipt)
```

_Emitted when liquidity is added to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the CLB tokens. |
| receipt | struct LpReceipt | The liquidity receipt. |

### ClaimLiquidity

```solidity
event ClaimLiquidity(address recipient, uint256 clbTokenAmount, struct LpReceipt receipt)
```

_Emitted when liquidity is claimed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address that receives the claimed CLB tokens. |
| clbTokenAmount | uint256 | The amount of CLB tokens claimed. |
| receipt | struct LpReceipt | The liquidity receipt. |

### RemoveLiquidity

```solidity
event RemoveLiquidity(address recipient, struct LpReceipt receipt)
```

_Emitted when liquidity is removed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address that receives the removed liquidity. |
| receipt | struct LpReceipt | The liquidity receipt. |

### WithdrawLiquidity

```solidity
event WithdrawLiquidity(address recipient, uint256 amount, uint256 burnedCLBTokenAmount, struct LpReceipt receipt)
```

_Emitted when liquidity is withdrawn from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address that receives the withdrawn liquidity. |
| amount | uint256 | The amount of liquidity withdrawn. |
| burnedCLBTokenAmount | uint256 | The amount of burned CLB tokens. |
| receipt | struct LpReceipt | The liquidity receipt. |

### addLiquidity

```solidity
function addLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Adds liquidity to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the liquidity tokens. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Claims liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Removes liquidity from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### getBinLiquidity

```solidity
function getBinLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the liquidity amount. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The total liquidity amount for the specified trading fee rate. |

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the available liquidity amount. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The available (free) liquidity amount for the specified trading fee rate. |

### getBinValue

```solidity
function getBinValue(int16 tradingFeeRate) external view returns (uint256 value)
```

_Retrieves the value of a specific trading fee rate's bin in the liquidity pool.
     The value of a bin represents the total valuation of the liquidity in the bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the bin value. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | The value of the bin for the specified trading fee rate. |

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

| Name | Type | Description |
| ---- | ---- | ----------- |
| earning | uint256 | The amount of earning to distribute. |
| marketBalance | uint256 | The balance of the market. |

### calculateCLBTokenMinting

```solidity
function calculateCLBTokenMinting(int16 tradingFeeRate, uint256 amount) external view returns (uint256)
```

_Calculates the amount of CLB tokens to be minted for a given amount of liquidity and trading fee rate.
     The CLB token minting amount represents the number of CLB tokens that will be minted when providing liquidity._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to calculate the CLB token minting. |
| amount | uint256 | The amount of liquidity for which to calculate the CLB token minting. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of CLB tokens to be minted for the specified liquidity amount and trading fee rate. |

### calculateCLBTokenValue

```solidity
function calculateCLBTokenValue(int16 tradingFeeRate, uint256 clbTokenAmount) external view returns (uint256)
```

_Calculates the value of CLB tokens for the given parameters._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate. |
| clbTokenAmount | uint256 | The amount of CLB tokens. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The value of CLB tokens. |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt)
```

_Retrieves the liquidity receipt with the given receipt ID.
     It throws NotExistLpReceipt if the specified receipt ID does not exist._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt to retrieve. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The liquidity receipt with the specified ID. |

### getClaimBurning

```solidity
function getClaimBurning(int16 tradingFeeRate, uint256 oracleVersion) external view returns (uint256 clbTokenAmount, uint256 burningAmount, uint256 tokenAmount)
```

_Retrieves the claim burning details for a given liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the claim burning details. |
| oracleVersion | uint256 | The oracle version for which to retrieve the claim burning details. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbTokenAmount | uint256 | The total amount of CLB tokens waiting to be burned for the specified trading fee rate and oracle version. |
| burningAmount | uint256 | The amount of CLB tokens that can be claimed after being burnt for the specified trading fee rate and oracle version. |
| tokenAmount | uint256 | The corresponding amount of tokens obtained when claiming liquidity. |

