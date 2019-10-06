# Functional Typescript utils, like Remeda

## Usage

### compose

Performs right-to-left function composition of unary functions.

```
import * as R from 'ramada'
const add = (a: number) => (b: number) => a + b
const mul = (a: number) => (b: number) => a * b
R.compose(mul(3), add(4))(2)  // => 18
```

### prop

Returns a function that when supplied an object returns the indicated property of that object.

### propEq

Returns `true` if the specified object property is equal to the given value; `false` otherwise.

### splitEvery

Splits a collection into slices of the specified length.
