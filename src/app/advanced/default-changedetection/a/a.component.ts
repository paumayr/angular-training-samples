import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html'
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of A");
  }

  checkingExpression() {
    console.log('checking expressions of A');
    return '';
  }

}
