var a = [1, 2];
var b = [2, 1];
var flag = 0;

function common(a, b) {
  a.sort();
  b.sort();
  console.log(a);
  console.log(b);

  for (let i = 0; i < a.length && i< b.length; i++) {
    if (a[i] !== b[i]) {
      flag = flag + 1;
    }
  }
  console.log(flag == 0 ? "all elements are same" : "elements are different");
}

console.log(common(a, b));
