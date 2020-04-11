import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiAccountService } from '../api/api-account.service';
import { SystemService } from '../services/system.service';

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

  constructor(private s: SystemService, private fb: FormBuilder, private api: ApiAccountService) { }

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

    this.loading = true;
    this.api.create(this.form.value).subscribe((e) => {
      this.s.accounts.push(e);
      this.loading = false;
      this.close();
    }, (err) => {
      this.loading = false;
    });


  }

}
