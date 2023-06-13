---
id: ChromaticLens
title: ChromaticLens.sol
---
# [ChromaticLens.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticLens.sol)

## ChromaticLens

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
  uint256 freeVolume;
  uint256 clbTokenAmount;
  uint256 burningAmount;
  uint256 tokenAmount;
}
```

### oracleAtVersions

```solidity
function oracleAtVersions(contract IChromaticMarket market, uint256[] oracleVersions) external view returns (struct IOracleProvider.OracleVersion[] results)
```

### liquidityBinValue

```solidity
function liquidityBinValue(contract IChromaticMarket market, int16[] tradingFeeRates) public view returns (struct ChromaticLens.LiquidityBinValue[] results)
```

### liquidityBins

```solidity
function liquidityBins(contract IChromaticMarket market, struct ChromaticLens.LiquidityBinsParam[] params) external view returns (struct ChromaticLens.LiquidityBin[] results)
```

get Liquidity information for each slot

### lpReceipts

```solidity
function lpReceipts(contract IChromaticMarket market, uint256[] receiptIds) public view returns (struct LpReceipt[] result)
```

### calculateCLBTokenValueBatch

```solidity
function calculateCLBTokenValueBatch(address market, int16[] tradingFeeRates, uint256[] clbTokenAmounts) external view returns (uint256[] results)
```

### calculateCLBTokenMintingBatch

```solidity
function calculateCLBTokenMintingBatch(address market, int16[] tradingFeeRates, uint256[] amounts) external view returns (uint256[] results)
```

### totalSupplies

```solidity
function totalSupplies(address market, int16[] tradingFeeRates) external view returns (uint256[] supplies)
```

