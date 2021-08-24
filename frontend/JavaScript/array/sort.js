var a=[1,2,3,5,4]
var b=[2,1,3,4,5]
var flag=0;
var limit=a.length-1
function newsort(a,b){
    a.sort((num1,num2)=>num1-num2)
    console.log(a);
    b.sort((num1,num2)=>num1-num2)
    console.log(b);

    if(a.length != b.length){
        console.log("not same");
        
    }
    else{
        for(let i=0; i<=limit; i++){
            if(a[i]==b[i]){
                continue;
            }
            else{
                flag=flag+1;
            }
        }
        console.log(flag==0?"same":"not same");
    }
}

console.log(newsort(a,b));