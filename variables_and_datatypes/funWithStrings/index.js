/**
 * Fun with Strings.
 */

const orderCode = 'GSX-1169'
console.log(orderCode.replace('GSX-', ''))

const greeting = 'hello'
console.log(greeting.toUpperCase())

/**
 * String concatenation.
 * Concatenate the following strings and
 * Output them in uppercase
 */

const part1 = 'JavaScript'
const part2 = 'is'
const part3 = 'cool'

console.log((part1 + ' ' + part2 + ' ' + part3).toUpperCase())

//using template strings
console.log(`${part1} ${part2} ${part3}`.toUpperCase())