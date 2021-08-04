var num1 = 16,
num2 = 48;
var gcd=0;
var a = [];
limit = num2;

for (let i = 1; i <= limit; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    gcd=i;
  }
}
// var res = Math.max.apply(Math, a);
console.log(gcd);
