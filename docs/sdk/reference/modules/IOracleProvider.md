[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / IOracleProvider

# Namespace: IOracleProvider

## Table of contents

### Type Aliases

- [OracleVersionStruct](IOracleProvider.md#oracleversionstruct)
- [OracleVersionStructOutput](IOracleProvider.md#oracleversionstructoutput)

## Type Aliases

### OracleVersionStruct

Ƭ **OracleVersionStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `price` | `PromiseOrValue`<`BigNumberish`\> |
| `timestamp` | `PromiseOrValue`<`BigNumberish`\> |
| `version` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:27](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L27)

___

### OracleVersionStructOutput

Ƭ **OracleVersionStructOutput**: [`BigNumber`, `BigNumber`, `BigNumber`] & { `price`: `BigNumber` ; `timestamp`: `BigNumber` ; `version`: `BigNumber`  }

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:33](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L33)
