type prop = <T, K extends keyof T = keyof T>(key: K) => (obj: T) => T[K]
const prop: prop = key => obj => obj[key]

export default prop
