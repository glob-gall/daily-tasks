function deepCopy<T>(a:T): T {
  return JSON.parse(JSON.stringify(a)) as T
}
export default deepCopy