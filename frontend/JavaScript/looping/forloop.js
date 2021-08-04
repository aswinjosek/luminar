// for(let i=10; i>0; i--){
//     console.log(i);
// }

//prime

var num=15;
var flag=0;

for(let i=2;i<num;i++){
    if(num%i==0){
        flag=flag+1;
        break;
    }

}
console.log(flag==0?"prime":"non Prime");