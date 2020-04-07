import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['pablo.targa@gmail.com', [Validators.required, Validators.email]],
    password: ['13123123', Validators.required]
  });

  constructor(private fb: FormBuilder, public s: SystemService) { }
  ngOnInit(): void { }

  get email(): any { return this.form.get('email'); }
  get emailIsInvalid(): any {
    const e = this.email;
    return e.invalid && (e.dirty || e.touched);
  }

  get password(): any { return this.form.get('password'); }
  get passwordIsInvalid(): any {
    const e = this.password;
    return e.invalid && (e.dirty || e.touched);
  }
}
