export interface Transaction {
  id: number;
  accountID: number;
  type: string;
  created: Date;
  amount: number;
  postBalance: number;
  description: string;
  pingedAt?: Date;
}
