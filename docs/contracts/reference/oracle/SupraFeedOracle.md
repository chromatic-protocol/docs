---
id: SupraFeedOracle
title: SupraFeedOracle.sol
---
# [SupraFeedOracle.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/SupraFeedOracle.sol)

## SupraFeedOracle

### PriceFeedNotExist

```solidity
error PriceFeedNotExist()
```

### feed

```solidity
SupraSValueFeed feed
```

_Supra feed address (https://supraoracles.com/docs/price-feeds/networks)_

### pairIndex

```solidity
uint64 pairIndex
```

_The index of supra trading pair (https://supraoracles.com/docs/price-feeds/trading-pairs)_

### constructor

```solidity
constructor(SupraSValueFeed feed_, uint64 pairIndex_, string description_) public
```

Initializes the contract state

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | feed_ | SupraSValueFeed | Supra address (https://supraoracles.com/docs/price-feeds/networks) |
  | pairIndex_ | uint64 | The index of supra trading pair (https://supraoracles.com/docs/price-feeds/trading-pairs) |
  | description_ | string | The description of the Oracle Provider('ETH/USD', 'BTC/USD'...) |

### sync

```solidity
function sync() public returns (struct IOracleProvider.OracleVersion)
```

Checks for a new price and updates the internal phase annotation state accordingly

_`sync` is expected to be called soon after a phase update occurs in the underlying proxy.
     Phase updates should be detected using off-chain mechanism and should trigger a `sync` call
     This is feasible in the short term due to how infrequent phase updates are, but phase update
     and roundCount detection should eventually be implemented at the contract level.
     Reverts if there is more than 1 phase to update in a single sync because we currently cannot
     determine the startingRoundId for the intermediary phase._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | The current oracle version after sync |

### currentVersion

```solidity
function currentVersion() public view returns (struct IOracleProvider.OracleVersion oracleVersion)
```

Returns the current oracle version

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleVersion | struct IOracleProvider.OracleVersion | oracleVersion Current oracle version |

### atVersion

```solidity
function atVersion(uint256 version) public view returns (struct IOracleProvider.OracleVersion oracleVersion)
```

Returns the current oracle version

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | version | uint256 | The version of which to lookup |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleVersion | struct IOracleProvider.OracleVersion | oracleVersion Oracle version at version `version` |

### description

```solidity
function description() external view returns (string)
```

Retrieves the description of the Oracle Provider.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | A string representing the description of the Oracle Provider. |

### oracleProviderName

```solidity
function oracleProviderName() external pure returns (string)
```

Retrieves the name of the Oracle Provider.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | A string representing the name of the Oracle Provider. |

