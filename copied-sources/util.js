// 空函数
export function noop (a, b, c) {}

// 是否是原生的函数
export function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
