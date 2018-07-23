'use strict'

const {strictEqual} = require('assert')
const runAbstractSchedulerTests = require('abstract-scheduler')
const createRoundRobin = require('.')

const roundRobin = createRoundRobin(['foo', 'bar'])

strictEqual(roundRobin.get(), 'foo')
strictEqual(roundRobin.get(), 'bar')
strictEqual(roundRobin.add('baz'), 2)
strictEqual(roundRobin.length, 3)
strictEqual(roundRobin.get(), 'baz')
strictEqual(roundRobin.remove(0), true)
strictEqual(roundRobin.get(), 'bar')

runAbstractSchedulerTests(createRoundRobin)
