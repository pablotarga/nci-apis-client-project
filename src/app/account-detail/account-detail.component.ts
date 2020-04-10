import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Account } from '../interfaces/account';
import { SystemService } from '../services/system.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations: [
    trigger('switchForm', [
      state('open', style({
        opacity: 1,
        height: '100%',
        display: 'block',
      })),

      state('closed', style({
        opacity: 0,
        height: 0,
        display: 'block',
      })),

      transition('open => closed', [
        animate('10ms 0ms ease-out')
      ]),

      transition('closed => open', [
        animate('300ms 10ms ease-out')
      ]),
    ])
  ]
})
export class AccountDetailComponent implements OnInit, OnChanges {
  @Input() account: Account;
  acc: Account;

  constructor(public s: SystemService) { }

  ngOnInit(): void {
    this.acc = {} as Account;
  }

  ngOnChanges(changes: SimpleChanges) {
    const account: SimpleChange = changes.account;
    if (account.currentValue) {
      this.acc = account.currentValue;
    }
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
