[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](contracts.md) / [oracle](contracts.oracle.md) / [interfaces](contracts.oracle.interfaces.md) / IOracleProvider

# Namespace: IOracleProvider

[oracle](contracts.oracle.md).[interfaces](contracts.oracle.interfaces.md).IOracleProvider

## Table of contents

### Type Aliases

- [OracleVersionStruct](contracts.oracle.interfaces.IOracleProvider.md#oracleversionstruct)
- [OracleVersionStructOutput](contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:27](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L27)

___

### OracleVersionStructOutput

Ƭ **OracleVersionStructOutput**: [`BigNumber`, `BigNumber`, `BigNumber`] & { `price`: `BigNumber` ; `timestamp`: `BigNumber` ; `version`: `BigNumber`  }

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:33](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L33)
