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
  uname:any=this.ds.currentUser
  // myDate:any=new Date()

  constructor(private ds:DataService,private datePipe: DatePipe) {
    this.acno=JSON.parse(localStorage.getItem("accountNo")|| '')
    this.transactions=this.ds.getTransaction(this.acno)
    this.balance=this.ds.userBalance(this.acno)
    
    
    console.log(this.transactions);
    console.log(this.uname);
    
    
   }

  ngOnInit(): void {
    // this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy,hh:mm:ss a');
    // console.log(this.myDate);
  }

}
