import compose from "."

it("composes functions that takes and returns a string", () => {
  const fn1 = (val: string): string => `fn1(${val})`
  const fn2 = (val: string): string => `fn2(${val})`
  const fn3 = (val: string): string => `fn3(${val})`
  const composedFunction = compose(
    fn1,
    fn2,
    fn3
  )
  expect(composedFunction("inner")).toBe("fn1(fn2(fn3(inner)))")
})

it("composes functions that takes and returns different types", () => {
  const fn1 = (vals: string[]): string => vals.join(",")
  const fn2 = (val: string): string[] => [`fn1(${val})`, "foo"]
  const fn3 = (val: string): string => `fn2(${val})`
  const fn4 = (val: number): string => `fn3(${val})`
  const composedFunction = compose(
    fn1,
    fn2,
    fn3,
    fn4
  )
  expect(composedFunction(42)).toEqual("fn1(fn2(fn3(42))),foo")
})

it("calculates math expressions", () => {
  const add = (a: number) => (b: number) => a + b
  const mul = (a: number) => (b: number) => a * b
  expect(
    compose(
      mul(3),
      add(4)
    )(2)
  ).toEqual(18)
})
