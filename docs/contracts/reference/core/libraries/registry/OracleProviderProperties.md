---
id: OracleProviderProperties
title: OracleProviderProperties.sol
---
# [OracleProviderProperties.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/registry/OracleProviderProperties.sol)

## OracleProviderProperties

```solidity
struct OracleProviderProperties {
  uint32 minTakeProfitBPS;
  uint32 maxTakeProfitBPS;
  uint8 leverageLevel;
}
```

_The OracleProviderProperties struct represents properties of the oracle provider._

| Name | Type | Description |
| ---- | ---- | ----------- |
| minTakeProfitBPS | uint32 | The minimum take-profit basis points. |
| maxTakeProfitBPS | uint32 | The maximum take-profit basis points. |
| leverageLevel | uint8 | The leverage level of the oracle provider. |

## OracleProviderPropertiesLib

### checkValidLeverageLevel

```solidity
function checkValidLeverageLevel(uint8 leverageLevel) internal pure returns (bool)
```

### maxAllowableLeverage

```solidity
function maxAllowableLeverage(struct OracleProviderProperties self) internal pure returns (uint256 leverage)
```

