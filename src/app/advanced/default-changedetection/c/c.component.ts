import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html'
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of C");
  }

  checkingExpression() {
    console.log('checking expressions of C');
    return '';
  }
}
