import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { Order } from '../order';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  async fetchAsync() {
    var customer = await this.httpClient.get<Customer>('api/customers/1').toPromise();
    console.log(customer);
  }

  async fetchOrdersAndCustomersAsync() {
    var orders = await this.httpClient.get<Order[]>('api/orders').toPromise();
    for(let order of orders) {
      var customer = await this.httpClient.get<Customer>(`api/customers/${order.customerId}`).toPromise();
      console.log(`customer of order ${order.id} is ${customer.name}`);
    }
  }


  async fetchOrdersAndCustomersAsyncCached() {
    var orders = await this.httpClient.get<Order[]>('api/orders').toPromise();
    var customers : { [idx: string] : Customer } = {};
    for(let order of orders) {
      let c : Customer = customers[order.customerId];
      if (!c) {
        c = await this.httpClient.get<Customer>(`api/customers/${order.customerId}`).toPromise();
        customers[c.id] = c;
      }

      console.log(`customer of order ${order.id} is ${c.name}`);
    }
  }

  async fetchOrdersAndCustomersAsyncParallel() {
    var orders = await this.httpClient.get<Order[]>('api/orders').toPromise();
    var customers = await Promise.all(Array.from(new Set(orders.map(o => o.customerId)))
          .map(customerId => this.httpClient.get<Customer>(`api/customers/${customerId}`).toPromise()))
    
    for(let order of orders) {
      let customer = customers.find(c => c.id == order.customerId);
      console.log(`customer of order ${order.id} is ${customer.name}`);
    }

  }
}
