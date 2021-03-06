type propEq = <T, K extends keyof T = keyof T>(
  key: K,
  value: T[K]
) => (obj: T) => boolean
const propEq: propEq = (key, value) => obj => obj[key] === value

export default propEq
