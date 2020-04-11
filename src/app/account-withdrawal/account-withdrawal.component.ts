import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { Account } from '../interfaces/account';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { ApiAccountService } from '../api/api-account.service';

@Component({
  selector: 'app-account-withdrawal',
  templateUrl: './account-withdrawal.component.html',
  styleUrls: ['./account-withdrawal.component.scss']
})
export class AccountWithdrawalComponent extends AccountFormBaseComponent {
  form = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
    description: ['']
  });

  constructor(fb: FormBuilder, s: SystemService, private api: ApiAccountService) { super(fb, s); }

  submit() {
    if (this.form.invalid) {
      this.checkValid();
      return false;
    }

    if (this.saving) {
      return;
    }
    this.saving = true;

    this.api.withdraw(this.acc.id, this.form.value).subscribe((e: any) => {
      console.log(e);
      this.acc.balance = e.postBalance;
      this.acc.transactions.push(e);
      this.close();
      this.saving = false;
    }, (err) => {
      console.error(err);
      this.saving = false;
    });



  }

}
