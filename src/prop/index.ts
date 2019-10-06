type Prop = <T, K extends keyof T = keyof T>(key: K) => (obj: T) => T[K]
const prop: Prop = key => obj => obj[key]

export default prop
