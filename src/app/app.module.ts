import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';

const routes : Route[] = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'basics',
    loadChildren: './basics/basics.module#BasicsModule'
  },
  {
    path: 'advanced',
    loadChildren: './advanced/advanced.module#AdvancedModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
