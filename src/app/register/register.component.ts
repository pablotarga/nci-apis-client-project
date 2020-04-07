import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    sortCode: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, public s: SystemService) { }

  ngOnInit(): void { }

  get name(): any { return this.form.get('name'); }
  get isNameInvalid(): boolean {
    return this.showInvalidControl(this.name);
  }

  get sortCode(): any { return this.form.get('sortCode'); }
  get isSortCodeInvalid(): boolean {
    return this.showInvalidControl(this.sortCode);
  }

  get address(): any { return this.form.get('address'); }
  get isAddressInvalid(): boolean {
    return this.showInvalidControl(this.address);
  }

  get email(): any { return this.form.get('email'); }
  get isEmailInvalid(): boolean {
    return this.showInvalidControl(this.email);
  }

  get password(): any { return this.form.get('password'); }
  get isPasswordInvalid(): boolean {
    return this.showInvalidControl(this.password);
  }

  private showInvalidControl(e: FormControl): boolean {
    return e.invalid && (e.dirty || e.touched);
  }

}
