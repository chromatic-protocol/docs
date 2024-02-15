---
id: MarketLiquidateFacet
title: MarketLiquidateFacet.sol
---
# [MarketLiquidateFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLiquidateFacet.sol)

## MarketLiquidateFacet

_A contract that manages liquidations._

### claimPosition

```solidity
function claimPosition(uint256 positionId, address keeper, uint256 keeperFee) external
```

_This function can only be called by the chromatic liquidator contract.
     Throws a `NotExistPosition` error if the requested position does not exist.
     Throws a `NotClaimablePosition` error if the position's close version is not in the past, indicating that it is not claimable._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to claim. |
  | keeper | address | The address of the keeper claiming the position. |
  | keeperFee | uint256 | The native token amount of the keeper's fee. |

### liquidate

```solidity
function liquidate(uint256 positionId, address keeper, uint256 keeperFee) external
```

_This function can only be called by the chromatic liquidator contract.
     The liquidation process checks if the position should be liquidated based on its profitability.
     If the position does not meet the liquidation criteria, the function returns without performing any action.
     Throws a `NotExistPosition` error if the requested position does not exist.
     Throws an `AlreadyClosedPosition` error if the position is already closed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to liquidate. |
  | keeper | address | The address of the keeper performing the liquidation. |
  | keeperFee | uint256 | The native token amount of the keeper's fee. |

### checkLiquidation

```solidity
function checkLiquidation(uint256 positionId) external view returns (bool _liquidate)
```

_Checks if a position is eligible for liquidation._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidate | bool | A boolean indicating if the position is eligible for liquidation. |

### checkLiquidationWithOracleVersion

```solidity
function checkLiquidationWithOracleVersion(uint256 positionId, struct IOracleProvider.OracleVersion oracleVersion) external view returns (bool _liquidate)
```

_Checks if a position is eligible for liquidation._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to check. |
  | oracleVersion | struct IOracleProvider.OracleVersion | The oracle version data for liquidation check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidate | bool | A boolean indicating if the position is eligible for liquidation. |

### _checkLiquidation

```solidity
function _checkLiquidation(struct LpContext ctx, struct Position position, struct IOracleProvider.OracleVersion oracleVersion) internal view returns (bool _liquidate, int256 _pnl)
```

_Internal function for checking if a position should be liquidated._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | ctx | struct LpContext | The LpContext containing the current oracle version and synchronization information. |
  | position | struct Position | The Position object representing the position to be checked. |
  | oracleVersion | struct IOracleProvider.OracleVersion | The oracle version data for liquidation check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidate | bool | A boolean indicating whether the position should be liquidated. |
  | _pnl | int256 | The profit or loss amount of the position. |

### checkClaimPosition

```solidity
function checkClaimPosition(uint256 positionId) external view returns (bool)
```

_Checks if a position is eligible for claim._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | A boolean indicating if the position is eligible for claim. |

