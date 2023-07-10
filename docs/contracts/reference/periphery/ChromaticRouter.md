---
id: ChromaticRouter
title: ChromaticRouter.sol
---
# [ChromaticRouter.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticRouter.sol)

## ChromaticRouter

_A router contract that facilitates liquidity provision and trading on Chromatic._

### AddLiquidityCallbackData

```solidity
struct AddLiquidityCallbackData {
  address provider;
  uint256 amount;
}
```

### AddLiquidityBatchCallbackData

```solidity
struct AddLiquidityBatchCallbackData {
  address provider;
  uint256 amount;
}
```

### ClaimLiquidityCallbackData

```solidity
struct ClaimLiquidityCallbackData {
  address provider;
}
```

### ClaimLiquidityBatchCallbackData

```solidity
struct ClaimLiquidityBatchCallbackData {
  address provider;
}
```

### RemoveLiquidityCallbackData

```solidity
struct RemoveLiquidityCallbackData {
  address provider;
  uint256 clbTokenAmount;
}
```

### RemoveLiquidityBatchCallbackData

```solidity
struct RemoveLiquidityBatchCallbackData {
  address provider;
  uint256[] clbTokenAmounts;
}
```

### WithdrawLiquidityCallbackData

```solidity
struct WithdrawLiquidityCallbackData {
  address provider;
}
```

### WithdrawLiquidityBatchCallbackData

```solidity
struct WithdrawLiquidityBatchCallbackData {
  address provider;
}
```

### receiptIds

```solidity
mapping(address => mapping(address => struct EnumerableSet.UintSet)) receiptIds
```

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

### constructor

```solidity
constructor(address _marketFactory) public
```

_Initializes the ChromaticRouter contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketFactory | address | The address of the ChromaticMarketFactory contract. |

### addLiquidityCallback

```solidity
function addLiquidityCallback(address settlementToken, address vault, bytes data) external
```

Handles the callback after adding liquidity to the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token used for adding liquidity. |
| vault | address | The address of the vault where the liquidity is added. |
| data | bytes | Additional data associated with the liquidity addition. |

### addLiquidityBatchCallback

```solidity
function addLiquidityBatchCallback(address settlementToken, address vault, bytes data) external
```

Handles the callback after adding liquidity to the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token used for adding liquidity. |
| vault | address | The address of the vault where the liquidity is added. |
| data | bytes | Additional data associated with the liquidity addition. |

### claimLiquidityCallback

```solidity
function claimLiquidityCallback(uint256 receiptId, bytes data) external
```

Handles the callback after claiming liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity claim receipt. |
| data | bytes | Additional data associated with the liquidity claim. |

### claimLiquidityBatchCallback

```solidity
function claimLiquidityBatchCallback(uint256[] _receiptIds, bytes data) external
```

Handles the callback after claiming liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _receiptIds | uint256[] |  |
| data | bytes | Additional data associated with the liquidity claim. |

### removeLiquidityCallback

```solidity
function removeLiquidityCallback(address clbToken, uint256 clbTokenId, bytes data) external
```

Handles the callback after removing liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbToken | address | The address of the Chromatic liquidity token. |
| clbTokenId | uint256 | The ID of the Chromatic liquidity token to be removed. |
| data | bytes | Additional data associated with the liquidity removal. |

### removeLiquidityBatchCallback

```solidity
function removeLiquidityBatchCallback(address clbToken, uint256[] clbTokenIds, bytes data) external
```

Handles the callback after removing liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbToken | address | The address of the Chromatic liquidity token. |
| clbTokenIds | uint256[] | The array of the Chromatic liquidity token IDs to be removed. |
| data | bytes | Additional data associated with the liquidity removal. |

### withdrawLiquidityCallback

```solidity
function withdrawLiquidityCallback(uint256 receiptId, bytes data) external
```

Handles the callback after withdrawing liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity withdrawal receipt. |
| data | bytes | Additional data associated with the liquidity withdrawal. |

### withdrawLiquidityBatchCallback

```solidity
function withdrawLiquidityBatchCallback(uint256[] _receiptIds, bytes data) external
```

Handles the callback after withdrawing liquidity from the Chromatic protocol.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _receiptIds | uint256[] |  |
| data | bytes | Additional data associated with the liquidity withdrawal. |

### openPosition

```solidity
function openPosition(address market, int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct Position)
```

_Opens a new position in a ChromaticMarket contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| qty | int224 | The quantity of the position. |
| leverage | uint32 | The leverage of the position. |
| takerMargin | uint256 | The margin amount for the taker. |
| makerMargin | uint256 | The margin amount for the maker. |
| maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Position | position The new position. |

### closePosition

```solidity
function closePosition(address market, uint256 positionId) external
```

Closes a position in a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to claim. |

### addLiquidity

```solidity
function addLiquidity(address market, int16 feeRate, uint256 amount, address recipient) public returns (struct LpReceipt receipt)
```

Adds liquidity to a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| amount | uint256 | The amount to add as liquidity. |
| recipient | address | The recipient address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | receipt The LP receipt. |

### claimLiquidity

```solidity
function claimLiquidity(address market, uint256 receiptId) public
```

Claims liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### removeLiquidity

```solidity
function removeLiquidity(address market, int16 feeRate, uint256 clbTokenAmount, address recipient) public returns (struct LpReceipt receipt)
```

Removes liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens to remove as liquidity. |
| recipient | address | The recipient address. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | receipt The LP receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(address market, uint256 receiptId) public
```

Withdraws liquidity from a ChromaticMarket contract.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### _getAccount

```solidity
function _getAccount(address owner) internal view returns (contract ChromaticAccount)
```

_Retrieves the account of the specified owner._

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The owner of the account. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract ChromaticAccount | The account address. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market) external view returns (uint256[])
```

Retrieves the LP receipt IDs of the caller for the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of LP receipt IDs. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market, address owner) public view returns (uint256[])
```

Get the LP receipt IDs associated with a specific market and owner.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| owner | address | The address of the owner. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of LP receipt IDs. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address market, address recipient, int16[] feeRates, uint256[] amounts) external returns (struct LpReceipt[] lpReceipts)
```

Adds liquidity to multiple liquidity bins of ChromaticMarket contract in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| recipient | address | The address of the recipient for each liquidity bin. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| amounts | uint256[] | An array of amounts to add as liquidity for each bin. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(address market, uint256[] _receiptIds) external
```

Claims liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| _receiptIds | uint256[] |  |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address market, address recipient, int16[] feeRates, uint256[] clbTokenAmounts) external returns (struct LpReceipt[] lpReceipts)
```

Removes liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| recipient | address | The address of the recipient for each liquidity bin. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| clbTokenAmounts | uint256[] | An array of CLB token amounts to remove as liquidity for each bin. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(address market, uint256[] _receiptIds) external
```

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| _receiptIds | uint256[] |  |

### _call

```solidity
function _call(address target, bytes data) internal returns (bytes)
```

