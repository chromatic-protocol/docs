---
id: AccruedInterest
title: AccruedInterest.sol
---
# [AccruedInterest.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/external/liquidity/AccruedInterest.sol)

## AccruedInterest

```solidity
struct AccruedInterest {
  uint256 accumulatedAt;
  uint256 accumulatedAmount;
}
```

## AccruedInterestLib

Tracks the accumulated interest for a given token amount and period of time

### accumulate

```solidity
function accumulate(struct AccruedInterest self, struct LpContext ctx, uint256 tokenAmount, uint256 until) internal
```

Accumulates interest for a given token amount and period of time

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct AccruedInterest | The AccruedInterest storage |
| ctx | struct LpContext | The LpContext instance for interest calculation |
| tokenAmount | uint256 | The amount of tokens to calculate interest for |
| until | uint256 | The timestamp until which interest should be accumulated |

### deduct

```solidity
function deduct(struct AccruedInterest self, uint256 amount) internal
```

Deducts interest from the accumulated interest.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct AccruedInterest | The AccruedInterest storage. |
| amount | uint256 | The amount of interest to deduct. |

### calculateInterest

```solidity
function calculateInterest(struct AccruedInterest self, struct LpContext ctx, uint256 tokenAmount, uint256 until) internal view returns (uint256)
```

Calculates the accumulated interest for a given token amount and period of time

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct AccruedInterest | The AccruedInterest storage |
| ctx | struct LpContext | The LpContext instance for interest calculation |
| tokenAmount | uint256 | The amount of tokens to calculate interest for |
| until | uint256 | The timestamp until which interest should be accumulated |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accumulated interest amount |

