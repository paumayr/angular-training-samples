import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnpushComponent } from './onpush.component';
import { MainComponent } from './main/main.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { C1Component } from './c1/c1.component';
import { B1xComponent } from './b1x/b1x.component';
import { B1yComponent } from './b1y/b1y.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OnpushComponent, MainComponent, AComponent, BComponent, CComponent, B1Component, B2Component, C1Component, B1xComponent, B1yComponent]
})
export class OnpushModule { }
