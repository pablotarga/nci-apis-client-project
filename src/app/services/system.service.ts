import { Injectable } from '@angular/core';
import { ApiAuthService } from '../api/api-auth.service';
import { LoginForm } from '../interfaces/login-form';
import { RegistrationForm } from '../interfaces/registration-form';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  public authenticating = false;
  public loading = false;
  public customer = null;
  public accounts = [];
  public activeAccount = null;

  constructor(
    private authApi: ApiAuthService
  ) { }

  login = (data: LoginForm) => {
    if (this.authenticating) {
      return;
    }

    this.authenticating = true;
    this.clearAll();

    this.authApi.login(data.email, data.password).subscribe(e => {
      this.customer = e;
      this.loadAccounts();
      this.authenticating = false;
    }, (err) => {
      if (err.status === 0) {
        this.mock();
      }

      this.authenticating = false;
    });
  }

  register = (data: RegistrationForm) => {
    if (this.authenticating) {
      return;
    }

    this.authenticating = true;
    this.clearAll();

    this.authApi.register(data).subscribe((e) => {
      this.customer = e;
      this.loadAccounts();
      this.authenticating = false;
    }, (err) => {
      if (err.status === 0) {
        this.mock();
      }

      this.authenticating = false;
    })
  }

  logout = () => {
    this.authApi.logout().subscribe(e => console.log('Logged out!'));
    this.clearAll();
  }

  private clearAll = () => {
    this.customer = null;
    this.accounts = [];
    this.activeAccount = null;
  }

  private loadAccounts = () => {
    this.loading = true;

    setTimeout(() => {
      return this.loading = false;
    }, 3000);
  }

  private mock() {
    this.customer = {
      address: '25 Talbot St',
      email: 'john@student.ncirl.ie',
      id: 1,
      name: 'John Doe',
      password: 'Yjk5d53JESdHv5k/rI6Tq/wSkHY=.1GwRmuF4kNs='
    };

    this.accounts = [
      {
        id: 1,
        customerID: 1,
        sortCode: '90-30-66',
        number: '00001',
        balance: 34.56,
        title: 'Current Account',
      },
      {
        id: 2,
        customerID: 1,
        sortCode: '90-30-66',
        number: '00002',
        balance: 456.00,
        title: 'Savings',
      }
    ];
  }
}
