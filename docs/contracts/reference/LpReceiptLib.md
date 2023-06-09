# Solidity API

## LpReceiptLib

Provides functions that operate on the `LpReceipt` struct

### clbTokenId

```solidity
function clbTokenId(struct LpReceipt self) internal pure returns (uint256)
```

Computes the ID of the CLBToken contract based on the trading fee rate.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpReceipt | The LpReceipt struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The ID of the CLBToken contract. |

