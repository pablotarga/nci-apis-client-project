export interface Transaction {
  id: number;
  accountId: number;
  type: string;
  created: Date;
  amount: number;
  postBalance: number;
  description: string;
}
