# Solidity API

## IOracleProvider

_Interface for an Oracle Provider contract that extends the Perennial Oracle Provider interface._

### description

```solidity
function description() external view returns (string)
```

Retrieves the description of the Oracle Provider.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | A string representing the description of the Oracle Provider. |

### atVersions

```solidity
function atVersions(uint256[] versions) external view returns (struct IOracleProvider.OracleVersion[])
```

Retrieves the Oracle Version instances at the specified versions.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| versions | uint256[] | An array of versions for which to retrieve the Oracle Versions. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IOracleProvider.OracleVersion[] | oracleVersions An array of Oracle Version instances corresponding to the specified versions. |

