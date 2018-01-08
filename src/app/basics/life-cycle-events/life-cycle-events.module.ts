import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleEventsComponent } from './life-cycle-events/life-cycle-events.component';
import { NoisyCompComponent } from './noisy-comp/noisy-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LifeCycleEventsComponent, NoisyCompComponent]
})
export class LifeCycleEventsModule { }
