---
id: ChromaticLens
title: ChromaticLens.sol
---
# [ChromaticLens.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticLens.sol)

## ChromaticLens

_A contract that provides utility functions for interacting with Chromatic markets._

### LiquidityBinValue

```solidity
struct LiquidityBinValue {
  int16 tradingFeeRate;
  uint256 value;
}
```

### LiquidityBinsParam

```solidity
struct LiquidityBinsParam {
  int16 tradingFeeRate;
  uint256 oracleVersion;
}
```

### LiquidityBin

```solidity
struct LiquidityBin {
  int16 tradingFeeRate;
  uint256 liquidity;
  uint256 freeLiquidity;
  uint256 clbTokenAmount;
  uint256 burningAmount;
  uint256 tokenAmount;
}
```

### oracleAtVersions

```solidity
function oracleAtVersions(contract IChromaticMarket market, uint256[] oracleVersions) external view returns (struct IOracleProvider.OracleVersion[] results)
```

_Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| oracleVersions | uint256[] | An array of Oracle versions. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | struct IOracleProvider.OracleVersion[] | An array of OracleVersion containing the Oracle versions for each oracle version. |

### liquidityBinValue

```solidity
function liquidityBinValue(contract IChromaticMarket market, int16[] tradingFeeRates) public view returns (struct ChromaticLens.LiquidityBinValue[] results)
```

_Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| tradingFeeRates | int16[] | An array of trading fee rates. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | struct ChromaticLens.LiquidityBinValue[] | An array of LiquidityBinValue containing the liquidity bin values for each trading fee rate. |

### liquidityBins

```solidity
function liquidityBins(contract IChromaticMarket market, struct ChromaticLens.LiquidityBinsParam[] params) external view returns (struct ChromaticLens.LiquidityBin[] results)
```

_Retrieves the liquidity information for each liquidity bin specified by the trading fee rates and Oracle versions in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| params | struct ChromaticLens.LiquidityBinsParam[] | An array of LiquidityBinsParam containing the trading fee rates and Oracle versions. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | struct ChromaticLens.LiquidityBin[] | An array of LiquidityBin containing the liquidity information for each trading fee rate and Oracle version. |

### lpReceipts

```solidity
function lpReceipts(contract IChromaticMarket market, uint256[] receiptIds) public view returns (struct LpReceipt[] result)
```

_Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | contract IChromaticMarket | The address of the Chromatic market contract. |
| receiptIds | uint256[] | An array of receipt IDs. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| result | struct LpReceipt[] | An array of LpReceipt containing the LP receipts for each receipt ID. |

### calculateCLBTokenValueBatch

```solidity
function calculateCLBTokenValueBatch(address market, int16[] tradingFeeRates, uint256[] clbTokenAmounts) external view returns (uint256[] results)
```

_Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the Chromatic market contract. |
| tradingFeeRates | int16[] | An array of trading fee rates. |
| clbTokenAmounts | uint256[] | An array of CLB token amounts. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | uint256[] | An array of uint256 containing the calculated CLB token values for each trading fee rate and CLB token amount. |

### calculateCLBTokenMintingBatch

```solidity
function calculateCLBTokenMintingBatch(address market, int16[] tradingFeeRates, uint256[] amounts) external view returns (uint256[] results)
```

_Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the Chromatic market contract. |
| tradingFeeRates | int16[] | An array of trading fee rates. |
| amounts | uint256[] | An array of specified amounts. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | uint256[] | An array of uint256 containing the calculated CLB token minting amounts for each trading fee rate and specified amount. |

### totalSupplies

```solidity
function totalSupplies(address market, int16[] tradingFeeRates) external view returns (uint256[] supplies)
```

_Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the Chromatic market contract. |
| tradingFeeRates | int16[] | An array of trading fee rates. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| supplies | uint256[] | An array of uint256 containing the total supply of CLB tokens for each trading fee rate. |

