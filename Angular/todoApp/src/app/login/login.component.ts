import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
  });

  ngOnInit(): void {
  }

}
