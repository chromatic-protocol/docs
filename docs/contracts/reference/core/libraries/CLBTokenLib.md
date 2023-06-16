---
id: CLBTokenLib
title: CLBTokenLib.sol
---
# [CLBTokenLib.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/CLBTokenLib.sol)

## CLBTokenLib

Provides utility functions for working with CLB tokens.

### encodeId

```solidity
function encodeId(int16 tradingFeeRate) internal pure returns (uint256)
```

Encode the CLB token ID of ERC1155 token type

_If `tradingFeeRate` is negative, it adds `DIRECTION_PRECISION` to the absolute fee rate.
     Otherwise it returns the fee rate directly._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | id The ID of ERC1155 token |

### decodeId

```solidity
function decodeId(uint256 id) internal pure returns (int16 tradingFeeRate)
```

Decode the trading fee rate from the CLB token ID of ERC1155 token type

_If `id` is greater than or equal to `DIRECTION_PRECISION`,
     then it substracts `DIRECTION_PRECISION` from `id`
     and returns the negation of the substracted value.
     Otherwise it returns `id` directly._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate |

### tradingFeeRates

```solidity
function tradingFeeRates() internal pure returns (uint16[36])
```

Retrieves the array of supported trading fee rates.

_This function returns the array of supported trading fee rates,
     ranging from the minimum fee rate to the maximum fee rate with step increments._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint16[36] | tradingFeeRates The array of supported trading fee rates. |

### tokenIds

```solidity
function tokenIds() internal pure returns (uint256[])
```

