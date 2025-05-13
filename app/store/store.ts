import { create } from "zustand";

type Transaction = {
  date: Date;
  amount: number;
  remarks: string;
  purpose: string;
  paymentMode: string | null;
  type: "in" | "out";
};
type TransactionStore = {
  transactions: Transaction[];
  addTransaction: (txn: Transaction) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  addTransaction: (txn) =>
    set((state) => ({
      transactions: [...state.transactions, txn],
    })),
}));