const str = 'hello';

const result = str.split('').reduce((rev, c) => {
  return c + rev;
}, '');

console.log(result);
