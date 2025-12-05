function wordsToRegister(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    res += i % 2 === 0 ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return res;
}
// Примеры вызова:
console.log(wordsToRegister('hello')); // 'hElLo'
console.log(wordsToRegister('test test')); // 'tEsT tEsT'
