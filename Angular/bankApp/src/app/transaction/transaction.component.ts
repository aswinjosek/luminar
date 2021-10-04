import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions:any
  acno:any
  balance:any
  uname:any=localStorage.getItem("currentUser")
  // myDate:any=new Date()

  constructor(private ds:DataService,private datePipe: DatePipe) {
    this.acno=localStorage.getItem("currentAcno")
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
        
        this.transactions=result.transaction
        console.log(result);
        
      }
    },
    (result)=>{
      alert(result)
    })
    // this.balance=this.ds.userBalance(this.acno)
    
    
    // console.log(this.transactions);
    // console.log(this.uname);
    
    
   }

  ngOnInit(): void {
    // this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy,hh:mm:ss a');
    // console.log(this.myDate);
  }

}
