import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../interfaces/account';
import { ApiAccountService } from '../api/api-account.service';
import { Transaction } from '../interfaces/transaction';
import { ApiTransactionService } from '../api/api-transaction.service';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css']
})
export class AccountTransferComponent extends AccountFormBaseComponent {
  targetAccount: Account = null;
  form = this.fb.group({
    targetid: [''],
    sortCode: ['', [Validators.required]],
    number: ['', [Validators.required]],
    amount: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
  });

  constructor(
    fb: FormBuilder,
    s: SystemService,
    msg: ToastrService,
    private api: ApiAccountService
  ) { super(fb, s, msg); }

  get list(): Account[] {
    return this.s.accounts.filter(e => e.id !== this.s.activeAccount.id);
  }

  setTarget(a: Account): void {
    this.targetAccount = a;

    if (a === null) {
      this.fTarget.clearValidators();
      this.fTarget.setValue(null);

      this.fSortCode.setValidators([Validators.required]);
      this.fNumber.setValidators([Validators.required]);
    } else {
      this.fTarget.setValidators(Validators.required);
      this.fTarget.setValue(a.id);
      this.fSortCode.clearValidators();
      this.fNumber.clearValidators();
      this.fSortCode.setValue('');
      this.fNumber.setValue('');
    }

    this.fTarget.updateValueAndValidity();
    this.fSortCode.updateValueAndValidity();
    this.fNumber.updateValueAndValidity();
  }

  submit() {
    if (this.form.invalid) {
      if (this.fAmount.invalid) {
        if (this.fAmount.errors.required) {
          this.msg.error('🚦 Amount is required');
        } else {
          this.msg.error('🚦 Amount accepts only digits and \'.\'');
        }
      }

      if (this.fTarget.invalid || this.fSortCode.invalid || this.fNumber.invalid) {
        this.msg.error('🚦 Select a target account or fill Sort Code and Number');
      }
      return false;
    }

    if (this.saving) {
      return;
    }
    this.saving = true;

    this.api.transfer(this.account.id, this.form.value).subscribe((e: Transaction[]) => {
      if (e) {
        this.s.addTransaction(e[0]);
        this.s.addTransaction(e[1]);

        this.msg.success('💚💚💚 Transferred with success');
      } else {
        this.msg.error('Request not accepted 💩');
      }
      this.saving = false;
      this.close();
    }, (err) => {
      this.saving = false;
      this.msg.error('Request not accepted 💩');
    });

  }

  get fAmount() {
    return this.form.get('amount');
  }

  get fTarget() {
    return this.form.get('targetid');
  }

  get fSortCode() {
    return this.form.get('sortCode');
  }
  get fNumber() {
    return this.form.get('number');
  }
}
