import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActiveComponent } from './router-link-active/router-link-active.component';
import { FruitsComponent } from './fruits/fruits.component';
import { OrdersComponent } from './orders/orders.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';

var routes : Route[] = [
  {
    path: 'basics',
    children: [
      {
        path: 'routerlinkactive',
        component: RouterLinkActiveComponent,
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
    RouterModule.forChild(routes)
  ],
  declarations: [RouterLinkActiveComponent, FruitsComponent, OrdersComponent]
})
export class RouterLinkActiveModule { }
