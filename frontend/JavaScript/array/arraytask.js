// var arr=[2,4,6];

// total=0;
// for(let num of arr){
//     total=total+num;
// }

// for(let num of arr){
//     console.log(total-num);
// }

var a = [1, 2, 3, 4, 6, 7, 8, 9,10,12];

for (let i = 0; i <=a.length; i++) {
  let miss = i + 1;

  if (a[i] != miss) {
    console.log(miss);
    break;
  }
}
