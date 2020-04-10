import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-withdrawal',
  templateUrl: './account-withdrawal.component.html',
  styleUrls: ['./account-withdrawal.component.scss']
})
export class AccountWithdrawalComponent implements OnInit, OnChanges {
  @Input() account: Account;
  acc: Account;
  showErrors = false;
  errorTimeout;

  form = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
    description: ['']
  });

  constructor(private fb: FormBuilder, private s: SystemService) { }

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

  checkValid() {
    this.showErrors = true;
    clearTimeout(this.errorTimeout);
    this.errorTimeout = setTimeout(() => {
      this.showErrors = false;
    }, 3000);
  }

  submit() {
    if (this.form.invalid) {
      this.checkValid();
      return false;
    }


    this.close();
  }

}
