import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }

  get total(): number {
    const list = (this.s.accounts || []);

    if (list.length) {
      return list.reduce((a, b) => {
        return { balance: a.balance + b.balance };
      }).balance;
    } else {
      return 0;
    }
  }
}
