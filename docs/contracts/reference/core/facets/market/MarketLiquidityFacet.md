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

_Throws an error indicating that the amount of liquidity is too small.
     This error is thrown when attempting to remove liquidity with an amount of zero._

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

### AddLiquidityDisabled

```solidity
error AddLiquidityDisabled()
```

### RemoveLiquidityDisabled

```solidity
error RemoveLiquidityDisabled()
```

### addLiquidity

```solidity
function addLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt receipt)
```

_Adds liquidity to the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the liquidity tokens. |
  | tradingFeeRate | int16 | The trading fee rate for the liquidity. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] amounts, bytes data) external returns (struct LpReceipt[] receipts)
```

Adds liquidity to multiple liquidity bins of the market in a batch.

_Throws an `InvalidTransferredTokenAmount` error if the transferred amount does not match the sum of amounts param._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address of the recipient for each liquidity bin. |
  | tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
  | amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     Throws an `InvalidLpReceiptAction` error if the action of liquidity receipt is not `ADD_LIQUIDITY`.
     Throws a `NotClaimableLpReceipt` error if the liquidity receipt is not claimable in the current oracle version._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt. |
  | data | bytes | Additional data for the liquidity callback. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     Throws an `InvalidLpReceiptAction` error if the action of liquidity receipt is not `ADD_LIQUIDITY`.
     Throws a `NotClaimableLpReceipt` error if the liquidity receipt is not claimable in the current oracle version._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | data | bytes | Additional data for the liquidity callback. |

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt receipt)
```

_This function is called by the liquidity provider to remove their liquidity from the market.
     The liquidity provider must have previously added liquidity to the market.
     Throws a `TooSmallAmount` error if the CLB tokne amount of liquidity to be removed is zero._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the removed liquidity. |
  | tradingFeeRate | int16 | The trading fee rate for the liquidity. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] clbTokenAmounts, bytes data) external returns (struct LpReceipt[] receipts)
```

_Throws an `InvalidTransferredTokenAmount` error if the transferred CLB token amount does not match the expected amount (clbTokenAmounts param)._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the removed liquidity. |
  | tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
  | clbTokenAmounts | uint256[] | An array of clb token amounts to remove as liquidity for each bin. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     Throws an `InvalidLpReceiptAction` error if the action of liquidity receipt is not `REMOVE_LIQUIDITY`.
     Throws a `NotWithdrawableLpReceipt` error if the liquidity receipt is not withdrawable in the current oracle version._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt. |
  | data | bytes | Additional data for the liquidity callback. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist.
     Throws an `InvalidLpReceiptAction` error if the action of liquidity receipt is not `REMOVE_LIQUIDITY`.
     Throws a `NotWithdrawableLpReceipt` error if the liquidity receipt is not withdrawable in the current oracle version._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | data | bytes | Additional data for the liquidity callback. |

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | earning | uint256 | The amount of earning to distribute. |
  | marketBalance | uint256 | The balance of the market. |

### _requireAddLiquidityEnabled

```solidity
function _requireAddLiquidityEnabled(struct MarketStorage ms) internal view virtual
```

_Throws if add liquidity is disabled._

### _requireRemoveLiquidityEnabled

```solidity
function _requireRemoveLiquidityEnabled(struct MarketStorage ms) internal view virtual
```

_Throws if remove liquidity is disabled._

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external pure returns (bytes4)
```

_Handles the receipt of a single ERC1155 token type. This function is
called at the end of a `safeTransferFrom` after the balance has been updated.

NOTE: To accept the transfer, this must return
`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
(i.e. 0xf23a6e61, or its own function selector)._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  |  | address |  |
  |  | address |  |
  |  | uint256 |  |
  |  | uint256 |  |
  |  | bytes |  |

- Return Values:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  |  | address |  |
  |  | address |  |
  |  | uint256[] |  |
  |  | uint256[] |  |
  |  | bytes |  |

- Return Values:

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

