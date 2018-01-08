import { Component, OnInit } from '@angular/core';
import { Order, getOrders } from '../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : Order[];
  constructor() {
    this.orders = getOrders();
  }
  
  ngOnInit() {
  }
}
