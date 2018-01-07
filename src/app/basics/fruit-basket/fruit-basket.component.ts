import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-basket',
  templateUrl: './fruit-basket.component.html',
  styleUrls: ['./fruit-basket.component.css']
})
export class FruitBasketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fruits = ["Apples", "Bananas", "Oranges"];
  fruitName = "Boysenberry";

  add() {
    this.fruits.push(this.fruitName);
  }

  remove(index: number) {
    this.fruits.splice(index, 1);
  }
}
