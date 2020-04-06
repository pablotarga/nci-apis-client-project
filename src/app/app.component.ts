import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SystemService } from './system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public s: SystemService) { }
  title = 'NCI API CA3';
  subtitle = 'Bank Account HtmlClient';
  faCoffee = faCoffee;


  toggleCustomer() {
    if (this.s.customer) {
      this.s.logout();
    } else {
      this.s.login({
        address: '25 Talbot St',
        email: 'john@student.ncirl.ie',
        id: 1,
        name: 'John Doe',
        password: 'Yjk5d53JESdHv5k/rI6Tq/wSkHY=.1GwRmuF4kNs='
      });
    }

  }
}
