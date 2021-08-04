var a = [10, 20, 30, 40];
var b = [9, 10, 12, 20];

let pos1,
  pos2 = 0;
while ((pos1 < a.length) & (pos2 < b.length)) {
  if (a[pos1] == b[pos2]) {
    console.log(a[pos1]);
    pos1++, pos2++;
  } else if (a[pos1] > b[pos2]) {
    pos2++;
  } else {
    pos1++;
  }
}
