import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-bindings',
  templateUrl: './output-bindings.component.html',
  styleUrls: ['./output-bindings.component.css']
})
export class OutputBindingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  names = [
    { first: "Homer", last: "Simpson"},
    { first: "Bart", last: "Simpson"},
    { first: "March", last: "Simpson"},
    { first: "Lisa", last: "Simpson"},
    { first: "Maggie", last: "Simpson"},
    { first: "Ling", last: "Bouvier" },
    { first: "Kent", last: "Brockman" },
    { first: "Charles", last: "Burns" },
    { first: "Ned", last: "Flanders" }
  ];

  selected = this.names[0];

  updateSelected($event : { first: string, last: string }) {
      this.selected.first = $event.first;
      this.selected.last = $event.last;
  }
}
