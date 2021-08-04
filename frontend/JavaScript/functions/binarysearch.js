var arr=[1,2,3,4,5,6,7,8,9,10,11];

let low=0, upp=arr.length-1,element=11,flag=0;

while(low<=upp){
    let mid= Math.floor((low+upp)/2)
    if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1;
    }
    else if(element==arr[mid]){
        flag=flag+1;
        break;
    }

}
console.log(flag==0?"element not found":"element fond");
