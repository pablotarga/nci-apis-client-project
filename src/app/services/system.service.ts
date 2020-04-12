import { Injectable } from '@angular/core';
import { ApiAuthService } from '../api/api-auth.service';
import { LoginForm } from '../interfaces/login-form';
import { RegistrationForm } from '../interfaces/registration-form';
import { ApiAccountService } from '../api/api-account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  public authenticating = false;
  public loading = false;
  public loadingAccounts = false;
  public customer = null;
  public accounts = [];
  public activeAccount = null;
  public activeForm = null;

  constructor(
    private authApi: ApiAuthService,
    private accApi: ApiAccountService,
    private msg: ToastrService,

  ) {
    this.authenticating = true;
    this.authApi.me().subscribe((e) => {
      this.customer = e;
      this.authenticating = false;
      this.loadAccounts();
    }, (err) => {
      if (err.status === 0) {
        this.msg.warning('Server not responding activating FAKE data 🤪🤪🤪');
        this.mock();
      }
      this.authenticating = false;
    });
  }

  login = (data: LoginForm) => {
    if (this.authenticating) {
      return;
    }

    this.authenticating = true;
    this.clearAll();

    this.authApi.login(data.email, data.password).subscribe((e: any) => {
      this.customer = e;
      this.loadAccounts();
      this.authenticating = false;
      this.msg.success('🤘 awesome!');
    }, (err) => {
      this.msg.error('Invalid Email/Password 🚫');
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
      this.msg.success('Welcome aboard 👨‍✈️');
      this.authenticating = false;
    }, (err) => {
      this.authenticating = false;
      this.msg.error('Request not accepted 💩');
    });
  }

  logout = () => {
    this.authApi.logout().subscribe(e => console.log('Logged out!'));
    this.clearAll();
    this.msg.info('Your cookie was destroyed');
  }

  private clearAll = () => {
    this.customer = null;
    this.accounts = [];
    this.activeAccount = null;
    this.activeForm = null;
  }

  private loadAccounts = () => {
    if (this.loadingAccounts) {
      return;
    }

    this.loadingAccounts = true;
    this.accApi.index().subscribe((e) => {
      this.accounts = e as any;
      this.loadingAccounts = false;
    }, (err) => {
      this.loadingAccounts = false;
    });
  }

  private loadTransactions = (accountId) => {
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
        transactions: [
          { id: 123, accountId: 1, type: 'c', created: new Date(2020, 3, 1, 14, 34), amount: 200.00, postBalance: 200.00, description: 'Account opening' },
          { id: 124, accountId: 1, type: 'c', created: new Date(2020, 3, 5, 14, 34), amount: 20.00, postBalance: 220.00, description: 'Lodgement' },
          { id: 125, accountId: 1, type: 'd', created: new Date(2020, 3, 6, 10, 20), amount: 123.00, postBalance: 97.00, description: 'Withdrawal' },
          { id: 126, accountId: 1, type: 'd', created: new Date(2020, 3, 7, 22, 0), amount: 15.00, postBalance: 84.00, description: 'Tesco Stores' },
          { id: 126, accountId: 1, type: 'd', created: new Date(2020, 3, 9, 10, 0), amount: 49.44, postBalance: 34.56, description: 'Annual Subscription' },
        ],
      },
      {
        id: 2,
        customerID: 1,
        sortCode: '90-30-66',
        number: '00002',
        balance: 402.34,
        title: 'Savings',
        transactions: [
          { id: 223, accountId: 2, type: 'c', created: new Date(2020, 1, 1, 10, 0), amount: 200.00, postBalance: 200.00, description: 'Deposit' },
          { id: 224, accountId: 2, type: 'c', created: new Date(2020, 2, 1, 10, 0), amount: 200.00, postBalance: 400.00, description: 'Deposit' },
          { id: 225, accountId: 2, type: 'c', created: new Date(2020, 2, 1, 10, 0), amount: 2.34, postBalance: 402.34, description: 'Interest' },
        ],
      },
      {
        id: 3,
        customerID: 1,
        sortCode: '90-30-66',
        number: '00003',
        balance: 4024.68,
        title: 'Investments',
        transactions: [],
      },
      {
        id: 4,
        customerID: 1,
        sortCode: '90-30-66',
        number: '00004',
        balance: 76.34,
        title: 'Other',
        transactions: [],
      }
    ];

    // this.activeAccount = this.accounts[1];
  }
}
