import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

interface Customer {
  id : number;
  name: string;
}

interface Order {
  id: number;
  customerId: number;
  customer?: Customer;
  amount: number;
  items: string[];
};

@Component({
  selector: 'app-rxjs-primer',
  templateUrl: './rxjs-primer.component.html',
  styleUrls: ['./rxjs-primer.component.css']
})
export class RxjsPrimerComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {}

  basicObservableOf() {
    Observable
        .of(10, 20, 30)
        .subscribe(
          (value) => console.log(value),
          (err) => console.log("error from observable (!?)"),
          () => console.log('done') 
        )
  }

  filterObservable() {
    Observable.of(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
      .filter(x => x % 2 == 0)
      .subscribe(value => console.log(value));
  }

  mapObservable() {
    Observable.of(10, 20, 30, 40)
      .map(value => value * 2)
      .subscribe(value => console.log(value));
  }

  delayedObservableSubscription: Subscription;
  delayedObservable() {
    this.delayedObservableSubscription = Observable.of(10, 20, 30, 40)
      .delay(3000)
      .subscribe( 
        (value) => console.log(value),
        (err) => console.log("error from observable (!?)"),
        () => console.log('done')
      );
  }

  cancelDelayedObservable() {
    this.delayedObservableSubscription.unsubscribe();
  }

  concatenateObservable() {
    var first = Observable.of(10, 20, 30);
    var second = Observable.of(40, 50, 60);

    first.concat(second)
         .subscribe(value => console.log(value));
  }

  forkJoin() {
    var first = Observable.of(10).delay(1000);
    var second = Observable.of(40).delay(1500);

    Observable.forkJoin(first, second)
      .subscribe(values => console.log(values));
  }

  forkJoinFail() {
    var first = Observable.of(10).delay(1000);
    var second = Observable.of(40).delay(1500);
    var third = Observable.throw("oh no, this is an exception text").delay(300);
    
    Observable.forkJoin(first, second, third)
      .subscribe(values => console.log(values),
                (err) => console.log(err), 
                () => console.log("done."));
  }

  forkJoinHttp() {
    Observable.forkJoin(
      this.httpClient.get<Customer[]>('api/customers'),
      this.httpClient.get<Order[]>('api/orders')
    ).subscribe(([customers, orders]) => {
        // join orders with customers and do something..
        console.log(customers, orders);
    });
  }

  getOrderWithCustomer() {
    this.httpClient.get<Order>('api/orders/1')
        .mergeMap(order => this.httpClient.get<Customer>(`api/customers/${order.customerId}`),
          (order, customer) => { order.customer = customer; return order; })
        .subscribe(value => console.log(value));
  }

  getOrdersWithCustomer() {
    this.httpClient.get<Order[]>('api/orders')
        .mergeMap(orders => Observable.from(orders))
        .mergeMap(order => this.httpClient.get<Customer>(`api/customers/${order.customerId}`),
          (order, customer) => { order.customer = customer; return order; })
        .subscribe(value => console.log(value));
  }

  getOrdersWithCustomerCached() {
    this.httpClient.get<Order[]>('api/orders')
        .mergeMap(orders => Observable.from(orders)
                                .map(o => o.customerId)
                                .distinct()
                                .mergeMap(customerId => this.httpClient.get<Customer>(`api/customers/${customerId}`))
                                .toArray(),
          (orders, customers) => orders.map(o => { return o.customer = customers.find(c => c.id === o.customerId), o; }))
          .subscribe(v => console.log(v));
  }
}
