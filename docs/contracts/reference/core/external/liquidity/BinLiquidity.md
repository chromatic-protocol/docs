# Solidity API

## BinLiquidity

```solidity
struct BinLiquidity {
  uint256 total;
  struct _PendingLiquidity _pending;
  mapping(uint256 => struct _ClaimMinting) _claimMintings;
  mapping(uint256 => struct _ClaimBurning) _claimBurnings;
  struct DoubleEndedQueue.Bytes32Deque _burningVersions;
}
```

## _PendingLiquidity

```solidity
struct _PendingLiquidity {
  uint256 oracleVersion;
  uint256 tokenAmount;
  uint256 clbTokenAmount;
}
```

## _ClaimMinting

```solidity
struct _ClaimMinting {
  uint256 tokenAmount;
  uint256 mintingAmount;
}
```

## _ClaimBurning

```solidity
struct _ClaimBurning {
  uint256 clbTokenAmount;
  uint256 burningAmount;
  uint256 tokenAmount;
}
```

## BinLiquidityLib

A library that provides functions to manage the liquidity within an LiquidityBin.

### settlePendingLiquidity

```solidity
function settlePendingLiquidity(struct BinLiquidity self, struct LpContext ctx, uint256 binValue, uint256 freeLiquidity, uint256 clbTokenId) internal
```

Settles the pending liquidity within the BinLiquidity.

_This function settles pending liquidity in the BinLiquidity storage by performing the following steps:
     1. Settles pending liquidity
         - If the pending oracle version is not set or is greater than or equal to the current oracle version,
           no action is taken.
         - Otherwise, the pending liquidity and burning CLB tokens are settled by following steps:
             a. If there is a pending deposit,
                it calculates the minting amount of CLB tokens
                based on the pending deposit, bin value, and CLB token total supply.
                It updates the total liquidity and adds the pending deposit to the claim mintings.
             b. If there is a pending CLB token burning,
                it adds the oracle version to the burning versions list
                and initializes the claim burning details.
     2. Settles bunding CLB tokens
         a. It trims all completed burning versions from the burning versions list.
         b. For each burning version in the list,
            it calculates the pending CLB token amount and the pending withdrawal amount
            based on the bin value and CLB token total supply.
            - If there is sufficient free liquidity, it calculates the burning amount of CLB tokens.
            - If there is insufficient free liquidity, it calculates the burning amount
              based on the available free liquidity and updates the pending withdrawal accordingly.
         c. It updates the burning amount and pending withdrawal,
            and reduces the free liquidity accordingly.
         d. Finally, it updates the total liquidity by subtracting the pending withdrawal.
     And the CLB tokens are minted or burned accordingly.
     The pending deposit and withdrawal amounts are passed to the vault for further processing._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinLiquidity | The BinLiquidity storage. |
| ctx | struct LpContext | The LpContext memory. |
| binValue | uint256 | The current value of the bin. |
| freeLiquidity | uint256 | The amount of free liquidity available in the bin. |
| clbTokenId | uint256 | The ID of the CLB token. |

### onAddLiquidity

```solidity
function onAddLiquidity(struct BinLiquidity self, uint256 amount, uint256 oracleVersion) internal
```

Adds liquidity to the BinLiquidity.

_Sets the pending liquidity with the specified amount and oracle version.
     If the amount is less than the minimum amount, it reverts with an error.
     If there is already pending liquidity with a different oracle version, it reverts with an error._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinLiquidity | The BinLiquidity storage. |
| amount | uint256 | The amount of tokens to add for liquidity. |
| oracleVersion | uint256 | The oracle version associated with the liquidity. |

### onClaimLiquidity

```solidity
function onClaimLiquidity(struct BinLiquidity self, uint256 amount, uint256 oracleVersion) internal returns (uint256 clbTokenAmount)
```

Claims liquidity from the BinLiquidity by minting CLB tokens.

_Retrieves the minting details for the specified oracle version
     and calculates the CLB token amount to be claimed.
     Updates the claim minting details and returns the CLB token amount to be claimed.
     If there are no more tokens remaining for the claim, it is removed from the mapping._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinLiquidity | The BinLiquidity storage. |
| amount | uint256 | The amount of tokens to claim. |
| oracleVersion | uint256 | The oracle version associated with the claim. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbTokenAmount | uint256 | The amount of CLB tokens to be claimed. |

### onRemoveLiquidity

```solidity
function onRemoveLiquidity(struct BinLiquidity self, uint256 clbTokenAmount, uint256 oracleVersion) internal
```

Removes liquidity from the BinLiquidity by setting pending CLB token amount.

_Sets the pending liquidity with the specified CLB token amount and oracle version.
     If there is already pending liquidity with a different oracle version, it reverts with an error._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinLiquidity | The BinLiquidity storage. |
| clbTokenAmount | uint256 | The amount of CLB tokens to remove liquidity. |
| oracleVersion | uint256 | The oracle version associated with the liquidity. |

### onWithdrawLiquidity

```solidity
function onWithdrawLiquidity(struct BinLiquidity self, uint256 clbTokenAmount, uint256 oracleVersion) internal returns (uint256 amount, uint256 burnedCLBTokenAmount)
```

Withdraws liquidity from the BinLiquidity by burning CLB tokens and withdrawing tokens.

_Retrieves the burning details for the specified oracle version
     and calculates the CLB token amount and token amount to burn and withdraw, respectively.
     Updates the claim burning details and returns the token amount to withdraw and the burned CLB token amount.
     If there are no more CLB tokens remaining for the claim, it is removed from the mapping._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinLiquidity | The BinLiquidity storage. |
| clbTokenAmount | uint256 | The amount of CLB tokens to withdraw. |
| oracleVersion | uint256 | The oracle version associated with the claim. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of tokens to be withdrawn for the claim. |
| burnedCLBTokenAmount | uint256 | The amount of CLB tokens to be burned for the claim. |

### calculateCLBTokenMinting

```solidity
function calculateCLBTokenMinting(uint256 amount, uint256 binValue, uint256 clbTokenTotalSupply) internal pure returns (uint256)
```

Calculates the amount of CLB tokens to be minted
        for a given token amount, bin value, and CLB token total supply.

_If the CLB token total supply is zero, returns the token amount as is.
     Otherwise, calculates the minting amount
     based on the token amount, bin value, and CLB token total supply._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of tokens to be minted. |
| binValue | uint256 | The current bin value. |
| clbTokenTotalSupply | uint256 | The total supply of CLB tokens. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of CLB tokens to be minted. |

### calculateCLBTokenValue

```solidity
function calculateCLBTokenValue(uint256 clbTokenAmount, uint256 binValue, uint256 clbTokenTotalSupply) internal pure returns (uint256)
```

Calculates the value of CLB tokens
        for a given CLB token amount, bin value, and CLB token total supply.

_If the CLB token total supply is zero, returns zero.
     Otherwise, calculates the value based on the CLB token amount, bin value, and CLB token total supply._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbTokenAmount | uint256 | The amount of CLB tokens. |
| binValue | uint256 | The current bin value. |
| clbTokenTotalSupply | uint256 | The total supply of CLB tokens. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The value of the CLB tokens. |

