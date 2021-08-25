function authenticate(){
    let account_no=acno.value
    let password=pwd.value
    if(account_no in localStorage){
        let user=JSON.parse(localStorage.getItem(account_no))
        if(user.password==password && user.account_no==account_no){
            alert("login success");
            
            
        }
        else{
            alert("invalid credentials");
        }

    }
    else{
        alert("invalid ac.no");
    }

}

