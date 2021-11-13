import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
  });
  hide = true;
  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    var username = this.regForm.value.username;
    var password = this.regForm.value.password;

    if (this.regForm.valid) {
      this.ds.register(username, password).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('');
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
