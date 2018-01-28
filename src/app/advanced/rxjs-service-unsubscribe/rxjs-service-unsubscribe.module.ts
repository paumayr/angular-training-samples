import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsServiceUnsubscribeComponent } from './rxjs-service-unsubscribe.component';
import { StockTickerService } from './stock-ticker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StockTickerService
  ],
  declarations: [RxjsServiceUnsubscribeComponent]
})
export class RxjsServiceUnsubscribeModule { }
