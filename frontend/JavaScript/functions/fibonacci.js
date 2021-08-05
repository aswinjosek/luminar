// var num=6;
// let n1=0, n2=1, nextterm=0;

// for(let i=1; i<=num; i++){
//     console.log(n1);
//     nextterm=n1+n2;
//     n1=n2;
//     n2=nextterm;

// }

function fibonacci(n){
    if (n==0 | n ==1){
        return n
    } 
    else{
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}

console.log( fibonacci(4));