let num = 12345;
let sum=0;

while (num > 0) {
  let dig = num % 10;
  sum=sum*10+dig
 
  num = parseInt(num / 10);
}
console.log(sum);
