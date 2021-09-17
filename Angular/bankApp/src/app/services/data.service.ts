import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser=''
  balance=''
  user: any = {
    1000: { uname: 'aswin', acno: 1000, password: 'user1', balance: 5000 },
    1001: { uname: 'bestin', acno: 1001, password: 'user2', balance: 6000 },
    1002: { uname: 'amal', acno: 1002, password: 'user3', balance: 7000 },
  };

  constructor() {
    this.getDetails()
  }

  saveDetails(){
    if(this.user){
    localStorage.setItem("user",JSON.stringify(this.user))
    }
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.balance){
      localStorage.setItem("balance",JSON.stringify(this.balance))
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
    if(localStorage.getItem("balance")){
      this.balance=JSON.parse(localStorage.getItem("balance") ||'')
      console.log(this.balance);
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
      this.balance=accdetails[acno]["balance"]
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
  deposit(acno:any,pswd:any,amt:any){
    let accdetails=this.user
    if(acno in accdetails){
      if(pswd==accdetails[acno]["password"]){
        accdetails[acno]["balance"]+=amt
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
}
