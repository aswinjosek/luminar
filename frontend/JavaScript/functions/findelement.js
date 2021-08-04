var arr=[1,2,3,4,5];

var flag=0;
for(let num of arr){
    if(num==7){
        flag=flag+1;
        break;
    }
  
}
console.log(flag==0?"element not found":"elememt found");
