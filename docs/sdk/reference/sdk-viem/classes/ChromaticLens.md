---
id: "ChromaticLens"
title: "Class: ChromaticLens"
sidebar_label: "ChromaticLens"
sidebar_position: 0
custom_edit_url: null
---

A class representing Chromatic Lens, which provides access to liquidity-related functions.

## Constructors

### constructor

• **new ChromaticLens**(`_client`)

Creates a new instance of ChromaticLens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:61](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L61)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `burningCLBTokenAmount`: `bigint` = res.burningCLBTokenAmount; `burningCLBTokenAmountRequested`: `bigint` = res.burningCLBTokenAmountRequested; `burningTokenAmount`: `bigint` = res.burningTokenAmount; `mintingCLBTokenAmount`: `bigint` = res.mintingCLBTokenAmount; `mintingTokenAmountRequested`: `bigint` = res.mintingTokenAmountRequested; `tradingFeeRate`: `number`  }[]\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `bigint` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `burningCLBTokenAmount`: `bigint` = res.burningCLBTokenAmount; `burningCLBTokenAmountRequested`: `bigint` = res.burningCLBTokenAmountRequested; `burningTokenAmount`: `bigint` = res.burningTokenAmount; `mintingCLBTokenAmount`: `bigint` = res.mintingCLBTokenAmount; `mintingTokenAmountRequested`: `bigint` = res.mintingTokenAmountRequested; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to an array of ClaimableLiquidityResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:173](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L173)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticLens contract.

#### Returns

`Object`

The ChromaticLens contract.

| Name | Type |
| :------ | :------ |
| `lens` | [`Contract`](../namespaces/utils.md#contract)<readonly [{ `inputs`: readonly [{ `internalType`: ``"contract IChromaticRouter"`` = 'contract IChromaticRouter'; `name`: ``"_router"`` = '\_router'; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"constructor"`` = 'constructor' }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = 'contract IChromaticMarket'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"_oracleVersion"`` = '\_oracleVersion'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimableLiquidity"`` = 'claimableLiquidity'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"mintingTokenAmountRequested"`` = 'mintingTokenAmountRequested'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"mintingCLBTokenAmount"`` = 'mintingCLBTokenAmount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"burningCLBTokenAmountRequested"`` = 'burningCLBTokenAmountRequested'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"burningCLBTokenAmount"`` = 'burningCLBTokenAmount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"burningTokenAmount"`` = 'burningTokenAmount'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct IMarketLiquidity.ClaimableLiquidity"`` = 'struct IMarketLiquidity.ClaimableLiquidity'; `name`: ``""`` = ''; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = 'contract IChromaticMarket'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"clbBalanceOf"`` = 'clbBalanceOf'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"tokenId"`` = 'tokenId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"balance"`` = 'balance'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"totalSupply"`` = 'totalSupply'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"binValue"`` = 'binValue'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct ChromaticLens.CLBBalance[]"`` = 'struct ChromaticLens.CLBBalance[]'; `name`: ``""`` = ''; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = 'contract IChromaticMarket'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"liquidityBinStatuses"`` = 'liquidityBinStatuses'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"liquidity"`` = 'liquidity'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"freeLiquidity"`` = 'freeLiquidity'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"binValue"`` = 'binValue'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct IMarketLiquidity.LiquidityBinStatus[]"`` = 'struct IMarketLiquidity.LiquidityBinStatus[]'; `name`: ``""`` = ''; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = 'contract IChromaticMarket'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"lpReceipts"`` = 'lpReceipts'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt[]"`` = 'struct LpReceipt[]'; `name`: ``"result"`` = 'result'; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"bytes[]"`` = 'bytes[]'; `name`: ``"data"`` = 'data'; `type`: ``"bytes[]"`` = 'bytes[]' }] ; `name`: ``"multicall"`` = 'multicall'; `outputs`: readonly [{ `internalType`: ``"bytes[]"`` = 'bytes[]'; `name`: ``"results"`` = 'results'; `type`: ``"bytes[]"`` = 'bytes[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = 'contract IChromaticMarket'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"version"`` = 'version'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"oracleVersion"`` = 'oracleVersion'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"version"`` = 'version'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"timestamp"`` = 'timestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"Fixed18"`` = 'Fixed18'; `name`: ``"price"`` = 'price'; `type`: ``"int256"`` = 'int256' }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = 'struct IOracleProvider.OracleVersion'; `name`: ``""`` = ''; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }]\> |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:79](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L79)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `number` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `number` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:90](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L90)

___

### lpReceipts

▸ **lpReceipts**(`marketAddress`, `owner?`): `Promise`<readonly { `action`: `number` ; `amount`: `bigint` ; `id`: `bigint` ; `oracleVersion`: `bigint` ; `recipient`: \`0x${string}\` ; `tradingFeeRate`: `number`  }[]\>

Retrieves the LP receipts for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `owner?` | \`0x${string}\` | The address of the LP owner. |

#### Returns

`Promise`<readonly { `action`: `number` ; `amount`: `bigint` ; `id`: `bigint` ; `oracleVersion`: `bigint` ; `recipient`: \`0x${string}\` ; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to the LP receipts.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:213](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L213)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<{ `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `number` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = ownedBin.binValue; `removableRate`: `number` ; `tradingFeeRate`: `number`  }[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `ownerAddress?` | \`0x${string}\` | The address of the liquidity owner. |

#### Returns

`Promise`<{ `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `number` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = ownedBin.binValue; `removableRate`: `number` ; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:123](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/entities/ChromaticLens.ts#L123)
