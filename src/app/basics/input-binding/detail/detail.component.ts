import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() fruit : Fruit;
}
