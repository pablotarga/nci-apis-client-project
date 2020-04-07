import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../interfaces/account';
@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.scss']
})
export class AccountRowComponent implements OnInit {
  @Input() account: Account;
  constructor() { }

  ngOnInit(): void {
  }

}
