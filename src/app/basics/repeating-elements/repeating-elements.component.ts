import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeating-elements',
  templateUrl: './repeating-elements.component.html',
  styleUrls: ['./repeating-elements.component.css']
})
export class RepeatingElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fruits = ['Apples', 'Bananas', 'Boysenberry'];
}
