# Solidity API

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the CLB tokens. |
| receipt | struct LpReceipt | The liquidity receipt. |

### ClaimLiquidity

```solidity
event ClaimLiquidity(address recipient, uint256 clbTokenAmount, struct LpReceipt receipt)
```

_Emitted when liquidity is claimed from the market._

#### Parameters

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address that receives the removed liquidity. |
| receipt | struct LpReceipt | The liquidity receipt. |

### WithdrawLiquidity

```solidity
event WithdrawLiquidity(address recipient, uint256 amount, uint256 burnedCLBTokenAmount, struct LpReceipt receipt)
```

_Emitted when liquidity is withdrawn from the market._

#### Parameters

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the liquidity tokens. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Claims liquidity from a liquidity receipt._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Removes liquidity from the market._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### getBinLiquidity

```solidity
function getBinLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

### getBinValue

```solidity
function getBinValue(int16 tradingFeeRate) external view returns (uint256 value)
```

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| earning | uint256 | The amount of earning to distribute. |
| marketBalance | uint256 | The balance of the market. |

### calculateCLBTokenMinting

```solidity
function calculateCLBTokenMinting(int16 tradingFeeRate, uint256 amount) external view returns (uint256)
```

_Calculates the amount of CLB tokens to mint for the given parameters._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate. |
| amount | uint256 | The amount of liquidity. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of CLB tokens to mint. |

### calculateCLBTokenValue

```solidity
function calculateCLBTokenValue(int16 tradingFeeRate, uint256 clbTokenAmount) external view returns (uint256)
```

_Calculates the value of CLB tokens for the given parameters._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate. |
| clbTokenAmount | uint256 | The amount of CLB tokens. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The value of CLB tokens. |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt)
```

### getClaimBurning

```solidity
function getClaimBurning(struct LpReceipt reciept) external view returns (uint256 clbTokenAmount, uint256 burningAmount, uint256 tokenAmount)
```

