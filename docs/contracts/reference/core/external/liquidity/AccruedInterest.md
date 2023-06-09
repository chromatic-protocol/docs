# Solidity API

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

#### Parameters

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct AccruedInterest | The AccruedInterest storage. |
| amount | uint256 | The amount of interest to deduct. |

### calculateInterest

```solidity
function calculateInterest(struct AccruedInterest self, struct LpContext ctx, uint256 tokenAmount, uint256 until) internal view returns (uint256)
```

Calculates the accumulated interest for a given token amount and period of time

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct AccruedInterest | The AccruedInterest storage |
| ctx | struct LpContext | The LpContext instance for interest calculation |
| tokenAmount | uint256 | The amount of tokens to calculate interest for |
| until | uint256 | The timestamp until which interest should be accumulated |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accumulated interest amount |

