import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-custom',
  templateUrl: './my-custom.component.html',
  styleUrls: ['./my-custom.component.css']
})
export class MyCustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() amount: number = 0.0;
  @Output() amountChange = new EventEmitter<number>();
  
  incrementAmount() {
      this.amount += 1.0;
      this.amountChange.emit(this.amount);
  }

  decrementAmount() {
      this.amount -= 1.0;
      this.amountChange.emit(this.amount);
  } 
}
