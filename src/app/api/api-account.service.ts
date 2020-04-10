import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { NewTransactionParams } from '../interfaces/new_transaction_params';
import { TransferParams } from '../interfaces/transfer_params';

@Injectable({
  providedIn: 'root'
})
export class ApiAccountService extends ApiService {
  base = 'accounts';

  constructor(httpClient: HttpClient) { super(httpClient); }

  index = () => this.get(null);

  show = (id: number) => this.get(id);

  create = (data: any) => this.post(null, data);

  withdraw = (id: number, data: NewTransactionParams) => this.post(`${id}/withdraw`, data);

  lodge = (id: number, data: NewTransactionParams) => this.post(`${id}/lodge`, data);

  transfer = (id: number, data: TransferParams) => this.post(`${id}/transfer`, data);
}
