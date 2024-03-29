---
id: LiquidityBin
title: LiquidityBin.sol
---
# [LiquidityBin.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/liquidity/LiquidityBin.sol)

## LiquidityBin

```solidity
struct LiquidityBin {
  uint256 clbTokenId;
  BinLiquidity _liquidity;
  BinPosition _position;
  BinClosedPosition _closedPosition;
}
```

_Structure representing a liquidity bin_

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbTokenId | uint256 | The ID of the CLB token |
| _liquidity | BinLiquidity | The liquidity data for the bin |
| _position | BinPosition | The position data for the bin |
| _closedPosition | BinClosedPosition | The closed position data for the bin |

## LiquidityBinLib

Library for managing liquidity bin

### _settle

```solidity
modifier _settle(struct LiquidityBin self, struct LpContext ctx)
```

Modifier to settle the pending positions, closing positions,
        and pending liquidity of the bin before executing a function.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext data struct. |

### settle

```solidity
function settle(struct LiquidityBin self, struct LpContext ctx) internal
```

Settles the pending positions, closing positions, and pending liquidity of the bin.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext data struct. |

### initialize

```solidity
function initialize(struct LiquidityBin self, int16 tradingFeeRate) internal
```

Initializes the liquidity bin with the given trading fee rate

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |
  | tradingFeeRate | int16 | The trading fee rate to set |

### openPosition

```solidity
function openPosition(struct LiquidityBin self, struct LpContext ctx, struct PositionParam param, uint256 tradingFee) internal
```

Opens a new position in the liquidity bin

_Throws an error with the code `Errors.NOT_ENOUGH_FREE_LIQUIDITY` if there is not enough free liquidity._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |
  | ctx | struct LpContext | The LpContext data struct |
  | param | struct PositionParam | The position parameters |
  | tradingFee | uint256 | The trading fee amount |

### closePosition

```solidity
function closePosition(struct LiquidityBin self, struct LpContext ctx, struct PositionParam param) internal
```

Closes a position in the liquidity bin

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |
  | ctx | struct LpContext | The LpContext data struct |
  | param | struct PositionParam | The position parameters |

### claimPosition

```solidity
function claimPosition(struct LiquidityBin self, struct LpContext ctx, struct PositionParam param, int256 takerPnl) internal
```

Claims an existing liquidity position in the bin.

_This function claims the position using the specified parameters
     and updates the total by subtracting the absolute value
     of the taker's profit or loss (takerPnl) from it._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | param | struct PositionParam | The PositionParam memory. |
  | takerPnl | int256 | The taker's profit/loss. |

### liquidity

```solidity
function liquidity(struct LiquidityBin self) internal view returns (uint256)
```

Retrieves the total liquidity in the bin

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The total liquidity in the bin |

### freeLiquidity

```solidity
function freeLiquidity(struct LiquidityBin self) internal view returns (uint256)
```

Retrieves the free liquidity in the bin (liquidity minus total maker margin)

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The free liquidity in the bin |

### applyEarning

```solidity
function applyEarning(struct LiquidityBin self, uint256 earning) internal
```

Applies earnings to the liquidity bin

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage |
  | earning | uint256 | The earning amount to apply |

### value

```solidity
function value(struct LiquidityBin self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the value of the bin.

_This function considers the unrealized profit or loss of the position
     and adds it to the total value.
     Additionally, it includes the pending bin share from the market's vault._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The value of the bin. |

### acceptAddLiquidity

```solidity
function acceptAddLiquidity(struct LiquidityBin self, struct LpContext ctx, uint256 amount) internal
```

Accepts an add liquidity request.

_This function adds liquidity to the bin by calling the `onAddLiquidity` function
     of the liquidity component._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | amount | uint256 | The amount of liquidity to add. |

### acceptClaimLiquidity

```solidity
function acceptClaimLiquidity(struct LiquidityBin self, struct LpContext ctx, uint256 amount, uint256 oracleVersion) internal returns (uint256)
```

Accepts a claim liquidity request.

_This function claims liquidity from the bin by calling the `onClaimLiquidity` function
     of the liquidity component._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | amount | uint256 | The amount of liquidity to claim.        (should be the same as the one used in acceptAddLiquidity) |
  | oracleVersion | uint256 | The oracle version used for the claim.        (should be the oracle version when call acceptAddLiquidity) |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The amount of liquidity (CLB tokens) received as a result of the liquidity claim. |

### acceptRemoveLiquidity

```solidity
function acceptRemoveLiquidity(struct LiquidityBin self, struct LpContext ctx, uint256 clbTokenAmount) internal
```

Accepts a remove liquidity request.

_This function removes liquidity from the bin by calling the `onRemoveLiquidity` function
     of the liquidity component._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | clbTokenAmount | uint256 | The amount of CLB tokens to remove. |

### acceptWithdrawLiquidity

```solidity
function acceptWithdrawLiquidity(struct LiquidityBin self, struct LpContext ctx, uint256 clbTokenAmount, uint256 oracleVersion) internal returns (uint256 amount, uint256 burnedCLBTokenAmount)
```

Accepts a withdraw liquidity request.

_This function withdraws liquidity from the bin by calling the `onWithdrawLiquidity` function
     of the liquidity component._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The LiquidityBin storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | clbTokenAmount | uint256 | The amount of CLB tokens to withdraw.        (should be the same as the one used in acceptRemoveLiquidity) |
  | oracleVersion | uint256 | The oracle version used for the withdrawal.        (should be the oracle version when call acceptRemoveLiquidity) |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The amount of liquidity withdrawn |
  | burnedCLBTokenAmount | uint256 | The amount of CLB tokens burned during the withdrawal. |

### pendingLiquidity

```solidity
function pendingLiquidity(struct LiquidityBin self) internal view returns (struct PendingLiquidity)
```

_Retrieves the pending liquidity information from a LiquidityBin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The reference to the LiquidityBin struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct PendingLiquidity | pendingLiquidity An instance of PendingLiquidity representing the pending liquidity information. |

### claimableLiquidity

```solidity
function claimableLiquidity(struct LiquidityBin self, uint256 oracleVersion) internal view returns (struct ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific oracle version from a LiquidityBin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The reference to the LiquidityBin struct. |
  | oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct ClaimableLiquidity | claimableLiquidity An instance of ClaimableLiquidity representing the claimable liquidity information. |

### pendingPosition

```solidity
function pendingPosition(struct LiquidityBin self) internal view returns (struct PendingPosition)
```

_Retrieves the pending position information from a LiquidityBin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The reference to the LiquidityBin struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct PendingPosition | pendingPosition An instance of PendingPosition representing the pending position information. |

### closingPosition

```solidity
function closingPosition(struct LiquidityBin self) internal view returns (struct ClosingPosition)
```

_Retrieves the closing position information from a LiquidityBin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityBin | The reference to the LiquidityBin struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct ClosingPosition | closingPosition An instance of ClosingPosition representing the closing position information. |

