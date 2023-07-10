---
id: DiamondStorage
title: DiamondStorage.sol
---
# [DiamondStorage.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/DiamondStorage.sol)

## DiamondStorage

```solidity
struct DiamondStorage {
  mapping(bytes4 => bytes32) facets;
  mapping(uint256 => bytes32) selectorSlots;
  uint16 selectorCount;
  mapping(bytes4 => bool) supportedInterfaces;
}
```

## InitializationFunctionReverted

```solidity
error InitializationFunctionReverted(address _initializationContractAddress, bytes _calldata)
```

## DiamondStorageLib

### DIAMOND_STORAGE_POSITION

```solidity
bytes32 DIAMOND_STORAGE_POSITION
```

### diamondStorage

```solidity
function diamondStorage() internal pure returns (struct DiamondStorage ds)
```

### DiamondCut

```solidity
event DiamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata)
```

### CLEAR_ADDRESS_MASK

```solidity
bytes32 CLEAR_ADDRESS_MASK
```

### CLEAR_SELECTOR_MASK

```solidity
bytes32 CLEAR_SELECTOR_MASK
```

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _diamondCut, address _init, bytes _calldata) internal
```

### addReplaceRemoveFacetSelectors

```solidity
function addReplaceRemoveFacetSelectors(uint256 _selectorCount, bytes32 _selectorSlot, address _newFacetAddress, enum IDiamondCut.FacetCutAction _action, bytes4[] _selectors) internal returns (uint256, bytes32)
```

### initializeDiamondCut

```solidity
function initializeDiamondCut(address _init, bytes _calldata) internal
```

### enforceHasContractCode

```solidity
function enforceHasContractCode(address _contract, string _errorMessage) internal view
```

