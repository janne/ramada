import prop from "."

it("returns prop from mapped object", () => {
  expect([{ key: "foo" }, { key: "bar" }].map(prop("key"))).toEqual([
    "foo",
    "bar"
  ])
})

it("returns prop from typed object", () => {
  type Key = { key: string }
  expect(prop<Key>("key")({ key: "foo" })).toEqual("foo")
})
