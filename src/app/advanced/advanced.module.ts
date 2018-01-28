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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataFromObservableComponent } from './data-from-observable/data-from-observable.component';
import { RxjsPrimerComponent } from './rxjs-primer/rxjs-primer.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsServiceUnsubscribeComponent } from './rxjs-service-unsubscribe/rxjs-service-unsubscribe.component';
import { RxjsServiceUnsubscribeModule } from './rxjs-service-unsubscribe/rxjs-service-unsubscribe.module';

const routes : Route[] = [
    { path: 'zones-trigger-changedetection', component: ZonesTriggerChangedetectionComponent },
    { path: 'default-changedetection', component: DefaultChangedetectionComponent },
    { path: 'onpush', component: OnpushComponent},
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'data-from-observable', component: DataFromObservableComponent},
    { path: 'rxjs-primer', component: RxjsPrimerComponent },
    { path: 'rxjs-service-unsubscribe', component: RxjsServiceUnsubscribeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultChangedetectionModule,
    OnpushModule,
    HttpClientModule,
    RxjsServiceUnsubscribeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ZonesTriggerChangedetectionComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    DataFromObservableComponent,
    RxjsPrimerComponent
  ]
})
export class AdvancedModule { }
