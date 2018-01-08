import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'basics',
    children: [
      {
        path: 'routeparameters',
        component: RouteParametersComponent,
        children: [
          { path: 'orders/:id', component: OrderDetailsComponent },
          { path: 'orders', component: OrdersComponent },
          { path: '', pathMatch: 'full', redirectTo: 'orders'}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RouteParametersComponent, OrderDetailsComponent, OrdersComponent]
})
export class RouteParametersModule { }
