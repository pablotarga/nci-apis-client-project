import { Transaction } from './transaction';

export interface Account {
  id: number;
  customerID: number;
  sortCode: string;
  number: string;
  balance: number;
  title: string;
  transactions: Transaction[];
}
