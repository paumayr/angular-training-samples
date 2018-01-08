import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.css']
})
export class TwoWayBindingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myamount = 42.0;
}
