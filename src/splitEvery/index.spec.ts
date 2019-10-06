import splitEvery from "."

it("splits numbers", () => {
  expect(splitEvery(3)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
})

it("splits strings", () => {
  expect(splitEvery(3)("FOOBAR".split(""))).toEqual([
    ["F", "O", "O"],
    ["B", "A", "R"]
  ])
})

it("splits uneven lengths", () => {
  expect(splitEvery(3)([1, 2, 3, 4])).toEqual([[1, 2, 3], [4]])
})

it("splits length 1", () => {
  expect(splitEvery(1)([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]])
})
