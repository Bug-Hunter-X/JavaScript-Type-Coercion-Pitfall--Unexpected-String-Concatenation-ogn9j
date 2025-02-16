# JavaScript Type Coercion Pitfall

This repository demonstrates a common JavaScript error stemming from the language's loose typing system and the behavior of the + operator.  When adding numbers and strings, JavaScript will perform string concatenation instead of numerical addition if either operand is a string.

The `bug.js` file shows this issue in action. The solution, presented in `bugSolution.js`, involves explicit type checking or conversion to ensure intended arithmetic operations.

## How to reproduce the bug
1. Clone this repository.
2. Run `node bug.js` to observe the unexpected string concatenation. 

## Solution
The `bugSolution.js` file demonstrates a corrected version, explicitly converting inputs to numbers using `Number()` before addition.