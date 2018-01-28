import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonesTriggerChangedetectionComponent } from './zones-trigger-changedetection/zones-trigger-changedetection.component';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './default-changedetection/main/main.component';
import { DefaultChangedetectionModule } from './default-changedetection/default-changedetection.module';
import { DefaultChangedetectionComponent } from './default-changedetection/default-changedetection.component';
import { OnpushComponent } from './onpush/onpush.component';
import { OnpushModule } from './onpush/onpush.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';

const routes : Route[] = [
    { path: 'zones-trigger-changedetection', component: ZonesTriggerChangedetectionComponent },
    { path: 'default-changedetection', component: DefaultChangedetectionComponent },
    { path: 'onpush', component: OnpushComponent},
    { path: 'template-driven-form', component: TemplateDrivenFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DefaultChangedetectionModule,
    OnpushModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ZonesTriggerChangedetectionComponent,
    TemplateDrivenFormComponent
  ]
})
export class AdvancedModule { }
