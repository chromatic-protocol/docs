---
id: MarketDeployer
title: MarketDeployer.sol
---
# [MarketDeployer.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/deployer/MarketDeployer.sol)

## MarketDeployer

```solidity
struct MarketDeployer {
  struct Parameters parameters;
}
```

_Storage struct for deploying a ChromaticMarket contract_

## Parameters

```solidity
struct Parameters {
  address oracleProvider;
  address settlementToken;
}
```

_Struct for storing deployment parameters_

## MarketDeployerLib

Library for deploying a ChromaticMarket contract

### deploy

```solidity
function deploy(struct MarketDeployer self, address oracleProvider, address settlementToken, address marketDiamondCutFacet, address marketLoupeFacet, address marketStateFacet, address marketLiquidityFacet, address marketLensFacet, address marketTradeFacet, address marketLiquidateFacet, address marketSettleFacet) external returns (address market)
```

Deploys a ChromaticMarket contract

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct MarketDeployer | The MarketDeployer storage |
  | oracleProvider | address | The address of the oracle provider |
  | settlementToken | address | The address of the settlement token |
  | marketDiamondCutFacet | address | The market diamond cut facet address. |
  | marketLoupeFacet | address | The market loupe facet address. |
  | marketStateFacet | address | The market state facet address. |
  | marketLiquidityFacet | address | The market liquidity facet address. |
  | marketLensFacet | address | The market liquidity lens facet address. |
  | marketTradeFacet | address | The market trade facet address. |
  | marketLiquidateFacet | address | The market liquidate facet address. |
  | marketSettleFacet | address | The market settle facet address. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the deployed ChromaticMarket contract |

