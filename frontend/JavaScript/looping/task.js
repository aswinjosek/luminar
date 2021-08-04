//even num

// var low = 1;
// var up = 10;
// i = low;

// while (i <= up) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

//square

var num = 2;
var up = 28;
var low = 8;
var ans;
var i = 1;

while (i <= up) {
  ans = i ** num;

  if ((ans < up) && (ans > low)) {
    console.log(i);
  }
  i++;
}

//second largest

// var a = 5,
//   b = 6,
//   c = 4;

// if (a >= b && a >= c) {
//   if (b >= c) {
//     console.log(" b is second largest", b);
//   } else {
//     console.log("c second largest is ", c);
//   }
// } else if (b >= a && b >= c) {
//   if (a >= c) {
//     console.log("a is the 2nd largest number", a);
//   } else {
//     console.log("c is the 2nd largest number", c);
//   }
// } else if (c >= a && c >= b) {
//   if (a >= b) {
//     console.log("a is second largest", a);
//   } else {
//     console.log("b is second largest", b);
//   }
// }


