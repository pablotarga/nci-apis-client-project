import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Account } from '../interfaces/account';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit, OnChanges {
  @Input() account: Account;
  acc: Account;
  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const account: SimpleChange = changes.account;
    if (account.currentValue) {
      this.acc = account.currentValue;
    }
  }


  close() {
    this.s.activeAccount = null;
  }

}
