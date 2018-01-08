import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { FruitsComponent } from './fruits/fruits.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';
import { RouterModule, Route } from '@angular/router';

var routes : Route[] = [
  {
    path: 'basics',
    children: [
      {
        path: 'routingbasics',
        component: RoutingBasicsComponent,
        children: [
          { path: 'fruits', component: FruitsComponent },
          { path: 'orders', component: OrdersComponent },
          { path: '', pathMatch: 'full', redirectTo: 'fruits' }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OrdersComponent, FruitsComponent, RoutingBasicsComponent]
})
export class RoutingBasicsModule { }
