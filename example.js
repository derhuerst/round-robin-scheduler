'use strict'

const createRoundRobin = require('.')

const roundRobin = createRoundRobin(['foo', 'bar'])

console.log(roundRobin.get()) // foo
console.log(roundRobin.get()) // bar
roundRobin.add('baz') // 2
console.log(roundRobin.length) // 3
console.log(roundRobin.get()) // baz
roundRobin.remove(0) // remove first item
console.log(roundRobin.get()) // bar
