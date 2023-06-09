# Solidity API

## IKeeperFeePayer

_Interface for a contract that pays keeper fees._

### approveToRouter

```solidity
function approveToRouter(address token, bool approve) external
```

Approves or revokes approval to the Uniswap router for a given token.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |
| approve | bool | A boolean indicating whether to approve or revoke approval. |

### payKeeperFee

```solidity
function payKeeperFee(address tokenIn, uint256 amountOut, address keeperAddress) external returns (uint256 amountIn)
```

Pays the keeper fee using Uniswap swaps.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenIn | address | The address of the token being swapped. |
| amountOut | uint256 | The desired amount of output tokens. |
| keeperAddress | address | The address of the keeper to receive the fee. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountIn | uint256 | The actual amount of input tokens used for the swap. |

