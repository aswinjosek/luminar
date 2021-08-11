class Bank{
    setAccount(acno,type,balance){
        this.balance=balance;
        this.type=type;
        this.acno=acno

    }
    deposit(amount){
        this.balance+=amount;
        console.log(`your ac is credited ${this.balance}` );
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount;
            
        }
        else{
            console.log("insufficient balance");
        }
    }
    balanceEnquiry(){
        console.log(`avail bal is ${this.balance}`);
    }

}
var obj=new Bank
obj.setAccount(1000,"savings",2000)
obj.deposit(200000)
obj.balanceEnquiry()
obj.withdrawal(20000000000)