
const { bar } = require('./migrated')

exports.foo = function(wut, options) {
  const foo = `foo ${wut}`
  if (options && options.reverse) {
    return Array.from(foo).reverse().join('')
  }
  return foo
}

exports.foobar = function(wut, options) {
  return exports.foo(bar(wut), options)
}