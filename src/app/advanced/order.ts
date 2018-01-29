import { Customer } from "./customer";

export interface Order {
    id: number;
    customerId: number;
    customer?: Customer;
    amount: number;
    items: string[];
  };
