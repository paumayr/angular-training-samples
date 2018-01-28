import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';

export interface StockTicker {
  symbol: string;
  value: number;
}

@Injectable()
export class StockTickerService {

  constructor(private httpClient: HttpClient) {
  }

  intlTicker = Observable.interval(1000)
                .mergeMap(() => this.httpClient.get<StockTicker>('api/stockticker/intl'))
                .share();

}
