---
id: MarketStorage
title: MarketStorage.sol
---
# [MarketStorage.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/MarketStorage.sol)

## MarketStorage

```solidity
struct MarketStorage {
  contract IChromaticMarketFactory factory;
  contract IOracleProvider oracleProvider;
  contract IERC20Metadata settlementToken;
  contract ICLBToken clbToken;
  contract IChromaticVault vault;
  struct LiquidityPool liquidityPool;
  uint8 feeProtocol;
}
```

## LpReceiptStorage

```solidity
struct LpReceiptStorage {
  uint256 lpReceiptId;
  mapping(uint256 => struct LpReceipt) lpReceipts;
}
```

## PositionStorage

```solidity
struct PositionStorage {
  uint256 positionId;
  mapping(uint256 => struct Position) positions;
}
```

## MarketStorageLib

### MARKET_STORAGE_POSITION

```solidity
bytes32 MARKET_STORAGE_POSITION
```

### marketStorage

```solidity
function marketStorage() internal pure returns (struct MarketStorage ms)
```

## LpReceiptStorageLib

### LP_RECEIPT_STORAGE_POSITION

```solidity
bytes32 LP_RECEIPT_STORAGE_POSITION
```

### lpReceiptStorage

```solidity
function lpReceiptStorage() internal pure returns (struct LpReceiptStorage ls)
```

### nextId

```solidity
function nextId(struct LpReceiptStorage self) internal returns (uint256 id)
```

### setReceipt

```solidity
function setReceipt(struct LpReceiptStorage self, struct LpReceipt receipt) internal
```

### getReceipt

```solidity
function getReceipt(struct LpReceiptStorage self, uint256 receiptId) internal view returns (struct LpReceipt receipt)
```

### deleteReceipt

```solidity
function deleteReceipt(struct LpReceiptStorage self, uint256 receiptId) internal
```

### deleteReceipts

```solidity
function deleteReceipts(struct LpReceiptStorage self, uint256[] receiptIds) internal
```

## PositionStorageLib

### POSITION_STORAGE_POSITION

```solidity
bytes32 POSITION_STORAGE_POSITION
```

### positionStorage

```solidity
function positionStorage() internal pure returns (struct PositionStorage ls)
```

### nextId

```solidity
function nextId(struct PositionStorage self) internal returns (uint256 id)
```

### setPosition

```solidity
function setPosition(struct PositionStorage self, struct Position position) internal
```

### getPosition

```solidity
function getPosition(struct PositionStorage self, uint256 positionId) internal view returns (struct Position position)
```

### getStoragePosition

```solidity
function getStoragePosition(struct PositionStorage self, uint256 positionId) internal view returns (struct Position position)
```

### deletePosition

```solidity
function deletePosition(struct PositionStorage self, uint256 positionId) internal
```

