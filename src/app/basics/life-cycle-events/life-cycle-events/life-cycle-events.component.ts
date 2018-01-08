import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  templateUrl: './life-cycle-events.component.html',
  styleUrls: ['./life-cycle-events.component.css']
})
export class LifeCycleEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'phil';
  show = false;
}
