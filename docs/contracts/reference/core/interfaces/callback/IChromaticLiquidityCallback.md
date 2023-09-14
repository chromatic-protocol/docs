---
id: IChromaticLiquidityCallback
title: IChromaticLiquidityCallback.sol
---
# [IChromaticLiquidityCallback.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/callback/IChromaticLiquidityCallback.sol)

## IChromaticLiquidityCallback

_Interface for a contract that handles liquidity callbacks in the Chromatic protocol.
     Liquidity callbacks are used to handle various operations related to liquidity management.
     This interface defines the function signatures for different types of liquidity callbacks._

### addLiquidityCallback

```solidity
function addLiquidityCallback(address settlementToken, address vault, bytes data) external
```

Handles the callback after adding liquidity to the Chromatic protocol.

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | settlementToken | address | The address of the settlement token used for adding liquidity. |
  | vault | address | The address of the vault where the liquidity is added. |
  | data | bytes | Additional data associated with the liquidity addition. |

### claimLiquidityCallback

```solidity
function claimLiquidityCallback(uint256 receiptId, int16 feeRate, uint256 depositedAmount, uint256 mintedCLBTokenAmount, bytes data) external
```

Handles the callback after claiming liquidity from the Chromatic protocol.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity claim receipt. |
  | feeRate | int16 | The trading fee rate associated with the liquidity claim. |
  | depositedAmount | uint256 | The amount of liquidity deposited. |
  | mintedCLBTokenAmount | uint256 | The amount of CLB tokens minted as liquidity. |
  | data | bytes | Additional data associated with the liquidity claim. |

### claimLiquidityBatchCallback

```solidity
function claimLiquidityBatchCallback(uint256[] receiptIds, int16[] feeRates, uint256[] depositedAmounts, uint256[] mintedCLBTokenAmounts, bytes data) external
```

Handles the callback after claiming liquidity from the Chromatic protocol.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | feeRates | int16[] | The array of trading fee rates associated with each claim in the batch. |
  | depositedAmounts | uint256[] | The array of deposited liquidity amounts for each receipt in the batch. |
  | mintedCLBTokenAmounts | uint256[] | The array of CLB token amounts minted for each receipt in the batch. |
  | data | bytes | Additional data associated with the liquidity claim. |

### removeLiquidityCallback

```solidity
function removeLiquidityCallback(address clbToken, uint256 clbTokenId, bytes data) external
```

Handles the callback after removing liquidity from the Chromatic protocol.

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | clbToken | address | The address of the Chromatic liquidity token. |
  | clbTokenIds | uint256[] | The array of the Chromatic liquidity token IDs to be removed. |
  | data | bytes | Additional data associated with the liquidity removal. |

### withdrawLiquidityCallback

```solidity
function withdrawLiquidityCallback(uint256 receiptId, int16 feeRate, uint256 withdrawnAmount, uint256 burnedCLBTokenAmount, bytes data) external
```

Handles the callback after withdrawing liquidity from the Chromatic protocol.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity withdrawal receipt. |
  | feeRate | int16 | The trading fee rate associated with the liquidity withdrawal. |
  | withdrawnAmount | uint256 | The amount of liquidity that has been withdrawn. |
  | burnedCLBTokenAmount | uint256 | The amount of CLB tokens burned during the withdrawal. |
  | data | bytes | Additional data associated with the liquidity withdrawal. |

### withdrawLiquidityBatchCallback

```solidity
function withdrawLiquidityBatchCallback(uint256[] receiptIds, int16[] feeRates, uint256[] withdrawnAmounts, uint256[] burnedCLBTokenAmounts, bytes data) external
```

Handles the callback after withdrawing liquidity from the Chromatic protocol.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | feeRates | int16[] | The array of trading fee rates associated with each withdrawal in the batch. |
  | withdrawnAmounts | uint256[] | The array of withdrawn liquidity amounts for each receipt in the batch. |
  | burnedCLBTokenAmounts | uint256[] | The array of CLB token amounts burned for each receipt in the batch. |
  | data | bytes | Additional data associated with the liquidity withdrawal. |

