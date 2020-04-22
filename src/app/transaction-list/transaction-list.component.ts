import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../interfaces/account';
import { ApiTransactionService } from '../api/api-transaction.service';
import { Transaction } from '../interfaces/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() account: Account;
  constructor(
    private api: ApiTransactionService
  ) { }

  ngOnInit(): void {
  }

  refresh(t: Transaction): void {
    this.api.show(this.account.id, t.id).subscribe((e: Transaction) => {
      console.log('Transaction show : ', t);
      if (t) {
        t.amount = e.amount;
        t.description = e.description;
        t.type = e.type;
        t.pingedAt = new Date();
      }
    }, (err) => {
      console.error('Transaction show : failed');
      t.pingedAt = new Date();
    });
  }

}
