---
id: IChromaticFlashLoanCallback
title: IChromaticFlashLoanCallback.sol
---
# [IChromaticFlashLoanCallback.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/callback/IChromaticFlashLoanCallback.sol)

## IChromaticFlashLoanCallback

_Interface for a contract that handles flash loan callbacks in the Chromatic protocol.
     Flash loans are loans that are borrowed and repaid within a single transaction.
     This interface defines the function signature for the flash loan callback._

### flashLoanCallback

```solidity
function flashLoanCallback(uint256 fee, bytes data) external
```

Handles the flash loan callback after a flash loan has been executed.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | fee | uint256 | The fee amount charged for the flash loan. |
  | data | bytes | Additional data associated with the flash loan. |

