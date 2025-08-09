// tests/test_friends.js
const { friends } = require('../src/friends');

function runTests() {
  console.log('Running tests for friends function...');

  // Test case 1:
  const test1 = friends(6, 6);
  const expected1 = true;
  if (test1 === expected1) {
    console.log('✅ Test 1 passed: Correctly finds are friends numbers.');
  } else {
    console.error(`❌ Test 1 failed: Expected ${expected1}, but got ${test1}.`);
  }

  // Test case 2:
  const test2 = friends(16, 10);
  const expected2 = false;
  if (test2 === expected2) {
    console.log('✅ Test 2 passed: Correctly finds are friends numbers.');
  } else {
    console.error(`❌ Test 2 failed: Expected ${expected1}, but got ${test1}.`);
  }

  // Test case 3:
  const test3 = friends(220, 284);
  const expected3 = true;
  if (test3 === expected3) {
    console.log('✅ Test 3 passed: Correctly finds are friends numbers.');
  } else {
    console.error(`❌ Test 3 failed: Expected ${expected1}, but got ${test1}.`);
  }

  // Test case 4:
  const test4 = friends(5020, 5565);
  const expected4 = false;
  if (test4 === expected4) {
    console.log('✅ Test 4 passed: Correctly finds are friends numbers.');
  } else {
    console.error(`❌ Test 4 failed: Expected ${expected1}, but got ${test1}.`);
  }

  // Test case 5:
  const test5 = friends(10744,	10856);
  const expected5 = true;
  if (test5 === expected5) {
    console.log('✅ Test 5 passed: Correctly finds are friends numbers.');
  } else {
    console.error(`❌ Test 5 failed: Expected ${expected1}, but got ${test1}.`);
  }

  console.log('All tests finished.');
}

runTests();