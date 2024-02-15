---
id: IOracleProviderPullBased
title: IOracleProviderPullBased.sol
---
# [IOracleProviderPullBased.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/interfaces/IOracleProviderPullBased.sol)

## IOracleProviderPullBased

### extraModule

```solidity
function extraModule() external pure returns (enum ExtraModule)
```

_Returns the type of automation module that the Keeper will execute, either "None" or "Pyth"._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | enum ExtraModule | Automation module type, which can be "None" or "Pyth". |

### extraParam

```solidity
function extraParam() external view returns (bytes)
```

_Retrieves the parameter needed to request data from the Keeper, e.g., the price feed ID in the case of Pyth integration._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bytes | Required parameter for Keeper requests as bytes |

### getUpdateFee

```solidity
function getUpdateFee(bytes offchainData) external view returns (uint256)
```

_Returns the fee required to update the Oracle Provider with the given off-chain data_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | offchainData | bytes | Off-chain data required for the update |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | fee amount |

### updatePrice

```solidity
function updatePrice(bytes offchainData) external payable
```

_Updates the Oracle Provider with the provided off-chain data_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | offchainData | bytes | Off-chain data used for the update |

### parseExtraData

```solidity
function parseExtraData(bytes extraData) external view returns (struct IOracleProvider.OracleVersion)
```

_Parses the provided off-chain data received from the Keeper and returns an OracleVersion structure representing the parsed data_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | extraData | bytes | Off-chain data received from the Keeper |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | Parsed OracleVersion structure |

### lastSyncedVersion

```solidity
function lastSyncedVersion() external view returns (struct IOracleProvider.OracleVersion)
```

_Retrieves the last synchronized oracle version_

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | Last synchronized oracle version |

