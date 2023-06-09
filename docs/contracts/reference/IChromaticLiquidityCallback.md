# Solidity API

## IChromaticLiquidityCallback

_Interface for a contract that handles liquidity callbacks in the Chromatic protocol.
     Liquidity callbacks are used to handle various operations related to liquidity management.
     This interface defines the function signatures for different types of liquidity callbacks._

### addLiquidityCallback

```solidity
function addLiquidityCallback(address settlementToken, address vault, bytes data) external
```

Handles the callback after adding liquidity to the Chromatic protocol.

#### Parameters

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity claim receipt. |
| data | bytes | Additional data associated with the liquidity claim. |

### removeLiquidityCallback

```solidity
function removeLiquidityCallback(address clbToken, uint256 clbTokenId, bytes data) external
```

Handles the callback after removing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbToken | address | The address of the Chromatic liquidity token. |
| clbTokenId | uint256 | The ID of the Chromatic liquidity token to be removed. |
| data | bytes | Additional data associated with the liquidity removal. |

### withdrawLiquidityCallback

```solidity
function withdrawLiquidityCallback(uint256 receiptId, bytes data) external
```

Handles the callback after withdrawing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity withdrawal receipt. |
| data | bytes | Additional data associated with the liquidity withdrawal. |

