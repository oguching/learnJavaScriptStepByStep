/**
 * Basic Mathematical Operations
 */

const a = 5
const b = 7
const result = a + b

console.log(result)

/**
 * 0.9, 4.8, 1.5 
 * Find the smallest number in the list and round it down to the nearest whole number
 * Find the largest number in the list and round it up to the nearest whole number
 */

const smallestNumber = Math.min(0.9, 4.8, 1.5)
const largestNumber = Math.max(0.9, 4.8, 1.5)

console.log('smallest number:', smallestNumber)
console.log('largest number:', largestNumber)

// Round down the smallest number and log it to the console
console.log('smallest whole number: ', Math.floor(smallestNumber))

// Round up the largest number and log it
console.log('largest whole number: ', Math.ceil(largestNumber))

/**
 * Math.random()
 * Produces a random number between 0 and 1, not including 1
 * To produce a random number between 0 and 9
 * We use Math.floor() with Math.random()
 */

// Generate a random number between 0 and 9
console.log(Math.floor(Math.random() * 10))