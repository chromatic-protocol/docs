---
id: ChromaticLens
title: ChromaticLens.sol
---
# [ChromaticLens.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticLens.sol)

## ChromaticLens

### EntryPriceStruct

```solidity
struct EntryPriceStruct {
  uint256 positionId;
  Fixed18 price;
}
```

### CLBValue

```solidity
struct CLBValue {
  int16 tradingFeeRate;
  UFixed18 value;
}
```

### LiquidityBinValue

```solidity
struct LiquidityBinValue {
  int16 tradingFeeRate;
  UFixed18 value;
}
```

### LiquidityBin

```solidity
struct LiquidityBin {
  int16 tradingFeeRate;
  uint256 liquidity;
  uint256 freeVolume;
}
```

### eachEntryPrice

```solidity
function eachEntryPrice(contract IChromaticMarket market, uint256[] positionIds) external view returns (struct ChromaticLens.EntryPriceStruct[] results)
```

### getCLBValues

```solidity
function getCLBValues(contract IChromaticMarket market, int16[] tradingFeeRates) external view returns (struct ChromaticLens.CLBValue[] results)
```

### liquidityBinValue

```solidity
function liquidityBinValue(contract IChromaticMarket market, int16[] tradingFeeRates) public view returns (struct ChromaticLens.LiquidityBinValue[] results)
```

### liquidityBins

```solidity
function liquidityBins(contract IChromaticMarket market, int16[] tradingFeeRates) external view returns (struct ChromaticLens.LiquidityBin[] results)
```

get Liquidity information for each slot

### lpReceipts

```solidity
function lpReceipts(contract IChromaticMarket market, uint256[] receiptIds) public view returns (struct LpReceipt[] result)
```

### RemoveLiquidityInfo

```solidity
struct RemoveLiquidityInfo {
  uint256 receiptId;
  int16 tradingFeeRate;
  uint256 clbTokenAmount;
  uint256 burningAmount;
  uint256 tokenAmount;
}
```

### removableLiquidity

```solidity
function removableLiquidity(contract IChromaticMarket market, uint256[] receiptIds) external view returns (struct ChromaticLens.RemoveLiquidityInfo[] results)
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

