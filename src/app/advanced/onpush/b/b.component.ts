import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of B");
  }

  checkingExpressions() {
    console.log("checking expressions of B")
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

  replaceData() {
    this.count++;
    this.person = { 
      first: this.person.first, 
      last: `Aumayr ${this.count}`
    };
  }
}
