import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiAccountService } from '../api/api-account.service';
import { SystemService } from '../services/system.service';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {
  form = this.fb.group({
    sortCode: ['', Validators.required],
    title: ['', Validators.required]
  });
  loading = false;

  constructor(private s: SystemService, private fb: FormBuilder, private api: ApiAccountService, private msg: ToastrService) { }

  ngOnInit(): void {
  }

  close() {
    this.form.reset();
    this.s.activeAccount = null;
  }

  submit() {
    if (this.loading) {
      return;
    }

    if (this.form.invalid) {
      const err = [];

      if (this.form.get('title').invalid) {
        err.push('Title');
      }

      if (this.form.get('sortCode').invalid) {
        err.push('Sort Code');
      }

      this.msg.error(`Please inform ${err.join(' and ')}`);
      return;
    }

    this.loading = true;
    this.api.create(this.form.value).subscribe((e: Account) => {
      this.s.accounts.push(e);
      this.loading = false;
      this.close();
      this.msg.info(`${e.title} created! Sort Code ${e.sortCode} no. ${e.number}`);
    }, (err) => {
      this.msg.error('Request not accepted 💩');
      this.loading = false;
    });
  }

}
