import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { HostStylingComponentComponent } from './host-styling-component/host-styling-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewEncapsulationComponent,
    HostStylingComponentComponent
  ]
})
export class ViewEncapsulationModule { }
