import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds:DataService, private router: Router) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
  });
  hide=true

  ngOnInit(): void {
  }

login(){
  var username = this.loginForm.value.username;
  var password = this.loginForm.value.password;

  if (this.loginForm.valid) {
    this.ds.login(username, password).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          localStorage.setItem("currentUser",result.username)
          localStorage.setItem("id",result.id)
          this.router.navigateByUrl('addtodo');
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  } else {
    alert('invalid form');
  }
}


}
