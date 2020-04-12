import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css']
})
export class AccountTransferComponent extends AccountFormBaseComponent {
  targetAccount: Account = null;
  form = this.fb.group({
    targetid: [''],
    sortCode: ['', Validators.required],
    number: ['', Validators.required],
    amount: ['', Validators.required, Validators.pattern('[0-9.]*')],
  });

  constructor(fb: FormBuilder, s: SystemService, msg: ToastrService) { super(fb, s, msg); }

  get list(): Account[] {
    return this.s.accounts.filter(e => e.id != this.s.activeAccount.id);
  }

  setTarget(a: Account): void {
    this.targetAccount = a;

    const inputTargetid = this.form.get('targetid');
    const inputSortCode = this.form.get('sortCode');
    const inputNumber = this.form.get('number');

    if (a === null) {
      inputTargetid.clearValidators();
      inputTargetid.setValue(null);

      inputSortCode.setValidators([Validators.required]);
      inputNumber.setValidators([Validators.required]);
    } else {
      inputTargetid.setValidators(Validators.required);
      inputTargetid.setValue(a.id);
      inputSortCode.clearValidators();
      inputSortCode.setValue('');
      inputNumber.clearValidators();
      inputNumber.setValue('');
    }

    inputTargetid.updateValueAndValidity();
    inputSortCode.updateValueAndValidity();
    inputNumber.updateValueAndValidity();
  }

  get errors(): any {
    let err = [];



    return err;
  }
}
