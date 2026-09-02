function reverseString(str) {
  if (!str.length) return str;

  return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString('hello'));

function reverseString(str, i = 0, rev = '') {
  if (str.length === i) return rev;

  rev = str[i] + rev;
  return reverseString(str, i + 1, rev);
}

console.log(reverseString('hello'));
