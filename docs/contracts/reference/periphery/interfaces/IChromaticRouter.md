---
id: IChromaticRouter
title: IChromaticRouter.sol
---
# [IChromaticRouter.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/interfaces/IChromaticRouter.sol)

## IChromaticRouter

_Interface for the ChromaticRouter contract._

### openPosition

```solidity
function openPosition(address market, int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct Position)
```

_Opens a new position in a ChromaticMarket contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| qty | int224 | The quantity of the position. |
| leverage | uint32 | The leverage of the position. |
| takerMargin | uint256 | The margin amount for the taker. |
| makerMargin | uint256 | The margin amount for the maker. |
| maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Position | position The new position. |

### closePosition

```solidity
function closePosition(address market, uint256 positionId) external
```

Closes a position in a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to claim. |

### addLiquidity

```solidity
function addLiquidity(address market, int16 feeRate, uint256 amount, address recipient) external returns (struct LpReceipt)
```

Adds liquidity to a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| amount | uint256 | The amount to add as liquidity. |
| recipient | address | The recipient address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The LP receipt. |

### claimLiquidity

```solidity
function claimLiquidity(address market, uint256 receiptId) external
```

Claims liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### removeLiquidity

```solidity
function removeLiquidity(address market, int16 feeRate, uint256 clbTokenAmount, address recipient) external returns (struct LpReceipt)
```

Removes liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens to remove as liquidity. |
| recipient | address | The recipient address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The LP receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(address market, uint256 receiptId) external
```

Withdraws liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### getAccount

```solidity
function getAccount() external view returns (address)
```

Retrieves the account of the caller.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The account address. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market) external view returns (uint256[])
```

Retrieves the LP receipt IDs of the caller for the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of LP receipt IDs. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address market, int16[] feeRates, uint256[] amounts, address[] recipients) external returns (struct LpReceipt[] lpReceipts)
```

Adds liquidity to multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
| recipients | address[] | An array of recipient addresses. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(address market, uint256[] receiptIds) external
```

Claims liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptIds | uint256[] | An array of LP receipt IDs to claim liquidity from. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address market, int16[] feeRates, uint256[] clbTokenAmounts, address[] recipients) external returns (struct LpReceipt[] lpReceipts)
```

Removes liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| clbTokenAmounts | uint256[] | An array of CLB token amounts to remove as liquidity for each bin. |
| recipients | address[] | An array of recipient addresses. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(address market, uint256[] receiptIds) external
```

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptIds | uint256[] | An array of LP receipt IDs to withdraw liquidity from. |

