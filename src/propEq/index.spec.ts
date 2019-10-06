import propEq from "."

it("returns true if mapped objects are equal", () => {
  expect([{ key: "foo" }, { key: "bar" }].map(propEq("key", "bar"))).toEqual([
    false,
    true
  ])
})

it("returns true if typed object is equal", () => {
  type Key = { key: string }
  expect(propEq<Key>("key", "foo")({ key: "foo" })).toEqual(true)
})

it("returns false if typed object is equal", () => {
  type Key = { key: string }
  expect(propEq<Key>("key", "foo")({ key: "bar" })).toEqual(false)
})
