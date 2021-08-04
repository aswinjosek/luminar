var low=2, up=18;

for(let i=low; i<up; i++){
    let flag=0;

    for(let j=2; j<i; j++){
        if(i%j==0){
            flag=flag+1;
            break;
            
        }

    }
    console.log(flag==0?i:"nonprime");
}