
exports.foo = function(wut, options) {
  const foo = `foo ${wut}`
  if (options && options.reverse) {
    return Array.from(foo).reverse().join('')
  }
  return foo
}