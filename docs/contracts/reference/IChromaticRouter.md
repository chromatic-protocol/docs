# Solidity API

## IChromaticRouter

_Interface for the ChromaticRouter contract._

### openPosition

```solidity
function openPosition(address market, int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct Position)
```

_Opens a new position in a ChromaticMarket contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| qty | int224 | The quantity of the position. |
| leverage | uint32 | The leverage of the position. |
| takerMargin | uint256 | The margin amount for the taker. |
| makerMargin | uint256 | The margin amount for the maker. |
| maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Position | position The new position. |

### closePosition

```solidity
function closePosition(address market, uint256 positionId) external
```

Closes a position in a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| positionId | uint256 | The ID of the position to claim. |

### addLiquidity

```solidity
function addLiquidity(address market, int16 feeRate, uint256 amount, address recipient) external returns (struct LpReceipt)
```

Adds liquidity to a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| amount | uint256 | The amount to add as liquidity. |
| recipient | address | The recipient address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The LP receipt. |

### claimLiquidity

```solidity
function claimLiquidity(address market, uint256 receiptId) external
```

Claims liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### removeLiquidity

```solidity
function removeLiquidity(address market, int16 feeRate, uint256 clbTokenAmount, address recipient) external returns (struct LpReceipt)
```

Removes liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRate | int16 | The fee rate of the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens to remove as liquidity. |
| recipient | address | The recipient address. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The LP receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(address market, uint256 receiptId) external
```

Withdraws liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptId | uint256 | The ID of the LP receipt. |

### getAccount

```solidity
function getAccount() external view returns (address)
```

Retrieves the account of the caller.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The account address. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market) external view returns (uint256[])
```

Retrieves the LP receipt IDs of the caller for the specified market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of LP receipt IDs. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address market, int16[] feeRates, uint256[] amounts, address[] recipients) external returns (struct LpReceipt[] lpReceipts)
```

Adds liquidity to multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
| recipients | address[] | An array of recipient addresses. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(address market, uint256[] receiptIds) external
```

Claims liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptIds | uint256[] | An array of LP receipt IDs to claim liquidity from. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address market, int16[] feeRates, uint256[] clbTokenAmounts, address[] recipients) external returns (struct LpReceipt[] lpReceipts)
```

Removes liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| feeRates | int16[] | An array of fee rates for each liquidity bin. |
| clbTokenAmounts | uint256[] | An array of CLB token amounts to remove as liquidity for each bin. |
| recipients | address[] | An array of recipient addresses. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(address market, uint256[] receiptIds) external
```

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| receiptIds | uint256[] | An array of LP receipt IDs to withdraw liquidity from. |

### calculateCLBTokenValueBatch

```solidity
function calculateCLBTokenValueBatch(address market, int16[] tradingFeeRates, uint256[] clbTokenAmounts) external view returns (uint256[] results)
```

Calculates the value of CLB tokens for multiple liquidity amounts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| tradingFeeRates | int16[] | An array of trading fee rates for each liquidity provider. |
| clbTokenAmounts | uint256[] | An array of CLB token amounts for each provider. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | uint256[] | An array of CLB token values. |

### calculateCLBTokenMintingBatch

```solidity
function calculateCLBTokenMintingBatch(address market, int16[] tradingFeeRates, uint256[] amounts) external view returns (uint256[] results)
```

Calculates the amount of CLB tokens to mint for multiple trading amounts in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| tradingFeeRates | int16[] | An array of trading fee rates for each liquidity provider. |
| amounts | uint256[] | An array of trading amounts for each provider. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| results | uint256[] | An array of CLB token minting amounts. |

### totalSupplies

```solidity
function totalSupplies(address market, int16[] tradingFeeRates) external view returns (uint256[] supplies)
```

Retrieves the total supplies of CLB tokens for multiple trading fee rates in a batch.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the ChromaticMarket contract. |
| tradingFeeRates | int16[] | An array of trading fee rates to retrieve total supplies for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| supplies | uint256[] | An array of total CLB token supplies. |

