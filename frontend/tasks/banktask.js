var person1={pname:"ram",account_number:1000,balance:2000,password:"userone"}
var person2={pname:"ram pj",account_number:1001,balance:2000,password:"userone"}

localStorage.setItem(person1.account_number,JSON.stringify(person1))
localStorage.setItem(person2.account_number,JSON.stringify(person2))

function getBalance(account_number){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        console.log(user.balance);
    }
    else{
        console.log("account not present");
    }
}

function authenticate(account_number,password){
    if(account_number in localStorage){
        let user=JSON.parse(localStorage.getItem(account_number))
        if(user.password==password && user.account_number==account_number){
            console.log("login success");
            
        }
        else{
            console.log("invalid credentials");
        }

    }
    else{
        console.log("invalid ac.no");
    }

}