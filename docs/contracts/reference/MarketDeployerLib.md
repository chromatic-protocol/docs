# Solidity API

## MarketDeployerLib

Library for deploying a ChromaticMarket contract

### deploy

```solidity
function deploy(struct MarketDeployer self, address oracleProvider, address settlementToken) external returns (address market)
```

Deploys a ChromaticMarket contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct MarketDeployer | The MarketDeployer storage |
| oracleProvider | address | The address of the oracle provider |
| settlementToken | address | The address of the settlement token |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the deployed ChromaticMarket contract |

