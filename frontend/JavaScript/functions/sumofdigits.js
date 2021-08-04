var a = 177;
sum = 0;
while (a != 0) {
  num = a % 10;
  sum = sum + num;
  a = Math.floor(a / 10);
}
console.log(sum);
