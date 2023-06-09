# Solidity API

## Liquidity

_Contract for managing liquidity in a market._

### MINIMUM_LIQUIDITY

```solidity
uint256 MINIMUM_LIQUIDITY
```

### _lpReceiptId

```solidity
uint256 _lpReceiptId
```

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict a function to be called only by the vault contract._

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

### getBinLiquidities

```solidity
function getBinLiquidities(int16[] tradingFeeRates) external view returns (uint256[] amounts)
```

_Retrieves the bin liquidities for the given trading fee rates._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRates | int16[] | The trading fee rates to retrieve bin liquidities for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amounts | uint256[] | An array of bin liquidities corresponding to the trading fee rates. |

### getBinFreeLiquidities

```solidity
function getBinFreeLiquidities(int16[] tradingFeeRates) external view returns (uint256[] amounts)
```

_Retrieves the bin free liquidities for the given trading fee rates._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRates | int16[] | The trading fee rates to retrieve bin free liquidities for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amounts | uint256[] | An array of bin free liquidities corresponding to the trading fee rates. |

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

### onERC1155Received

```solidity
function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes data) external pure returns (bytes4)
```

_Handles the receipt of a single ERC1155 token type. This function is
called at the end of a `safeTransferFrom` after the balance has been updated.

NOTE: To accept the transfer, this must return
`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`
(i.e. 0xf23a6e61, or its own function selector)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | The address which initiated the transfer (i.e. msg.sender) |
| from | address | The address which previously owned the token |
| id | uint256 | The ID of the token being transferred |
| value | uint256 | The amount of tokens being transferred |
| data | bytes | Additional data with no specified format |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed |

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address operator, address from, uint256[] ids, uint256[] values, bytes data) external pure returns (bytes4)
```

_Handles the receipt of a multiple ERC1155 token types. This function
is called at the end of a `safeBatchTransferFrom` after the balances have
been updated.

NOTE: To accept the transfer(s), this must return
`bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`
(i.e. 0xbc197c81, or its own function selector)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | The address which initiated the batch transfer (i.e. msg.sender) |
| from | address | The address which previously owned the token |
| ids | uint256[] | An array containing ids of each token being transferred (order and length must match values array) |
| values | uint256[] | An array containing amounts of each token being transferred (order and length must match ids array) |
| data | bytes | Additional data with no specified format |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes4 | `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceID) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
`interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._
