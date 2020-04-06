import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  public customer = null;
  public accounts = [];
  public activeAccount = null;
  constructor() {
  }


  login = (customer) => {
    this.customer = customer;
  }

  logout = () => {
    this.customer = null;
    this.accounts = [];
    this.activeAccount = null;
  }
}
