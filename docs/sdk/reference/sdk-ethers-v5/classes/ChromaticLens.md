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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:77](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L77)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

A promise that resolves to an object with mappings between tradingFee and oracleVersion.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:188](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L188)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticLens contract.

#### Returns

`Object`

The ChromaticLens contract.

| Name | Type |
| :------ | :------ |
| `lens` | `ChromaticLens` |

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:90](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L90)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:101](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L101)

___

### lpReceipts

▸ **lpReceipts**(`marketAddress`, `owner?`): `Promise`<`LpReceiptStructOutput`[]\>

Retrieves the LP receipts for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `owner?` | `string` | The address of the LP owner. |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

A promise that resolves to the LP receipts.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:269](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L269)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `ownerAddress?` | `string` | The address of the liquidity owner. |

#### Returns

`Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:132](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L132)

___

### pendingLiquidityBatch

▸ **pendingLiquidityBatch**(`marketAddress`, `tradingFeeRates`): `Promise`<{ `0`: `BigNumber` ; `1`: `BigNumber` ; `2`: `BigNumber` ; `[unscopables]`: { `[unscopables]?`: `boolean` ; `length?`: `boolean` ; `[iterator]?`:  ; `concat?`:  ; `copyWithin?`:  ; `entries?`:  ; `every?`:  ; `fill?`:  ; `filter?`:  ; `find?`:  ; `findIndex?`:  ; `flat?`:  ; `flatMap?`:  ; `forEach?`:  ; `includes?`:  ; `indexOf?`:  ; `join?`:  ; `keys?`:  ; `lastIndexOf?`:  ; `map?`:  ; `pop?`:  ; `push?`:  ; `reduce?`:  ; `reduceRight?`:  ; `reverse?`:  ; `shift?`:  ; `slice?`:  ; `some?`:  ; `sort?`:  ; `splice?`:  ; `toLocaleString?`:  ; `toString?`:  ; `unshift?`:  ; `values?`:   } ; `burningCLBTokenAmountRequested`: `BigNumber` ; `length`: ``3`` ; `mintingTokenAmountRequested`: `BigNumber` ; `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number` = feeRate; `[iterator]`: () => `IterableIterator`<`BigNumber`\> ; `concat`: (...`items`: `ConcatArray`<`BigNumber`\>[]) => `BigNumber`[](...`items`: (`BigNumber` \| `ConcatArray`<`BigNumber`\>)[]) => `BigNumber`[] ; `copyWithin`: (`target`: `number`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `entries`: () => `IterableIterator`<[`number`, `BigNumber`]\> ; `every`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => this is S[](`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `fill`: (`value`: `BigNumber`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `filter`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => `S`[](`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `BigNumber`[] ; `find`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => `S`(`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `BigNumber` ; `findIndex`: (`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `number` ; `flat`: <A, D\>(`this`: `A`, `depth?`: `D`) => `FlatArray`<`A`, `D`\>[] ; `flatMap`: <U, This\>(`callback`: (`this`: `This`, `value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `U` \| readonly `U`[], `thisArg?`: `This`) => `U`[] ; `forEach`: (`callbackfn`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `void`, `thisArg?`: `any`) => `void` ; `includes`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `boolean` ; `indexOf`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `number` ; `join`: (`separator?`: `string`) => `string` ; `keys`: () => `IterableIterator`<`number`\> ; `lastIndexOf`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `number` ; `map`: <U\>(`callbackfn`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `U`, `thisArg?`: `any`) => `U`[] ; `pop`: () => `BigNumber` ; `push`: (...`items`: `BigNumber`[]) => `number` ; `reduce`: (`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`) => `BigNumber`(`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`, `initialValue`: `BigNumber`) => `BigNumber`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `U`, `initialValue`: `U`) => `U` ; `reduceRight`: (`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`) => `BigNumber`(`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`, `initialValue`: `BigNumber`) => `BigNumber`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `U`, `initialValue`: `U`) => `U` ; `reverse`: () => `BigNumber`[] ; `shift`: () => `BigNumber` ; `slice`: (`start?`: `number`, `end?`: `number`) => `BigNumber`[] ; `some`: (`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `sort`: (`compareFn?`: (`a`: `BigNumber`, `b`: `BigNumber`) => `number`) => `PendingLiquidityStructOutput` ; `splice`: (`start`: `number`, `deleteCount?`: `number`) => `BigNumber`[](`start`: `number`, `deleteCount`: `number`, ...`items`: `BigNumber`[]) => `BigNumber`[] ; `toLocaleString`: () => `string` ; `toString`: () => `string` ; `unshift`: (...`items`: `BigNumber`[]) => `number` ; `values`: () => `IterableIterator`<`BigNumber`\>  }[]\>

Retrieves the pending liquidities for a given market and trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `tradingFeeRates` | `number`[] | An array of tradingFeeRate. |

#### Returns

`Promise`<{ `0`: `BigNumber` ; `1`: `BigNumber` ; `2`: `BigNumber` ; `[unscopables]`: { `[unscopables]?`: `boolean` ; `length?`: `boolean` ; `[iterator]?`:  ; `concat?`:  ; `copyWithin?`:  ; `entries?`:  ; `every?`:  ; `fill?`:  ; `filter?`:  ; `find?`:  ; `findIndex?`:  ; `flat?`:  ; `flatMap?`:  ; `forEach?`:  ; `includes?`:  ; `indexOf?`:  ; `join?`:  ; `keys?`:  ; `lastIndexOf?`:  ; `map?`:  ; `pop?`:  ; `push?`:  ; `reduce?`:  ; `reduceRight?`:  ; `reverse?`:  ; `shift?`:  ; `slice?`:  ; `some?`:  ; `sort?`:  ; `splice?`:  ; `toLocaleString?`:  ; `toString?`:  ; `unshift?`:  ; `values?`:   } ; `burningCLBTokenAmountRequested`: `BigNumber` ; `length`: ``3`` ; `mintingTokenAmountRequested`: `BigNumber` ; `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number` = feeRate; `[iterator]`: () => `IterableIterator`<`BigNumber`\> ; `concat`: (...`items`: `ConcatArray`<`BigNumber`\>[]) => `BigNumber`[](...`items`: (`BigNumber` \| `ConcatArray`<`BigNumber`\>)[]) => `BigNumber`[] ; `copyWithin`: (`target`: `number`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `entries`: () => `IterableIterator`<[`number`, `BigNumber`]\> ; `every`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => this is S[](`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `fill`: (`value`: `BigNumber`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `filter`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => `S`[](`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `BigNumber`[] ; `find`: <S\>(`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => value is S, `thisArg?`: `any`) => `S`(`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `BigNumber` ; `findIndex`: (`predicate`: (`value`: `BigNumber`, `index`: `number`, `obj`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `number` ; `flat`: <A, D\>(`this`: `A`, `depth?`: `D`) => `FlatArray`<`A`, `D`\>[] ; `flatMap`: <U, This\>(`callback`: (`this`: `This`, `value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `U` \| readonly `U`[], `thisArg?`: `This`) => `U`[] ; `forEach`: (`callbackfn`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `void`, `thisArg?`: `any`) => `void` ; `includes`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `boolean` ; `indexOf`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `number` ; `join`: (`separator?`: `string`) => `string` ; `keys`: () => `IterableIterator`<`number`\> ; `lastIndexOf`: (`searchElement`: `BigNumber`, `fromIndex?`: `number`) => `number` ; `map`: <U\>(`callbackfn`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `U`, `thisArg?`: `any`) => `U`[] ; `pop`: () => `BigNumber` ; `push`: (...`items`: `BigNumber`[]) => `number` ; `reduce`: (`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`) => `BigNumber`(`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`, `initialValue`: `BigNumber`) => `BigNumber`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `U`, `initialValue`: `U`) => `U` ; `reduceRight`: (`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`) => `BigNumber`(`callbackfn`: (`previousValue`: `BigNumber`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `BigNumber`, `initialValue`: `BigNumber`) => `BigNumber`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `BigNumber`, `currentIndex`: `number`, `array`: `BigNumber`[]) => `U`, `initialValue`: `U`) => `U` ; `reverse`: () => `BigNumber`[] ; `shift`: () => `BigNumber` ; `slice`: (`start?`: `number`, `end?`: `number`) => `BigNumber`[] ; `some`: (`predicate`: (`value`: `BigNumber`, `index`: `number`, `array`: `BigNumber`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `sort`: (`compareFn?`: (`a`: `BigNumber`, `b`: `BigNumber`) => `number`) => `PendingLiquidityStructOutput` ; `splice`: (`start`: `number`, `deleteCount?`: `number`) => `BigNumber`[](`start`: `number`, `deleteCount`: `number`, ...`items`: `BigNumber`[]) => `BigNumber`[] ; `toLocaleString`: () => `string` ; `toString`: () => `string` ; `unshift`: (...`items`: `BigNumber`[]) => `number` ; `values`: () => `IterableIterator`<`BigNumber`\>  }[]\>

A promise that resolves to an array of PendingLiquidity.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:243](https://github.com/chromatic-protocol/sdk/blob/e121579/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L243)
