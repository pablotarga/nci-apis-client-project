import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AuthorizedComponent } from './authorized/authorized.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountWithdrawalComponent } from './account-withdrawal/account-withdrawal.component';
import { AccountLodgementComponent } from './account-lodgement/account-lodgement.component';
import { AccountTransferComponent } from './account-transfer/account-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizedComponent,
    LoginComponent,
    RegisterComponent,
    CustomerInfoComponent,
    AccountDetailComponent,
    AccountListComponent,
    TransactionListComponent,
    AccountWithdrawalComponent,
    AccountLodgementComponent,
    AccountTransferComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
