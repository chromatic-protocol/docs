---
id: IVault
title: IVault.sol
---
# [IVault.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/vault/IVault.sol)

## IVault

_Interface for the Vault contract, responsible for managing positions and liquidity._

### OnOpenPosition

```solidity
event OnOpenPosition(address market, uint256 positionId, uint256 takerMargin, uint256 tradingFee, uint256 protocolFee)
```

Emitted when a position is opened.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| positionId | uint256 | The ID of the opened position. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| tradingFee | uint256 | The trading fee associated with the position. |
| protocolFee | uint256 | The protocol fee associated with the position. |

### OnClaimPosition

```solidity
event OnClaimPosition(address market, uint256 positionId, address recipient, uint256 takerMargin, uint256 settlementAmount)
```

Emitted when a position is claimed.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| positionId | uint256 | The ID of the claimed position. |
| recipient | address | The address of the recipient of the settlement amount. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| settlementAmount | uint256 | The settlement amount received by the recipient. |

### OnAddLiquidity

```solidity
event OnAddLiquidity(address market, uint256 amount)
```

Emitted when liquidity is added to the vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| amount | uint256 | The amount of liquidity added. |

### OnSettlePendingLiquidity

```solidity
event OnSettlePendingLiquidity(address market, uint256 pendingDeposit, uint256 pendingWithdrawal)
```

Emitted when pending liquidity is settled.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| pendingDeposit | uint256 | The amount of pending deposit being settled. |
| pendingWithdrawal | uint256 | The amount of pending withdrawal being settled. |

### OnWithdrawLiquidity

```solidity
event OnWithdrawLiquidity(address market, uint256 amount, address recipient)
```

Emitted when liquidity is withdrawn from the vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| amount | uint256 | The amount of liquidity withdrawn. |
| recipient | address | The address of the recipient of the withdrawn liquidity. |

### TransferKeeperFee

```solidity
event TransferKeeperFee(uint256 fee, uint256 amount)
```

Emitted when the keeper fee is transferred.

| Name | Type | Description |
| ---- | ---- | ----------- |
| fee | uint256 | The amount of the transferred keeper fee as native token. |
| amount | uint256 | The amount of settlement token to be used for paying keeper fee. |

### TransferKeeperFee

```solidity
event TransferKeeperFee(address market, uint256 fee, uint256 amount)
```

Emitted when the keeper fee is transferred for a specific market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| fee | uint256 | The amount of the transferred keeper fee as native token. |
| amount | uint256 | The amount of settlement token to be used for paying keeper fee. |

### TransferProtocolFee

```solidity
event TransferProtocolFee(address market, uint256 positionId, uint256 amount)
```

Emitted when the protocol fee is transferred for a specific position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| positionId | uint256 | The ID of the position. |
| amount | uint256 | The amount of the transferred fee. |

### onOpenPosition

```solidity
function onOpenPosition(uint256 positionId, uint256 takerMargin, uint256 tradingFee, uint256 protocolFee) external
```

Called when a position is opened by a market contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the opened position. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| tradingFee | uint256 | The trading fee associated with the position. |
| protocolFee | uint256 | The protocol fee associated with the position. |

### onClaimPosition

```solidity
function onClaimPosition(uint256 positionId, address recipient, uint256 takerMargin, uint256 settlementAmount) external
```

Called when a position is claimed by a market contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the claimed position. |
| recipient | address | The address that will receive the settlement amount. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| settlementAmount | uint256 | The amount to be settled for the position. |

### onAddLiquidity

```solidity
function onAddLiquidity(uint256 amount) external
```

Called when liquidity is added to the vault by a market contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of liquidity being added. |

### onSettlePendingLiquidity

```solidity
function onSettlePendingLiquidity(uint256 pendingDeposit, uint256 pendingWithdrawal) external
```

Called when pending liquidity is settled in the vault by a market contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| pendingDeposit | uint256 | The amount of pending deposits being settled. |
| pendingWithdrawal | uint256 | The amount of pending withdrawals being settled. |

### onWithdrawLiquidity

```solidity
function onWithdrawLiquidity(address recipient, uint256 amount) external
```

Called when liquidity is withdrawn from the vault by a market contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address that will receive the withdrawn liquidity. |
| amount | uint256 | The amount of liquidity to be withdrawn. |

### transferKeeperFee

```solidity
function transferKeeperFee(address keeper, uint256 fee, uint256 margin) external returns (uint256 usedFee)
```

Transfers the keeper fee from the market to the specified keeper.

| Name | Type | Description |
| ---- | ---- | ----------- |
| keeper | address | The address of the keeper to receive the fee. |
| fee | uint256 | The amount of the fee to transfer as native token. |
| margin | uint256 | The margin amount used for the fee payment. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| usedFee | uint256 | The actual settlement token amount of fee used for the transfer. |

