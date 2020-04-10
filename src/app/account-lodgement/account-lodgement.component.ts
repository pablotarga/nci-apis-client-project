import { Component } from '@angular/core';
import { AccountFormBaseComponent } from '../account-form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { SystemService } from '../services/system.service';

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

  constructor(fb: FormBuilder, s: SystemService) { super(fb, s); }


}
