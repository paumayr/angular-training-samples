import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of A");
  }

  checkingExpressions() {
    console.log("checking expressions of A")
    return '';
  }
}
