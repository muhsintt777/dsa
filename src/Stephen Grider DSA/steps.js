function steps(n) {
  let count = 1;
  let curr = 0;
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (curr < count) {
        str += '#';
        curr++;
      } else {
        str += ' ';
      }
    }
    console.log(str);
    count++;
    curr = 0;
  }
}
