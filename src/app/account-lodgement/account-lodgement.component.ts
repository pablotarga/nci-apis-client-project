import { Component } from '@angular/core';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { ApiAccountService } from '../api/api-account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-lodgement',
  templateUrl: './account-lodgement.component.html',
  styleUrls: ['./account-lodgement.component.css']
})
export class AccountLodgementComponent extends AccountFormBaseComponent {
  form = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
    description: ['']
  });

  constructor(fb: FormBuilder, s: SystemService, msg: ToastrService, private api: ApiAccountService) { super(fb, s, msg); }


  submit() {
    if (this.form.invalid) {
      this.checkValid('🤑 Inform amount to lodge.');
      return false;
    }

    if (this.saving) {
      return;
    }
    this.saving = true;

    this.api.lodge(this.acc.id, this.form.value).subscribe((e: any) => {
      console.log(e);
      this.acc.balance = e.postBalance;
      this.acc.transactions.push(e);
      this.close();
      this.saving = false;
      this.msg.success('🎉 Money lodged');
    }, (err) => {
      console.error(err);
      this.saving = false;
      this.msg.error('Request not accepted 💩');
    });
  }



}
