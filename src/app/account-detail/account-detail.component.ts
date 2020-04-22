import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges, ElementRef } from '@angular/core';
import { Account } from '../interfaces/account';
import { SystemService } from '../services/system.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiTransactionService } from '../api/api-transaction.service';
import { Transaction } from '../interfaces/transaction';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations: [
    trigger('contentAnimation', [
      transition(
        ':enter',
        [
          style({
            opacity: 0,
            height: 0,
            display: 'block',
          }),
          animate('400ms 200ms ease',
            style({
              opacity: 1,
              display: 'block',
            })
          )
        ]
      ),
      transition(
        ':leave',
        [
          style({
            opacity: 1,
            display: 'block',
          }),
          animate('200ms 0s ease',
            style({
              height: 0,
              opacity: 0,
            })
          )
        ]
      )
    ]),

    trigger('balanceTip', [
      transition(
        ':enter',
        [
          style({
            opacity: 0,
            display: 'block',
          }),
          animate('600ms 0ms ease',
            style({
              opacity: 1,
              display: 'block',
            })
          )
        ]
      ),
      transition(
        ':leave',
        [
          style({
            opacity: 1,
          }),
          animate('600ms 0s ease',
            style({
              opacity: 0,
            })
          )
        ]
      )
    ]),


  ]
})
export class AccountDetailComponent implements OnInit {
  @Input() account: Account;
  acc: Account;

  constructor(public s: SystemService, private api: ApiTransactionService) { }

  ngOnInit(): void {
    this.acc = this.account;
    this.s.loadTransactions();
  }

  close() {
    this.s.activeForm = null;
    this.s.activeAccount = null;
  }

  openForm(name) {

    if (this.s.activeForm === name) {
      this.s.activeForm = null;
    } else {
      this.s.activeForm = name;
    }
  }


  public get showing(): string {
    return this.s.activeForm === null ? 'list' : this.s.activeForm;
  }
}
