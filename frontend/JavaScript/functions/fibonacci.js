var num=6;
let n1=0, n2=1, nextterm=0;

for(let i=1; i<=num; i++){
    console.log(n1);
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;

}