import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() account: Account;
  constructor() { }

  ngOnInit(): void {
  }

}
