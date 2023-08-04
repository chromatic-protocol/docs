---
id: IChromaticRouter
title: IChromaticRouter.sol
---
# [IChromaticRouter.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/interfaces/IChromaticRouter.sol)

## IChromaticRouter

_Interface for the ChromaticRouter contract._

### AccountCreated

```solidity
event AccountCreated(address account, address owner)
```

_Emitted when a new account is created._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the created account. |
  | owner | address | The address of the owner of the created account. |

### openPosition

```solidity
function openPosition(address market, int256 qty, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct OpenPositionInfo)
```

_Opens a new position in a ChromaticMarket contract._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | qty | int256 | The quantity of the position. |
  | takerMargin | uint256 | The margin amount for the taker. |
  | makerMargin | uint256 | The margin amount for the maker. |
  | maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct OpenPositionInfo | position The new position. |

### closePosition

```solidity
function closePosition(address market, uint256 positionId) external
```

Closes a position in a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position from a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | positionId | uint256 | The ID of the position to claim. |

### addLiquidity

```solidity
function addLiquidity(address market, int16 feeRate, uint256 amount, address recipient) external returns (struct LpReceipt)
```

Adds liquidity to a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | feeRate | int16 | The fee rate of the liquidity bin. |
  | amount | uint256 | The amount to add as liquidity. |
  | recipient | address | The recipient address. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | receipt The LP receipt. |

### claimLiquidity

```solidity
function claimLiquidity(address market, uint256 receiptId) external
```

Claims liquidity from a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | receiptId | uint256 | The ID of the LP receipt. |

### removeLiquidity

```solidity
function removeLiquidity(address market, int16 feeRate, uint256 clbTokenAmount, address recipient) external returns (struct LpReceipt)
```

Removes liquidity from a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | feeRate | int16 | The fee rate of the liquidity bin. |
  | clbTokenAmount | uint256 | The amount of CLB tokens to remove as liquidity. |
  | recipient | address | The recipient address. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | receipt The LP receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(address market, uint256 receiptId) external
```

Withdraws liquidity from a ChromaticMarket contract.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | receiptId | uint256 | The ID of the LP receipt. |

### createAccount

```solidity
function createAccount() external
```

Creates a new user account.

_Only one account can be created per user.
     Emits an `AccountCreated` event upon successful creation._

### getAccount

```solidity
function getAccount() external view returns (address)
```

Retrieves the account of the caller.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The account address. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market) external view returns (uint256[])
```

Retrieves the LP receipt IDs of the caller for the specified market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256[] | An array of LP receipt IDs. |

### getLpReceiptIds

```solidity
function getLpReceiptIds(address market, address owner) external view returns (uint256[])
```

Get the LP receipt IDs associated with a specific market and owner.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | owner | address | The address of the owner. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256[] | An array of LP receipt IDs. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address market, address recipient, int16[] feeRates, uint256[] amounts) external returns (struct LpReceipt[] lpReceipts)
```

Adds liquidity to multiple liquidity bins of ChromaticMarket contract in a batch.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | recipient | address | The address of the recipient for each liquidity bin. |
  | feeRates | int16[] | An array of fee rates for each liquidity bin. |
  | amounts | uint256[] | An array of amounts to add as liquidity for each bin. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(address market, uint256[] receiptIds) external
```

Claims liquidity from multiple ChromaticMarket contracts in a batch.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | receiptIds | uint256[] | An array of LP receipt IDs to claim liquidity from. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address market, address recipient, int16[] feeRates, uint256[] clbTokenAmounts) external returns (struct LpReceipt[] lpReceipts)
```

Removes liquidity from multiple ChromaticMarket contracts in a batch.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | recipient | address | The address of the recipient for each liquidity bin. |
  | feeRates | int16[] | An array of fee rates for each liquidity bin. |
  | clbTokenAmounts | uint256[] | An array of CLB token amounts to remove as liquidity for each bin. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | lpReceipts | struct LpReceipt[] | An array of LP receipts. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(address market, uint256[] receiptIds) external
```

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the ChromaticMarket contract. |
  | receiptIds | uint256[] | An array of LP receipt IDs to withdraw liquidity from. |

