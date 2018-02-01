import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiSlotContentProjectionComponent, DialogComponent]
})
export class MultiSlotContentProjectionModule { }
