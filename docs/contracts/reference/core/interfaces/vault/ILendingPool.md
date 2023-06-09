# Solidity API

## ILendingPool

_Interface for a lending pool contract._

### FlashLoan

```solidity
event FlashLoan(address sender, address recipient, uint256 amount, uint256 paid, uint256 paidToTakerPool, uint256 paidToMakerPool)
```

_Emitted when a flash loan is executed._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sender | address | The address initiating the flash loan. |
| recipient | address | The address receiving the flash loan. |
| amount | uint256 | The amount of the flash loan. |
| paid | uint256 | The amount paid back after the flash loan. |
| paidToTakerPool | uint256 | The amount paid to the taker pool after the flash loan. |
| paidToMakerPool | uint256 | The amount paid to the maker pool after the flash loan. |

### flashLoan

```solidity
function flashLoan(address token, uint256 amount, address recipient, bytes data) external
```

_Executes a flash loan._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token for the flash loan. |
| amount | uint256 | The amount of the flash loan. |
| recipient | address | The address to receive the flash loan. |
| data | bytes | Additional data for the flash loan. |

### getPendingBinShare

```solidity
function getPendingBinShare(address market, uint256 binBalance) external view returns (uint256)
```

Retrieves the pending share of earnings for a specific bin (subset) of funds in a market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| binBalance | uint256 | The balance of funds in the bin. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The pending share of earnings for the specified bin. |

