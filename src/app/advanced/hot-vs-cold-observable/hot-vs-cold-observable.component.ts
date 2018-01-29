import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/publish';

@Component({
  selector: 'app-hot-vs-cold-observable',
  templateUrl: './hot-vs-cold-observable.component.html',
  styleUrls: ['./hot-vs-cold-observable.component.css']
})
export class HotVsColdObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  coldObservable() {
    var observable = Observable.zip(Observable.interval(1000), Observable.range(1, 10), (i, elem) => elem);

    observable.subscribe((i) => console.log(`A got ${i}`));

    setTimeout(() => {
      observable.subscribe((i) => console.log(`B got ${i}`));
    }, 4000);
  }

  hotObservable() {
    var observable = Observable.zip(Observable.interval(1000), Observable.range(1, 10), (i, elem) => elem);
    var connectableObservable = observable.publish();

    connectableObservable.connect();

    connectableObservable.subscribe((i) => console.log(`A got ${i}`));

    setTimeout(() => {
      connectableObservable.subscribe((i) => console.log(`B got ${i}`));
    }, 5000);
    
  }
}
