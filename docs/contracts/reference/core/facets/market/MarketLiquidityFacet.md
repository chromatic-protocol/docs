---
id: MarketLiquidityFacet
title: MarketLiquidityFacet.sol
---
# [MarketLiquidityFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLiquidityFacet.sol)

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

### addLiquidity

```solidity
function addLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt receipt)
```

_Adds liquidity to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the liquidity tokens. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] amounts, bytes data) external returns (struct LpReceipt[] receipts)
```

Adds liquidity to multiple liquidity bins of the market in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the recipient for each liquidity bin. |
| tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
| amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Claims liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Claims liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptIds | uint256[] | The array of the liquidity receipt IDs. |
| data | bytes | Additional data for the liquidity callback. |

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt receipt)
```

_Removes liquidity from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] clbTokenAmounts, bytes data) external returns (struct LpReceipt[] receipts)
```

_Removes liquidity from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
| clbTokenAmounts | uint256[] | An array of clb token amounts to remove as liquidity for each bin. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptIds | uint256[] | The array of the liquidity receipt IDs. |
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

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

| Name | Type | Description |
| ---- | ---- | ----------- |
| earning | uint256 | The amount of earning to distribute. |
| marketBalance | uint256 | The balance of the market. |

### getBinValues

```solidity
function getBinValues(int16[] tradingFeeRates) external view returns (uint256[])
```

_Retrieves the values of a specific trading fee rate's bins in the liquidity pool.
     The value of a bin represents the total valuation of the liquidity in the bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRates | int16[] | The list of trading fee rate for which to retrieve the bin value. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] |  |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt receipt)
```

_Retrieves the liquidity receipt with the given receipt ID.
     It throws NotExistLpReceipt if the specified receipt ID does not exist._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt to retrieve. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | receipt The liquidity receipt with the specified ID. |

### claimableLiquidity

```solidity
function claimableLiquidity(int16 tradingFeeRate, uint256 oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
| oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of ClaimableLiquidity representing the claimable liquidity information. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses() external view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the caller's liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

_Handles the receipt of a single ERC1155 token type. This function is
called at the end of a `safeTransferFrom` after the balance has been updated.

NOTE: To accept the transfer, this must return
`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
(i.e. 0xf23a6e61, or its own function selector)._

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256 |  |
|  | uint256 |  |
|  | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed |

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external pure returns (bytes4)
```

_Handles the receipt of a multiple ERC1155 token types. This function
is called at the end of a `safeBatchTransferFrom` after the balances have
been updated.

NOTE: To accept the transfer(s), this must return
`bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
(i.e. 0xbc197c81, or its own function selector)._

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
|  | uint256[] |  |
|  | uint256[] |  |
|  | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceID) external pure returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

