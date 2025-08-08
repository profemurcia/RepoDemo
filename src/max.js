// src/max.js
function max(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array of numbers.');
  }

  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

module.exports = {
  max
};
