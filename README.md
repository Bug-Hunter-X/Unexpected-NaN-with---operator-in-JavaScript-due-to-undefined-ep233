# JavaScript: Unexpected NaN with + operator

This repository demonstrates a common, yet subtle, error in JavaScript related to the + operator and the handling of undefined and null values.

## Problem

In JavaScript, the behavior of the + operator can be surprising when one of the operands is undefined or null. Specifically:

* `undefined + number` results in `NaN` (Not a Number)
* `null + number` results in a number (null is coerced to 0)

This inconsistency can lead to unexpected behavior and debugging challenges.

## Solution

The best way to avoid this issue is to explicitly check for `undefined` and `null` and handle them appropriately before performing arithmetic operations.  Using strict equality (`===`) for checks is recommended to avoid type coercion issues.

The solution file shows how to perform these checks and provide alternative handling for undefined values.