---
id: IInterestCalculator
title: IInterestCalculator.sol
---
# [IInterestCalculator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IInterestCalculator.sol)

## IInterestCalculator

_Interface for an interest calculator contract._

### calculateInterest

```solidity
function calculateInterest(address token, uint256 amount, uint256 from, uint256 to) external view returns (uint256)
```

Calculates the interest accrued for a given token and amount within a specified time range.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |
| amount | uint256 | The amount of the token. |
| from | uint256 | The starting timestamp (inclusive) of the time range. |
| to | uint256 | The ending timestamp (exclusive) of the time range. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accrued interest for the specified token and amount within the given time range. |

