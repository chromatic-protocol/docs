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

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:77](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L77)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `bigint` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

A promise that resolves to an object with mappings between tradingFee and oracleVersion.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:189](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L189)

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

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:90](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L90)

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

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:101](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L101)

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

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:270](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L270)

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

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:133](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L133)

___

### pendingLiquidityBatch

▸ **pendingLiquidityBatch**(`marketAddress`, `tradingFeeRates`): `Promise`<{ `0`: `bigint` ; `1`: `bigint` ; `2`: `bigint` ; `[unscopables]`: { `[unscopables]?`: `boolean` ; `length?`: `boolean` ; `[iterator]?`:  ; `concat?`:  ; `copyWithin?`:  ; `entries?`:  ; `every?`:  ; `fill?`:  ; `filter?`:  ; `find?`:  ; `findIndex?`:  ; `flat?`:  ; `flatMap?`:  ; `forEach?`:  ; `includes?`:  ; `indexOf?`:  ; `join?`:  ; `keys?`:  ; `lastIndexOf?`:  ; `map?`:  ; `pop?`:  ; `push?`:  ; `reduce?`:  ; `reduceRight?`:  ; `reverse?`:  ; `shift?`:  ; `slice?`:  ; `some?`:  ; `sort?`:  ; `splice?`:  ; `toLocaleString?`:  ; `toString?`:  ; `unshift?`:  ; `values?`:   } ; `burningCLBTokenAmountRequested`: `bigint` ; `length`: ``3`` ; `mintingTokenAmountRequested`: `bigint` ; `oracleVersion`: `bigint` ; `tradingFeeRate`: `number` = feeRate; `[iterator]`: () => `IterableIterator`<`bigint`\> ; `concat`: (...`items`: `ConcatArray`<`bigint`\>[]) => `bigint`[](...`items`: (`bigint` \| `ConcatArray`<`bigint`\>)[]) => `bigint`[] ; `copyWithin`: (`target`: `number`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `entries`: () => `IterableIterator`<[`number`, `bigint`]\> ; `every`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => value is S, `thisArg?`: `any`) => this is S[](`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `fill`: (`value`: `bigint`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `filter`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => value is S, `thisArg?`: `any`) => `S`[](`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `bigint`[] ; `find`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => value is S, `thisArg?`: `any`) => `S`(`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `bigint` ; `findIndex`: (`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `number` ; `flat`: <A, D\>(`this`: `A`, `depth?`: `D`) => `FlatArray`<`A`, `D`\>[] ; `flatMap`: <U, This\>(`callback`: (`this`: `This`, `value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `U` \| readonly `U`[], `thisArg?`: `This`) => `U`[] ; `forEach`: (`callbackfn`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `void`, `thisArg?`: `any`) => `void` ; `includes`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `boolean` ; `indexOf`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `number` ; `join`: (`separator?`: `string`) => `string` ; `keys`: () => `IterableIterator`<`number`\> ; `lastIndexOf`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `number` ; `map`: <U\>(`callbackfn`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `U`, `thisArg?`: `any`) => `U`[] ; `pop`: () => `bigint` ; `push`: (...`items`: `bigint`[]) => `number` ; `reduce`: (`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`) => `bigint`(`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`, `initialValue`: `bigint`) => `bigint`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `U`, `initialValue`: `U`) => `U` ; `reduceRight`: (`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`) => `bigint`(`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`, `initialValue`: `bigint`) => `bigint`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `U`, `initialValue`: `U`) => `U` ; `reverse`: () => `bigint`[] ; `shift`: () => `bigint` ; `slice`: (`start?`: `number`, `end?`: `number`) => `bigint`[] ; `some`: (`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `sort`: (`compareFn?`: (`a`: `bigint`, `b`: `bigint`) => `number`) => `PendingLiquidityStructOutput` ; `splice`: (`start`: `number`, `deleteCount?`: `number`) => `bigint`[](`start`: `number`, `deleteCount`: `number`, ...`items`: `bigint`[]) => `bigint`[] ; `toLocaleString`: () => `string` ; `toString`: () => `string` ; `unshift`: (...`items`: `bigint`[]) => `number` ; `values`: () => `IterableIterator`<`bigint`\>  }[]\>

Retrieves the pending liquidities for a given market and trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `tradingFeeRates` | `number`[] | An array of tradingFeeRate. |

#### Returns

`Promise`<{ `0`: `bigint` ; `1`: `bigint` ; `2`: `bigint` ; `[unscopables]`: { `[unscopables]?`: `boolean` ; `length?`: `boolean` ; `[iterator]?`:  ; `concat?`:  ; `copyWithin?`:  ; `entries?`:  ; `every?`:  ; `fill?`:  ; `filter?`:  ; `find?`:  ; `findIndex?`:  ; `flat?`:  ; `flatMap?`:  ; `forEach?`:  ; `includes?`:  ; `indexOf?`:  ; `join?`:  ; `keys?`:  ; `lastIndexOf?`:  ; `map?`:  ; `pop?`:  ; `push?`:  ; `reduce?`:  ; `reduceRight?`:  ; `reverse?`:  ; `shift?`:  ; `slice?`:  ; `some?`:  ; `sort?`:  ; `splice?`:  ; `toLocaleString?`:  ; `toString?`:  ; `unshift?`:  ; `values?`:   } ; `burningCLBTokenAmountRequested`: `bigint` ; `length`: ``3`` ; `mintingTokenAmountRequested`: `bigint` ; `oracleVersion`: `bigint` ; `tradingFeeRate`: `number` = feeRate; `[iterator]`: () => `IterableIterator`<`bigint`\> ; `concat`: (...`items`: `ConcatArray`<`bigint`\>[]) => `bigint`[](...`items`: (`bigint` \| `ConcatArray`<`bigint`\>)[]) => `bigint`[] ; `copyWithin`: (`target`: `number`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `entries`: () => `IterableIterator`<[`number`, `bigint`]\> ; `every`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => value is S, `thisArg?`: `any`) => this is S[](`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `fill`: (`value`: `bigint`, `start?`: `number`, `end?`: `number`) => `PendingLiquidityStructOutput` ; `filter`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => value is S, `thisArg?`: `any`) => `S`[](`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `bigint`[] ; `find`: <S\>(`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => value is S, `thisArg?`: `any`) => `S`(`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `bigint` ; `findIndex`: (`predicate`: (`value`: `bigint`, `index`: `number`, `obj`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `number` ; `flat`: <A, D\>(`this`: `A`, `depth?`: `D`) => `FlatArray`<`A`, `D`\>[] ; `flatMap`: <U, This\>(`callback`: (`this`: `This`, `value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `U` \| readonly `U`[], `thisArg?`: `This`) => `U`[] ; `forEach`: (`callbackfn`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `void`, `thisArg?`: `any`) => `void` ; `includes`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `boolean` ; `indexOf`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `number` ; `join`: (`separator?`: `string`) => `string` ; `keys`: () => `IterableIterator`<`number`\> ; `lastIndexOf`: (`searchElement`: `bigint`, `fromIndex?`: `number`) => `number` ; `map`: <U\>(`callbackfn`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `U`, `thisArg?`: `any`) => `U`[] ; `pop`: () => `bigint` ; `push`: (...`items`: `bigint`[]) => `number` ; `reduce`: (`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`) => `bigint`(`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`, `initialValue`: `bigint`) => `bigint`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `U`, `initialValue`: `U`) => `U` ; `reduceRight`: (`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`) => `bigint`(`callbackfn`: (`previousValue`: `bigint`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `bigint`, `initialValue`: `bigint`) => `bigint`<U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `bigint`, `currentIndex`: `number`, `array`: `bigint`[]) => `U`, `initialValue`: `U`) => `U` ; `reverse`: () => `bigint`[] ; `shift`: () => `bigint` ; `slice`: (`start?`: `number`, `end?`: `number`) => `bigint`[] ; `some`: (`predicate`: (`value`: `bigint`, `index`: `number`, `array`: `bigint`[]) => `unknown`, `thisArg?`: `any`) => `boolean` ; `sort`: (`compareFn?`: (`a`: `bigint`, `b`: `bigint`) => `number`) => `PendingLiquidityStructOutput` ; `splice`: (`start`: `number`, `deleteCount?`: `number`) => `bigint`[](`start`: `number`, `deleteCount`: `number`, ...`items`: `bigint`[]) => `bigint`[] ; `toLocaleString`: () => `string` ; `toString`: () => `string` ; `unshift`: (...`items`: `bigint`[]) => `number` ; `values`: () => `IterableIterator`<`bigint`\>  }[]\>

A promise that resolves to an array of PendingLiquidity.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:244](https://github.com/chromatic-protocol/sdk/blob/b0c08b9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L244)
