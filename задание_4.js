function sumOfDigitsInString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      sum += Number(str[i]);
    }
  }
  return sum;
}
// Примеры вызова:
console.log(sumOfDigitsInString('abc123')); // 6
console.log(sumOfDigitsInString('5 apples and 3 oranges')); // 8
