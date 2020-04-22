import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { ApiAccountService } from '../api/api-account.service';
import { Transaction } from '../interfaces/transaction';
import { ToastrService } from 'ngx-toastr';

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

  constructor(fb: FormBuilder, s: SystemService, msg: ToastrService, private api: ApiAccountService) { super(fb, s, msg); }

  submit() {
    if (this.form.invalid) {
      this.checkValid('💸 Inform amount to withdraw.');
      return false;
    }

    if (this.saving) {
      return;
    }
    this.saving = true;

    this.api.withdraw(this.account.id, this.form.value).subscribe((e: Transaction) => {
      this.account.balance = e.postBalance;
      this.account.transactions.push(e);
      this.msg.success('😎🎉 Money withdrawn');
      this.saving = false;
      this.close();
    }, (err) => {
      this.saving = false;
      this.msg.error('Request not accepted 💩');
    });
  }

}
