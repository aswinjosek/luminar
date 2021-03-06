import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // name = '';
  // acno = '';
  // pswd = '';
  // bal = '';

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    bal: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(
    private data: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  register() {
    // this.registerForm.get('name')?.errors
    // this.registerForm.get('name')?.touched

    var name = this.registerForm.value.name;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    var bal = this.registerForm.value.bal;
    if (this.registerForm.valid) {
      this.data.register(name, acno, pswd, bal).subscribe(
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
