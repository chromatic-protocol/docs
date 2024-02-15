---
id: IMarketEvents
title: IMarketEvents.sol
---
# [IMarketEvents.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketEvents.sol)

## IMarketEvents

### ProtocolFeeRateUpdated

```solidity
event ProtocolFeeRateUpdated(uint16 protocolFeeRateOld, uint16 protocolFeeRateNew)
```

Emitted when the protocol fee rate of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | protocolFeeRateOld | uint16 | The previous value of the protocol fee rate |
  | protocolFeeRateNew | uint16 | The updated value of the protocol fee rate |

### PositionModeUpdated

```solidity
event PositionModeUpdated(enum PositionMode positionModeOld, enum PositionMode positionModeNew)
```

Emitted when the position mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionModeOld | enum PositionMode | The previous value of the position mode |
  | positionModeNew | enum PositionMode | The updated value of the position mode |

### LiquidityModeUpdated

```solidity
event LiquidityModeUpdated(enum LiquidityMode liquidityModeOld, enum LiquidityMode liquidityModeNew)
```

Emitted when the liquidity mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | liquidityModeOld | enum LiquidityMode | The previous value of the liquidity mode |
  | liquidityModeNew | enum LiquidityMode | The updated value of the liquidity mode |

### DisplayModeUpdated

```solidity
event DisplayModeUpdated(enum DisplayMode displayModeOld, enum DisplayMode displayModeNew)
```

Emitted when the display mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | displayModeOld | enum DisplayMode | The previous value of the display mode |
  | displayModeNew | enum DisplayMode | The updated value of the display mode |

### AddLiquidity

```solidity
event AddLiquidity(struct LpReceipt receipt)
```

_Emitted when liquidity is added to the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |

### AddLiquidityBatch

```solidity
event AddLiquidityBatch(struct LpReceipt[] receipts)
```

_Emitted when liquidity is added to the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | An array of LP receipts. |

### ClaimLiquidity

```solidity
event ClaimLiquidity(struct LpReceipt receipt, uint256 clbTokenAmount)
```

_Emitted when liquidity is claimed from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |
  | clbTokenAmount | uint256 | The amount of CLB tokens claimed. |

### ClaimLiquidityBatch

```solidity
event ClaimLiquidityBatch(struct LpReceipt[] receipts, uint256[] clbTokenAmounts)
```

_Emitted when liquidity is claimed from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | An array of LP receipts. |
  | clbTokenAmounts | uint256[] | The amount list of CLB tokens claimed. |

### RemoveLiquidity

```solidity
event RemoveLiquidity(struct LpReceipt receipt)
```

_Emitted when liquidity is removed from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |

### RemoveLiquidityBatch

```solidity
event RemoveLiquidityBatch(struct LpReceipt[] receipts)
```

_Emitted when liquidity is removed from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | An array of LP receipts. |

### WithdrawLiquidity

```solidity
event WithdrawLiquidity(struct LpReceipt receipt, uint256 amount, uint256 burnedCLBTokenAmount)
```

_Emitted when liquidity is withdrawn from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | The liquidity receipt. |
  | amount | uint256 | The amount of liquidity withdrawn. |
  | burnedCLBTokenAmount | uint256 | The amount of burned CLB tokens. |

### WithdrawLiquidityBatch

```solidity
event WithdrawLiquidityBatch(struct LpReceipt[] receipts, uint256[] amounts, uint256[] burnedCLBTokenAmounts)
```

_Emitted when liquidity is withdrawn from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | An array of LP receipts. |
  | amounts | uint256[] | The amount list of liquidity withdrawn. |
  | burnedCLBTokenAmounts | uint256[] | The amount list of burned CLB tokens. |

### OpenPosition

```solidity
event OpenPosition(address account, struct Position position)
```

_Emitted when a position is opened._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account opening the position. |
  | position | struct Position | The opened position. |

### ClosePosition

```solidity
event ClosePosition(address account, struct Position position)
```

_Emitted when a position is closed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account closing the position. |
  | position | struct Position | The closed position. |

### ClaimPosition

```solidity
event ClaimPosition(address account, int256 pnl, uint256 interest, struct Position position)
```

_Emitted when a position is claimed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account claiming the position. |
  | pnl | int256 | The profit or loss of the claimed position. |
  | interest | uint256 | The interest paid for the claimed position. |
  | position | struct Position | The claimed position. |

### ClaimPositionByKeeper

```solidity
event ClaimPositionByKeeper(address account, int256 pnl, uint256 interest, uint256 usedKeeperFee, struct Position position)
```

_Emitted when a position is claimed by keeper._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account claiming the position. |
  | pnl | int256 | The profit or loss of the claimed position. |
  | interest | uint256 | The interest paid for the claimed position. |
  | usedKeeperFee | uint256 | The amount of keeper fee used for the liquidation. |
  | position | struct Position | The claimed position. |

### Liquidate

```solidity
event Liquidate(address account, int256 pnl, uint256 interest, uint256 usedKeeperFee, struct Position position)
```

_Emitted when a position is liquidated._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account being liquidated. |
  | pnl | int256 | The profit or loss of the claimed position. |
  | interest | uint256 | The interest paid for the claimed position. |
  | usedKeeperFee | uint256 | The amount of keeper fee used for the liquidation. |
  | position | struct Position | The liquidated position. |

