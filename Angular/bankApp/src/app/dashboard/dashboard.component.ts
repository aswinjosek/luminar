import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=this.data.currentUser
  

 
  depositForm=this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-z]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  

 
  withdrawForm=this.fb.group({
    
    wacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    wpswd:['',[Validators.required,Validators.pattern('[0-9a-z]*')]],
    wamt:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private data:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    
    
  }

  deposit(){
    
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amt=this.depositForm.value.amt
    
   if(this.depositForm.valid){
      var result=this.data.deposit(acno,pswd,amt)
      var bal=this.data.user[acno]["balance"]
      if(result){
        alert(amt+ " deposited. new bal is " +bal)
      }
   }
   else{
     alert("form not valid")
   }
  


  }
  withdraw(){

    var wacno=this.withdrawForm.value.wacno
    var wpswd=this.withdrawForm.value.wpswd
    var wamt=this.withdrawForm.value.wamt
    if(this.withdrawForm.valid){
      var result=this.data.withdraw(wacno,wpswd,wamt)
      var bal=this.data.user[wacno]["balance"]
      if(result){
        alert(wamt+" withdrawed. new bal is " + bal)
      }
    }
    else{
      alert("invalid form")
    }

    
    
  }
  balance(){
    var bal=this.data.balance
    alert(bal)

  }
 

}
