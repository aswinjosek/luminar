class Bank{
    createAccount(){
        let person_name=pname.value
        let account_no=acno.value
        let password=pwd.value
        let balance=bal.value
        let user={
            person_name,account_no,password,balance
        }
        localStorage.setItem(account_no,JSON.stringify(user))
        alert("account created succesfully")
        location.href="bank_login.html"
    }
    authenticate(){
        let account_no=acno.value
        let password=pwd.value
        if(account_no in localStorage){
            let user=JSON.parse(localStorage.getItem(account_no))
            if(user.password==password && user.account_no==account_no){
                alert("login success");
                sessionStorage.setItem(account_no,JSON.stringify(user))
                location.href="landing.html"
                
                
            }
            else{
                alert("invalid credentials");
            }
    
        }
        else{
            alert("invalid ac.no");
        }
    
    }
    logout(){
        sessionStorage.clear();
        location.href="bank_login.html"
    }
    balanceEnquiry(){
        let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
        alert(`${user.person_name}'s available balance is ${user.balance}`)
    }
    fundTransfer(){
        let to_acno=toacno.value
        let amount=amt.value
        if(to_acno in localStorage){
            let user=JSON.parse(sessionStorage.getItem(sessionStorage.key(0)))
            console.log(user);
            if(user.balance>=amount){
                let user1=JSON.parse(localStorage.getItem(user.account_no))
                let user2=JSON.parse(localStorage.getItem(to_acno))
                let bal=Number(user2.balance)+Number(amount)
                user1.balance-=amount;
                user2.balance=bal;
                localStorage.setItem(user1.account_no,(JSON.stringify(user1)))
                localStorage.setItem(user2.account_no,(JSON.stringify(user2)))
                sessionStorage.setItem(user1.account_no,(JSON.stringify(user1)))
                sessionStorage.setItem(user2.account_no,(JSON.stringify(user2)))

                alert(`New Balance is ${user1.balance}`)
                
               
                
                


            }
            else{
                alert("insufficient balance")
            }
        }
        else{
        alert("invali acno")
        }
    }
}

var bank=new Bank()