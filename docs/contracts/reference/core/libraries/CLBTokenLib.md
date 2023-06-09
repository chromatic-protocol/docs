# Solidity API

## DIRECTION_PRECISION

```solidity
uint256 DIRECTION_PRECISION
```

## CLBTokenLib

Provides utility functions for working with CLB tokens.

### encodeId

```solidity
function encodeId(int16 tradingFeeRate) internal pure returns (uint256 id)
```

Encode the CLB token ID of ERC1155 token type

_If `tradingFeeRate` is negative, it adds `DIRECTION_PRECISION` to the absolute fee rate.
     Otherwise it returns the fee rate directly._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The ID of ERC1155 token |

### decodeId

```solidity
function decodeId(uint256 id) internal pure returns (int16 tradingFeeRate)
```

Decode the trading fee rate from the CLB token ID of ERC1155 token type

_If `id` is greater than or equal to `DIRECTION_PRECISION`,
     then it substracts `DIRECTION_PRECISION` from `id`
     and returns the negation of the substracted value.
     Otherwise it returns `id` directly._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate |

