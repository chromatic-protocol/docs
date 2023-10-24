---
id: IMarketSettlement
title: IMarketSettlement.sol
---
# [IMarketSettlement.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IMarketSettlement.sol)

## IMarketSettlement

_Interface for the Market settlement task contract._

### createSettlementTask

```solidity
function createSettlementTask(address market) external
```

Creates a settlement task for a given market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the chromatic market contract to be settled. |

### cancelSettlementTask

```solidity
function cancelSettlementTask(address market) external
```

Cancels a settlement task for a given market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the chromatic market contract for which to cancel the settlement task. |

### resolveSettlement

```solidity
function resolveSettlement(address market) external view returns (bool canExec, bytes execPayload)
```

Resolves the settlement of a market.

_This function is called by the automation system._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | Whether the settlement can be executed. |
  | execPayload | bytes | The encoded function call to execute the settlement. |

### settle

```solidity
function settle(address market) external
```

Settles a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |

