import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-noisy-comp',
  templateUrl: './noisy-comp.component.html',
  styleUrls: ['./noisy-comp.component.css']
})
export class NoisyCompComponent implements OnInit {

  @Input() firstName: string;
  
  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
      console.log("on init");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("on changes:", changes, this.firstName);
  }

  ngOnDestroy() {
      console.log("on destroy");
  }

  ngAfterViewInit() {
      console.log("after view init");
  }
}
