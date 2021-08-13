function diaplayValue(num){
    inpt.value+=num;
}

function clearBox(){
    inpt.value=""
}
function evalExpression(){
    let result=eval(inpt.value)
    inpt.value=result;
}

function backSpace(){
    let data=inpt.value.slice(0,-1)
    inpt.value=data


}
