---
id: ChainlinkAggregator
title: ChainlinkAggregator.sol
---
# [ChainlinkAggregator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/types/ChainlinkAggregator.sol)

## ChainlinkAggregator

## ChainlinkAggregatorLib

Library that manages interfacing with the Chainlink Feed Aggregator Proxy.

### decimals

```solidity
function decimals(ChainlinkAggregator self) internal view returns (uint8)
```

Returns the decimal amount for a specific feed

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | ChainlinkAggregator | Chainlink Feed Aggregator to operate on |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | Decimal amount |

### getLatestRound

```solidity
function getLatestRound(ChainlinkAggregator self) internal view returns (struct ChainlinkRound)
```

Returns the latest round data for a specific feed

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | ChainlinkAggregator | Chainlink Feed Aggregator to operate on |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ChainlinkRound | Latest round data |

### getRound

```solidity
function getRound(ChainlinkAggregator self, uint256 roundId) internal view returns (struct ChainlinkRound)
```

Returns a specific round's data for a specific feed

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | ChainlinkAggregator | Chainlink Feed Aggregator to operate on |
| roundId | uint256 | The specific round to fetch data for |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ChainlinkRound | Specific round's data |

### getPhaseSwitchoverData

```solidity
function getPhaseSwitchoverData(ChainlinkAggregator self, uint256 startingRoundId, uint256 lastSyncedRoundId, struct ChainlinkRound latestRound) internal view returns (uint256 roundCount, uint256 nextPhaseStartingRoundId)
```

Returns the round count and next phase starting round for the lastSyncedRound phase

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | ChainlinkAggregator | Chainlink Feed Aggregator to operate on |
| startingRoundId | uint256 | starting roundId for the aggregator proxy |
| lastSyncedRoundId | uint256 | last synced round ID for the proxy |
| latestRound | struct ChainlinkRound | latest round from the proxy |

| Name | Type | Description |
| ---- | ---- | ----------- |
| roundCount | uint256 | The number of rounds in the phase |
| nextPhaseStartingRoundId | uint256 | The starting round ID for the next phase |

