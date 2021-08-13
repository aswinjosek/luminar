class Bank{
    session={};

    account_details={
        1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
        1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
        1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
        1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
    
    
    
    }

    accountCreate(acno,balance,username,password){

        if(acno in this.account_details){
            console.log("account already existed");
        }
        else{
            this.account_details[acno]={acno,balance,username,password}
            console.log("account created");
            console.log(this.account_details);
        }
    }

    authenticate(acno,username,password){
        if(acno in this.account_details){
            if(this.account_details[acno].username==username){
                if(this.account_details[acno].password==password){
                    console.log("login success");
                    this.session["user"]=acno
                }
                else{
                    console.log("invalid pass word");
                }

            }
            else{
                console.log("invalid username");
            }

        }
        else{
            console.log("invalid acno");
        }
    }
    fundTransfer(from_acno,to_acno,amount){
        if(from_acno==this.session["user"]){
            if(to_acno in this.account_details){
                if(this.account_details[from_acno].balance>amount){
                    this.account_details[to_acno].balance+=amount;
                    this.account_details[from_acno].balance-=amount;
                    console.log(`your account is ${from_acno} is debited with amount ${amount} aval bal ${this.account_details[from_acno].balance}`);
                }
                else{
                    console.log("insuffient bal");
                }

            }
            else{
                console.log("invalid accnt no");
            }

            
        }
        else{
            console.log("invalid session login ");
        }
    }
    balanceEnquiry(){
        if("user" in this.session){
            console.log(`your balance is ${this.account_details[this.session["user"]].balance}`);
        }
        
    }

}

var obj=new Bank();
obj.authenticate(1003,"userfour","userfour")
obj.fundTransfer(1003,1001,1000)
obj.balanceEnquiry();
