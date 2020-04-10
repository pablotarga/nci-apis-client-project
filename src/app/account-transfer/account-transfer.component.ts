import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SystemService } from '../services/system.service';
import { AccountFormBaseComponent } from '../account-form-base.component';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css']
})
export class AccountTransferComponent extends AccountFormBaseComponent {

  constructor(fb: FormBuilder, s: SystemService) { super(fb, s) }

}
