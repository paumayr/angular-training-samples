import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, getOrders } from '../orders';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(activatedRoute : ActivatedRoute) {
    var orderId = activatedRoute.snapshot.params['id'];
    this.fetchOrder(orderId);

    // Uncomment to update to changing route parameter
    // activatedRoute.params.subscribe(params => {
    //     this.fetchOrder(params['id']);
    // });
  }

  ngOnInit() {
  }

  order: Order = null;
 
  private fetchOrder(orderId : string) {
      this.order = getOrders().filter(o => o.id == orderId)[0];
  }
}
