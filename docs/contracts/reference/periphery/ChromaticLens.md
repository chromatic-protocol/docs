---
id: ChromaticLens
title: ChromaticLens.sol
---
# [ChromaticLens.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticLens.sol)

## ChromaticLens

_A contract that provides utility functions for interacting with Chromatic markets._

### CLBBalance

```solidity
struct CLBBalance {
  uint256 tokenId;
  uint256 balance;
  uint256 totalSupply;
  uint256 binValue;
}
```

### router

```solidity
contract IChromaticRouter router
```

### constructor

```solidity
constructor(contract IChromaticRouter _router) public
```

### oracleVersion

```solidity
function oracleVersion(contract IChromaticMarket market, uint256 version) external view returns (struct IOracleProvider.OracleVersion)
```

_Retrieves the OracleVersion for the specified oracle version in the given Chromatic market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The address of the Chromatic market contract. |
  | version | uint256 | An oracle versions. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | oracleVersion The OracleVersion for the specified oracle version. |

### lpReceipts

```solidity
function lpReceipts(contract IChromaticMarket market, address owner) public view returns (struct LpReceipt[] result)
```

_Retrieves the LP receipts for the specified owner in the given Chromatic market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The address of the Chromatic market contract. |
  | owner | address | The address of the LP token owner. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | result | struct LpReceipt[] | An array of LpReceipt containing the LP receipts for the owner. |

### clbBalanceOf

```solidity
function clbBalanceOf(contract IChromaticMarket market, address owner) external view returns (struct ChromaticLens.CLBBalance[])
```

_Retrieves the CLB token balances for the specified owner in the given Chromatic market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The address of the Chromatic market contract. |
  | owner | address | The address of the CLB token owner. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct ChromaticLens.CLBBalance[] | An array of CLBBalance containing the CLB token balance information for the owner. |

### pendingLiquidity

```solidity
function pendingLiquidity(contract IChromaticMarket market, int16 tradingFeeRate) external view returns (struct IMarketLiquidity.PendingLiquidity)
```

_Retrieves the pending liquidity information for a specific trading fee rate in the given Chromatic market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The Chromatic market from which to retrieve the pending liquidity information. |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.PendingLiquidity | pendingLiquidity An instance of IChromaticMarket.PendingLiquidity representing the pending liquidity information. |

### pendingLiquidityBatch

```solidity
function pendingLiquidityBatch(contract IChromaticMarket market, int16[] tradingFeeRates) external view returns (struct IMarketLiquidity.PendingLiquidity[])
```

_Retrieves the pending liquidity information for a list of trading fee rates in the given Chromatic market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The Chromatic market from which to retrieve the pending liquidity information. |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.PendingLiquidity[] | pendingLiquidityList An array of IChromaticMarket.PendingLiquidity representing the pending liquidity information for each trading fee rate. |

### claimableLiquidity

```solidity
function claimableLiquidity(contract IChromaticMarket market, int16 tradingFeeRate, uint256 _oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The Chromatic Market from which to retrieve the claimable liquidity information. |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
  | _oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of IChromaticMarket.ClaimableLiquidity representing the claimable liquidity information. |

### claimableLiquidityBatch

```solidity
function claimableLiquidityBatch(contract IChromaticMarket market, int16[] tradingFeeRates, uint256 _oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity[])
```

_Retrieves the claimable liquidity information for a list of trading fee rates and a specific oracle version from the given Chromatic Market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The Chromatic Market from which to retrieve the claimable liquidity information. |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the claimable liquidity. |
  | _oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.ClaimableLiquidity[] | claimableLiquidityList An array of IChromaticMarket.ClaimableLiquidity representing the claimable liquidity information for each trading fee rate and the oracle version. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses(contract IChromaticMarket market) external view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the specified Chromatic Market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | contract IChromaticMarket | The Chromatic Market contract for which liquidity bin statuses are retrieved. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

