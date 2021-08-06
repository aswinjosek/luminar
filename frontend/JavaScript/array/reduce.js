var arr=[1,2,3,4,5,6];
//sum
var sum= arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

//min

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

//max
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);