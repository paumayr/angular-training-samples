import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("checking inputs of C1");
  }

  checkingExpressions() {
    console.log("checking expressions of C1")
    return '';
  }
}
