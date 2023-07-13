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

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| version | uint256 | An oracle versions. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IOracleProvider.OracleVersion | oracleVersion The OracleVersion for the specified oracle version. |

### lpReceipts

```solidity
function lpReceipts(contract IChromaticMarket market, address owner) public view returns (struct LpReceipt[] result)
```

_Retrieves the LP receipts for the specified owner in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| owner | address | The address of the LP token owner. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | struct LpReceipt[] | An array of LpReceipt containing the LP receipts for the owner. |

### clbBalanceOf

```solidity
function clbBalanceOf(contract IChromaticMarket market, address owner) external view returns (struct ChromaticLens.CLBBalance[])
```

_Retrieves the CLB token balances for the specified owner in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| owner | address | The address of the CLB token owner. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ChromaticLens.CLBBalance[] | An array of CLBBalance containing the CLB token balance information for the owner. |

### claimableLiquidity

```solidity
function claimableLiquidity(contract IChromaticMarket market, int16 tradingFeeRate, uint256 _oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The Chromatic Market from which to retrieve the claimable liquidity information. |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
| _oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of IChromaticMarket.ClaimableLiquidity representing the claimable liquidity information. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses(contract IChromaticMarket market) external view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the specified Chromatic Market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The Chromatic Market contract for which liquidity bin statuses are retrieved. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

