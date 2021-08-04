//map

var arr1=[1,2,3]

console.log(arr1.map(num1=>num1**3));

//name uppercase

var names=["arun", "amal"]

console.log(names.map(name=>name.toUpperCase()));

//num add

var nums=[2,3,4,6,7,8];

console.log(nums.map(num=>num<5?num-1:num+1))