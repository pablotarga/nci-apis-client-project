import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../interfaces/account';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  @Input() account: Account;
  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }

}
