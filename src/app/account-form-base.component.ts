import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Account } from './interfaces/account';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SystemService } from './services/system.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-form-base',
  template: '<div>This is a test</div>',
  styles: ['']
})
export class AccountFormBaseComponent implements OnInit, OnChanges {
  @Input() account: Account;
  acc: Account;
  saving = false;
  form: FormGroup;

  constructor(protected fb: FormBuilder, protected s: SystemService, protected msg: ToastrService) { }

  ngOnInit(): void {
    this.acc = {} as Account;
  }

  ngOnChanges(changes: SimpleChanges) {
    const account: SimpleChange = changes.account;
    if (account.currentValue) {
      this.acc = account.currentValue;
    }
  }

  close() {
    this.form.reset();
    this.s.activeForm = null;
  }

  checkValid(msg) {
    this.msg.error(msg);
  }

  submit() { }

}
