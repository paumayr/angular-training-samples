import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { Order } from '../order';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  fetchCustomer() {
    var promise = this.httpClient.get<Customer>('api/customers/1').toPromise();
    promise.then(customer => console.log(customer));
  }

  fetchOrderThenCustomer() {
    this.httpClient.get<Order>('api/orders/1').toPromise()
        .then(order => this.httpClient.get<Customer>(`api/customers/${order.customerId}`).toPromise())
        .then(customer => console.log(customer))
  }

  fetchOrdersThenCustomers() {
    this.httpClient.get<Order[]>(`api/orders`).toPromise()
      .then(orders => Promise.all(orders.map(o => this.httpClient.get(`api/customers/${o.customerId}`).toPromise())))
      .then(customers => console.log(customers));
  }

  explicitPromise() {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve('jippie');
          } else {
            reject('oh no');
          }
        }, 1000);
    });

    p.then(
      success => console.log('success: ', success),
      error => console.log('error', error)
    );
  }
}
