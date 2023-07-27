---
id: AggregatorProxyInterface
title: AggregatorProxyInterface.sol
---
# [AggregatorProxyInterface.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/interfaces/AggregatorProxyInterface.sol)

## AggregatorProxyInterface

### phaseAggregators

```solidity
function phaseAggregators(uint16 _phaseId) external view returns (address)
```

### phaseId

```solidity
function phaseId() external view returns (uint16)
```

### proposedAggregator

```solidity
function proposedAggregator() external view returns (address)
```

### proposedGetRoundData

```solidity
function proposedGetRoundData(uint80 roundId) external view returns (uint80 id, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### proposedLatestRoundData

```solidity
function proposedLatestRoundData() external view returns (uint80 id, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### aggregator

```solidity
function aggregator() external view returns (address)
```

