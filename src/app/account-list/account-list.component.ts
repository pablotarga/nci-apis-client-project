import { Component, OnInit } from '@angular/core';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(public s: SystemService) { }

  ngOnInit(): void {
  }


  get total(): number {
    return this.s.accounts.reduce((a, b) => a.balance + b.balance);
  }

}
