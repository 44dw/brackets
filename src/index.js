module.exports = function check(str, bracketsConfig) {
  const isOdd = (num) => num % 2 == 0;
  let arr = [];
  const flatConfig = bracketsConfig.flat();
  for (let bracket of str.split('')) {
    const index = flatConfig.indexOf(bracket)
    const isOpen = isOdd(index);
    const isCloseEqualsToOpen = isOdd(index) && flatConfig[index + 1] == bracket;
    if (isOpen && !isCloseEqualsToOpen) {
      arr.push(bracket);
    } else if (isCloseEqualsToOpen) {
      if (arr[arr.length - 1] == bracket) {
        arr.pop();
      } else {
        arr.push(bracket);
      }
    } else {
      // close bracket
      const open = arr.pop();
      if (open !== flatConfig[index - 1]) return false;
    }
  }
  return  (arr.length == 0) ? true : false;
}
