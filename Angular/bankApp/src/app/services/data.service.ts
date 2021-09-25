import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser=''
  accountNo=''
  myDate:any
  
  
  user: any = {
    1000: { uname: 'aswin', acno: 1000, password: 'user1', balance: 5000,transaction:[]},
    1001: { uname: 'bestin', acno: 1001, password: 'user2', balance: 6000,transaction:[]},
    1002: { uname: 'amal', acno: 1002, password: 'user3', balance: 7000,transaction:[]},
  };

  constructor(private datePipe: DatePipe) {
    this.getDetails()
    
    
  }

  saveDetails(){
    if(this.user){
    localStorage.setItem("user",JSON.stringify(this.user))
    }
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  
    if(this.accountNo){
      localStorage.setItem("accountNo",JSON.stringify(this.accountNo))
      
      
    }
  }

  getDetails(){
    if(localStorage.getItem("user")){
      this.user=JSON.parse(localStorage.getItem("user") ||'')
      console.log(this.user);
      
      
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") ||'')
      console.log(this.currentUser);
      
    }
    
  }

  register(name: any, acno: any, pswd: any, bal: any) {
    let accdetails = this.user;
    if (acno in accdetails) {
      return false;
    } else {
      accdetails[acno] = {
        uname: name,
        acno: acno,
        password: pswd,
        balance: bal,
        transaction:[]
        
      };

      // console.log(accdetails);
      this.saveDetails()

      return true;
    }
  }
  login(acno:any,pswd:any){
    let accdetails=this.user
    if(acno in accdetails){
      if(pswd==accdetails[acno]["password"]){
      // alert("login succesful")
      // this.router.navigateByUrl("dashboard")
      this.currentUser=accdetails[acno]["uname"]
      // this.balance=accdetails[acno]["balance"]
      this.accountNo=acno
      console.log(this.accountNo);
      
      this.saveDetails()
      return true;
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid user")
      return false;
    }
  }

  getTransaction(acno:any){
    
    
    return this.user[acno]["transaction"]

  }
  deposit(acno:any,pswd:any,amt:any){
    let accdetails=this.user
    if(acno in accdetails){
      if(pswd==accdetails[acno]["password"]){
        this.myDate=new Date()
        this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy, hh:mm:ss a');
        console.log(this.myDate);
        accdetails[acno]["balance"]+=Number(amt);
        accdetails[acno]["transaction"].push({amount:amt,
        type:"credit",balance:accdetails[acno]["balance"],date:this.myDate});
        // console.log(accdetails);
        
        this.saveDetails()
        return true;
      
      
      
      
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid user")
      return false;
    }

  }

  withdraw(wacno:any,wpswd:any,wamt:any){
    let accdetails=this.user
    if(wacno in accdetails){
      if(wpswd==accdetails[wacno]["password"]){
        if(accdetails[wacno]["balance"]>=wamt){
          accdetails[wacno]["balance"]-=wamt;
          this.myDate=new Date()
          this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy,  hh:mm:ss a');
          console.log(this.myDate);
          accdetails[wacno]["transaction"].push({amount:wamt,
        type:"debit",balance:accdetails[wacno]["balance"],date:this.myDate})
          // console.log(accdetails);
          this.saveDetails()
          
          
          return true
        }
        else{
          alert("insufficient balance")
          return(false)
        }
      
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid user")
      return false;
    }


  }
  userBalance(acno:any){
    return this.user[acno]["balance"]
  }
}
