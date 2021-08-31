// try{
// let res=eval("hello/hi");
// console.log(res);
// }
// catch(error){
//     console.log(error.message);

// }
// console.log("1");
// console.log("2");
//try :doubtful code
//catch: catching the above error

// let age="hello"

// try{
//     if(isNaN(age)) throw new Error("not a number")
//     if(age<18) throw new Error("under age")
// }
// catch(error){
//     console.log(error.message);
// }

var ph="944728994"

try{
    if(ph.length!=10) throw new Error("not a 10 digit no.")
}
catch(error){
    console.log(error.message);
}