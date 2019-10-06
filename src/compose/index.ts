export default function compose<A, B, C>(
  fn1: (a: B) => A,
  fn2: (a: C) => B
): (a: C) => A

export default function compose<A, B, C, D>(
  fn1: (a: B) => A,
  fn2: (a: C) => B,
  fn3: (a: D) => C
): (a: D) => A

export default function compose<A, B, C, D, E>(
  fn1: (a: B) => A,
  fn2: (a: C) => B,
  fn3: (a: D) => C,
  fn4: (a: E) => D
): (a: E) => A

export default function compose<A, B, C, D, E, F>(
  fn1: (a: B) => A,
  fn2: (a: C) => B,
  fn3: (a: D) => C,
  fn4: (a: E) => D,
  fn5: (a: F) => E
): (a: F) => A

export default function compose<A, B, C, D, E, F, G>(
  fn1: (a: B) => A,
  fn2: (a: C) => B,
  fn3: (a: D) => C,
  fn4: (a: E) => D,
  fn5: (a: F) => E,
  fn6: (a: G) => F
): (a: G) => A

export default function compose(...fns: ((a: any) => any)[]): any {
  const [fn1, ...fnRest] = fns
  return fnRest.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1)
}
