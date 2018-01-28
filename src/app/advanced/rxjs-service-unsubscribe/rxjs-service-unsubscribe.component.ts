import { Component, OnInit, OnDestroy } from '@angular/core';
import { StockTickerService, StockTicker } from './stock-ticker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-service-unsubscribe',
  templateUrl: './rxjs-service-unsubscribe.component.html',
  styleUrls: ['./rxjs-service-unsubscribe.component.css']
})
export class RxjsServiceUnsubscribeComponent implements OnInit, OnDestroy {

  constructor(private stockTickerService: StockTickerService) { }

  ticker: StockTicker;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.stockTickerService.intlTicker.subscribe(v => this.ticker = v);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
