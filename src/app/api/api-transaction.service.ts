import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiTransactionService extends ApiService {
  base = 'accounts';

  constructor(httpClient: HttpClient) { super(httpClient); }

  index = (accountId: number) => this.get(accountId + '/transactions');

  show = (accountId: number, id: number) => this.get(accountId + '/transactions/' + id);
}
