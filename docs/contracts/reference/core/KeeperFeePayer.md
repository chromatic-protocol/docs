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

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyFactoryOrDao

```solidity
modifier onlyFactoryOrDao()
```

_Modifier to restrict access to only the factory or the DAO.
     Throws an `OnlyAccessableByFactoryOrDao` error if the caller is nether the chormatic factory contract nor the DAO._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, contract ISwapRouter _uniswapRouter, contract IWETH9 _weth) public
```

_Constructor function._

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _uniswapRouter | contract ISwapRouter | The address of the Uniswap router contract. |

### approveToRouter

```solidity
function approveToRouter(address token, bool approve) external
```

Approves or revokes approval to the Uniswap router for a given token.

_Only the factory or the DAO can call this function._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the token. |
  | approve | bool | A boolean indicating whether to approve or revoke approval. |

### payKeeperFee

```solidity
function payKeeperFee(address tokenIn, uint256 amountOut, address keeperAddress) external returns (uint256 amountIn)
```

Pays the keeper fee using Uniswap swaps.

_Throws a `KeeperFeeTransferFailure` error if the transfer of ETH to the keeper address fails.
     Throws an `InvalidSwapValue` error if the remaining balance of the input token after the swap is insufficient._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tokenIn | address | The address of the token being swapped. |
  | amountOut | uint256 | The desired amount of output tokens. |
  | keeperAddress | address | The address of the keeper to receive the fee. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amountIn | uint256 | The actual amount of input tokens used for the swap. |

### swapExactOutput

```solidity
function swapExactOutput(address tokenIn, address recipient, uint256 amountOut, uint256 amountInMaximum) internal returns (uint256 amountIn)
```

_Executes a Uniswap swap with exact output amount._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tokenIn | address | The address of the input token. |
  | recipient | address | The address that will receive the output tokens. |
  | amountOut | uint256 | The desired amount of output tokens. |
  | amountInMaximum | uint256 | The maximum amount of input tokens allowed for the swap. |

- Return Values:

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

