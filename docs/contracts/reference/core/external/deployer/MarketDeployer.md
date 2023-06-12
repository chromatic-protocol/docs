---
id: MarketDeployer
title: MarketDeployer.sol
---
# [MarketDeployer.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/external/deployer/MarketDeployer.sol)

## MarketDeployer

```solidity
struct MarketDeployer {
  struct Parameters parameters;
}
```

## Parameters

```solidity
struct Parameters {
  address oracleProvider;
  address settlementToken;
}
```

## MarketDeployerLib

Library for deploying a ChromaticMarket contract

### deploy

```solidity
function deploy(struct MarketDeployer self, address oracleProvider, address settlementToken) external returns (address market)
```

Deploys a ChromaticMarket contract

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct MarketDeployer | The MarketDeployer storage |
| oracleProvider | address | The address of the oracle provider |
| settlementToken | address | The address of the settlement token |

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the deployed ChromaticMarket contract |

