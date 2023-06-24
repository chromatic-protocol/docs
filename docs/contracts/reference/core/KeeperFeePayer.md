---
id: KeeperFeePayer
title: KeeperFeePayer.sol
---
# [KeeperFeePayer.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/KeeperFeePayer.sol)

## KeeperFeePayer

_A contract that pays keeper fees using a Uniswap router._

### factory

```solidity
contract IChromaticMarketFactory factory
```

### uniswapRouter

```solidity
contract ISwapRouter uniswapRouter
```

### WETH9

```solidity
contract IWETH9 WETH9
```

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

### KeeperFeeTransferFailure

```solidity
error KeeperFeeTransferFailure()
```

### InvalidSwapValue

```solidity
error InvalidSwapValue()
```

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO._

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict access to only the Vault._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, contract ISwapRouter _uniswapRouter, contract IWETH9 _weth) public
```

_Constructor function._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _factory | contract IChromaticMarketFactory | The address of the ChromaticMarketFactory contract. |
| _uniswapRouter | contract ISwapRouter | The address of the Uniswap router contract. |
| _weth | contract IWETH9 | The address of the WETH9 contract. |

### setRouter

```solidity
function setRouter(contract ISwapRouter _uniswapRouter) public
```

Only the DAO can call this function.

_Sets the Uniswap router address._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _uniswapRouter | contract ISwapRouter | The address of the Uniswap router contract. |

### approveToRouter

```solidity
function approveToRouter(address token, bool approve) external
```

Approves or revokes approval to the Uniswap router for a given token.

_Only the DAO can call this function._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |
| approve | bool | A boolean indicating whether to approve or revoke approval. |

### payKeeperFee

```solidity
function payKeeperFee(address tokenIn, uint256 amountOut, address keeperAddress) external returns (uint256 amountIn)
```

Pays the keeper fee using Uniswap swaps.

_Only the Vault can call this function._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenIn | address | The address of the token being swapped. |
| amountOut | uint256 | The desired amount of output tokens. |
| keeperAddress | address | The address of the keeper to receive the fee. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountIn | uint256 | The actual amount of input tokens used for the swap. |

### swapExactOutput

```solidity
function swapExactOutput(address tokenIn, address recipient, uint256 amountOut, uint256 amountInMaximum) internal returns (uint256 amountIn)
```

_Executes a Uniswap swap with exact output amount._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenIn | address | The address of the input token. |
| recipient | address | The address that will receive the output tokens. |
| amountOut | uint256 | The desired amount of output tokens. |
| amountInMaximum | uint256 | The maximum amount of input tokens allowed for the swap. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amountIn | uint256 | The actual amount of input tokens used for the swap. |

### receive

```solidity
receive() external payable
```

_Fallback function to receive ETH payments._

### fallback

```solidity
fallback() external payable
```

_Fallback function to receive ETH payments._

