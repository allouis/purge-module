/* IGNORE THIS */
const tests = {};
const assert = require('assert');
const test = (name, fn) => {
  tests[name] = fn; 
}
process.nextTick(() => Object.keys(tests).forEach(name => {
  const fn = tests[name];
  let result;
  let err;
  try {
    fn();
    result = 'success';
  } catch (e) {
    err = e;
    result = 'fail';
  }
  console.log(`${name}: ${result}`);
  if (err) console.error(err);
}));
/* ^^ IGNORE THIS ^^ */

const config_wrapper = require('./lib/config-wrapper');

test('service returns the default name', function () {
  const service = require('./lib/service');
  assert.equal(service(), 'default'); 
});

test('service returns the custom name', function () {
  config_wrapper.set('name', 'custom');
  console.log('gonna require service');
  const service = require('./lib/service');
  assert.equal(service(), 'custom'); 
});

test('service returns the modules default name', function () {
  config_wrapper.set('name', undefined);
  const service = require('./lib/service');
  assert.equal(service(), 'egg'); 
});
