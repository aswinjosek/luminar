import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { TransactionComponent } from '../transaction/transaction.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
  acno:any
  dLogin:Date =new Date()
  
  

 
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
  constructor(private data:DataService,private fb:FormBuilder,private tc:TransactionComponent, private router:Router) { 
    this.user=localStorage.getItem("currentUser")

  }

  ngOnInit(): void {

    if(!localStorage.getItem("token")){
      alert("please Login")
      this.router.navigateByUrl("")
    }
    
   
  }

  deposit(){
    
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amt=this.depositForm.value.amt
    
   if(this.depositForm.valid){

    
      this.data.deposit(acno,pswd,amt).subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message)
      })
     
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
      this.data.withdraw(wacno,wpswd,wamt).subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }

      },
      (result)=>{
        alert(result.error.message)
      })
     
    }
    else{
      alert("invalid form")
    }

    
    
  }
  balance(){
    
    alert("yet to be done")

  }

  deleteConfirm(){
    this.acno=localStorage.getItem("currentAcno")

  }

  onDelete(event:any){
    this.data.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        localStorage.removeItem("token")
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.message)

    })


  }

  onCancel(){

    this.acno=""

  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
 

}
