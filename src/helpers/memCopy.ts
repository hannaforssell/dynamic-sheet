export function memCopy<T>(to: T, from: T) {
  for(const prop in from) {
    to[prop] = from[prop]
  }
}