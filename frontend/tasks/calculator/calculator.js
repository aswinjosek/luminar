function clickAt(num){
    // inpt.value+=num;
    document.querySelector("#inpt").value+=num
}

function vanish(){
    inpt.value="  "

}

function evaluation(){
    dat=eval(inpt.value)
    inpt.value=dat
}

function backspace(){
    dat=inpt.value.slice(0,-2)
    inpt.value=dat
}