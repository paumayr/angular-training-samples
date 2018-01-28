import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-data-from-observable',
  templateUrl: './data-from-observable.component.html',
  styleUrls: ['./data-from-observable.component.css']
})
export class DataFromObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: string[];

  fetchData() {
    console.log('1) creating request.');
    this.getData()
        .subscribe(d => {
            console.log('3) setting items');
            this.items = d;
        });

    console.log('2) returning from fetchData');
  }

  getData() : Observable<string[]> {
    return Observable.of(['Apples', 'Bananas', 'Boysenberry']).delay(500);
  }
}
