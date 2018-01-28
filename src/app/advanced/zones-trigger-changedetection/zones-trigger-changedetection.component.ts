import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-zones-trigger-changedetection',
  templateUrl: './zones-trigger-changedetection.component.html',
  styleUrls: ['./zones-trigger-changedetection.component.css']
})
export class ZonesTriggerChangedetectionComponent implements OnInit, DoCheck {
  constructor(private ngZone: NgZone) 
  { 
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log("checking inputs of...");
  }

  value = 0;
  setat : number;

  update() {
    console.log("scheduling update");
    setTimeout(() => {
      console.log("updating");
      this.value++;
      this.setat = Date.now();
    }, 500);
  }

  inside() {
    this.update();
  }

  outside() {
    this.ngZone.runOutsideAngular(() => this.update());
  }

  someClick() {
    // just here to trigger change detection
  }


}
