// tests/test_max.js
const { max } = require('../src/max');

function runTests() {
  console.log('Running tests for max function...');

  // Test case 1: Positive numbers
  const test1 = max([1, 5, 2, 8, 3]);
  const expected1 = 8;
  if (test1 === expected1) {
    console.log('✅ Test 1 passed: Correctly finds max in positive numbers.');
  } else {
    console.error(`❌ Test 1 failed: Expected ${expected1}, but got ${test1}.`);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }

  // Test case 2: Negative numbers
  const test2 = max([-10, -5, -20, -1]);
  const expected2 = -1;
  if (test2 === expected2) {
    console.log('✅ Test 2 passed: Correctly finds max in negative numbers.');
  } else {
    console.error(`❌ Test 2 failed: Expected ${expected2}, but got ${test2}.`);
    process.exit(1);
  }

  // Test case 3: Mixed numbers
  const test3 = max([-5, 0, 10, -2]);
  const expected3 = 10;
  if (test3 === expected3) {
    console.log('✅ Test 3 passed: Correctly finds max in mixed numbers.');
  } else {
    console.error(`❌ Test 3 failed: Expected ${expected3}, but got ${test3}.`);
    process.exit(1);
  }

  console.log('All tests finished.');
}

runTests();
