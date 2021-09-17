import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  acno = '';
  pswd = '';

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-z]*')]]


  })

  constructor(private router: Router, private data: DataService,private fb:FormBuilder) {}



  ngOnInit(): void {}
  // accChange(event:any){
  //   this.acno=event.target.value
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  // }
  login() {
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    
   if(this.loginForm.valid){
      let result = this.data.login(acno, pswd);
  
      if (result == true) {
        alert('login succesful');
        this.router.navigateByUrl('dashboard');
      }
    }
    else{
      alert("invalid Form")
    }

  }
}
