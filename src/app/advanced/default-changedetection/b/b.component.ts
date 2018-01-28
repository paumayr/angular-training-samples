import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html'
})
export class BComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B");
  }

  checkingExpression() {
    console.log('checking expressions of B');
    return '';
  }

  person : Person = {
    first: 'Philipp',
    last: 'Aumayr'
  }

  count = 0;

  modifyData() {
    this.count++;
    this.person.last = `Aumayr ${this.count}`;
  }

}
