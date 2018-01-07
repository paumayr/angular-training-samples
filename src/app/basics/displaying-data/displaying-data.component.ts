import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {


  value = 42;

  constructor() { }
  ngOnInit() {
  }
}
