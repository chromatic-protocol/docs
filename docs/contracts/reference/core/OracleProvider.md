# Solidity API

## OracleProvider

_A contract that provides Oracle functionality using Chainlink feeds._

### constructor

```solidity
constructor(address aggregator) public
```

_Constructs an instance of the OracleProvider contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| aggregator | address | The address of the Chainlink aggregator contract. |

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
function atVersions(uint256[] versions) external view returns (struct IOracleProvider.OracleVersion[] oracleVersions)
```

Retrieves the Oracle Version instances at the specified versions.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| versions | uint256[] | An array of versions for which to retrieve the Oracle Versions. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleVersions | struct IOracleProvider.OracleVersion[] | oracleVersions An array of Oracle Version instances corresponding to the specified versions. |

