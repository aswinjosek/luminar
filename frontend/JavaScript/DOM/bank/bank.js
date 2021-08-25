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
        // location.href="bank_login.html"
    }
}

var bank=new Bank()