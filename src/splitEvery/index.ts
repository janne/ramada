const splitEvery = <T>(every: number) => (xs: T[]): T[][] => {
  return xs.reduce((result: T[][], x: T, i: number) => {
    const pos = Math.floor(i / every)
    const curr = result[pos] || []
    return [...result.slice(0, pos), [...curr, x]]
  }, [])
}

export default splitEvery
