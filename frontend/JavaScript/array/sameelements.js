var a = [1, 2,4,6,5,3,7,8];
var b = [2,1,3,4,5,6,7,9];
var flag = 0;
var limit= a.length-1;

function common(a, b) {
  a.sort((num1,num2)=>num1-num2);
  b.sort((num1,num2)=>num1-num2);



  if(a.length != b.length){
    console.log("arrays are different");
  }
  else{

    for (let i = 0; i <=limit; i++) {
      if (a[i] == b[i]) {
        continue;
      }
      else{
        flag=flag+1;
      }
    }
    console.log(flag == 0 ? "all elements are same" : "elements are different");
  }
}

console.log(common(a, b));
