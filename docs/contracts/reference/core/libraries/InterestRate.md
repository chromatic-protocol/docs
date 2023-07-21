---
id: InterestRate
title: InterestRate.sol
---
# [InterestRate.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/InterestRate.sol)

## InterestRate

Provides functions for managing interest rates.

_The library allows for the initialization, appending, and removal of interest rate records,
     as well as calculating interest based on these records._

### Record

```solidity
struct Record {
  uint256 annualRateBPS;
  uint256 beginTimestamp;
}
```

_Record type_

| Name | Type | Description |
| ---- | ---- | ----------- |
| annualRateBPS | uint256 | Annual interest rate in BPS |
| beginTimestamp | uint256 | Timestamp when the interest rate becomes effective |

### initialized

```solidity
modifier initialized(struct InterestRate.Record[] self)
```

_Ensure that the interest rate records have been initialized before certain functions can be called.
     It checks whether the length of the Record array is greater than 0.
     Throws an error with the code `Errors.INTEREST_RATE_NOT_INITIALIZED` if the array is empty (it indicates that the interest rate has not been initialized)._

### initialize

```solidity
function initialize(struct InterestRate.Record[] self, uint256 initialInterestRate) internal
```

Initialize the interest rate records.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct InterestRate.Record[] | The stored record array |
| initialInterestRate | uint256 | The initial interest rate |

### appendRecord

```solidity
function appendRecord(struct InterestRate.Record[] self, uint256 annualRateBPS, uint256 beginTimestamp) internal
```

Add a new interest rate record to the array.

_Annual rate is not greater than the maximum rate and that the begin timestamp is in the future,
     and the new record's begin timestamp is greater than the previous record's timestamp.
     Throws an error with the code `Errors.INTEREST_RATE_NOT_INITIALIZED` if the array is empty.
     Throws an error with the code `Errors.INTEREST_RATE_OVERFLOW` if the rate exceed the maximum allowed rate (100%).
     Throws an error with the code `Errors.INTEREST_RATE_PAST_TIMESTAMP` if the timestamp is in the past, ensuring that the interest rate period has not already started.
     Throws an error with the code `Errors.INTEREST_RATE_NOT_APPENDABLE` if the timestamp is greater than the last recorded timestamp, ensuring that the new record is appended in chronological order._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct InterestRate.Record[] | The stored record array |
| annualRateBPS | uint256 | The annual interest rate in BPS |
| beginTimestamp | uint256 | Begin timestamp of this record |

### removeLastRecord

```solidity
function removeLastRecord(struct InterestRate.Record[] self) internal returns (bool removed, struct InterestRate.Record record)
```

Remove the last interest rate record from the array.

_The current time must be less than the begin timestamp of the last record.
     If the array has only one record, it returns false along with an empty record.
     Otherwise, it removes the last record from the array and returns true along with the removed record.
     Throws an error with the code `Errors.INTEREST_RATE_NOT_INITIALIZED` if the array is empty.
     Throws an error with the code `Errors.INTEREST_RATE_ALREADY_APPLIED` if the `beginTimestamp` of the last record is not in the future._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct InterestRate.Record[] | The stored record array |

| Name | Type | Description |
| ---- | ---- | ----------- |
| removed | bool | Whether the last record is removed |
| record | struct InterestRate.Record | The removed record |

### findRecordAt

```solidity
function findRecordAt(struct InterestRate.Record[] self, uint256 timestamp) internal view returns (struct InterestRate.Record interestRate, uint256 index)
```

Find the interest rate record that applies to a given timestamp.

_It iterates through the array from the end to the beginning
     and returns the first record with a begin timestamp less than or equal to the provided timestamp.
     Throws an error with the code `Errors.INTEREST_RATE_NOT_INITIALIZED` if the array is empty._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct InterestRate.Record[] | The stored record array |
| timestamp | uint256 | Given timestamp |

| Name | Type | Description |
| ---- | ---- | ----------- |
| interestRate | struct InterestRate.Record | The record which is found |
| index | uint256 | The index of record |

### calculateInterest

```solidity
function calculateInterest(struct InterestRate.Record[] self, uint256 amount, uint256 from, uint256 to) internal view returns (uint256)
```

Calculate the interest

_Throws an error with the code `Errors.INTEREST_RATE_NOT_INITIALIZED` if the array is empty._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct InterestRate.Record[] | The stored record array |
| amount | uint256 | Token amount |
| from | uint256 | Begin timestamp (inclusive) |
| to | uint256 | End timestamp (exclusive) |

