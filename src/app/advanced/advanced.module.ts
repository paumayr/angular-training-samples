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
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataFromObservableComponent } from './data-from-observable/data-from-observable.component';
import { RxjsPrimerComponent } from './rxjs-primer/rxjs-primer.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsServiceUnsubscribeComponent } from './rxjs-service-unsubscribe/rxjs-service-unsubscribe.component';
import { RxjsServiceUnsubscribeModule } from './rxjs-service-unsubscribe/rxjs-service-unsubscribe.module';
import { HotVsColdObservableComponent } from './hot-vs-cold-observable/hot-vs-cold-observable.component';
import { PromisesComponent } from './promises/promises.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FormsStylingComponent } from './forms-styling/forms-styling.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ViewEncapsulationModule } from './view-encapsulation/view-encapsulation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MultiSlotContentProjectionModule } from './multi-slot-content-projection/multi-slot-content-projection.module';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection/multi-slot-content-projection.component';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { ContentChildrenModule } from './content-children/content-children.module';

const routes : Route[] = [
    { path: 'zones-trigger-changedetection', component: ZonesTriggerChangedetectionComponent },
    { path: 'default-changedetection', component: DefaultChangedetectionComponent },
    { path: 'onpush', component: OnpushComponent},
    { path: 'template-driven-form', component: TemplateDrivenFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'forms-styling', component: FormsStylingComponent },
    { path: 'data-from-observable', component: DataFromObservableComponent},
    { path: 'rxjs-primer', component: RxjsPrimerComponent },
    { path: 'rxjs-service-unsubscribe', component: RxjsServiceUnsubscribeComponent },
    { path: 'hot-vs-cold-observable', component: HotVsColdObservableComponent },
    { path: 'promises', component: PromisesComponent },
    { path: 'async-await', component: AsyncAwaitComponent },
    { path: 'view-encapsulation', component: ViewEncapsulationComponent },
    { path: 'content-projection', component: ContentProjectionComponent },
    { path: 'multi-slot-content-projection', component: MultiSlotContentProjectionComponent},
    { path: 'content-children', component: ContentChildrenComponent }
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
    ViewEncapsulationModule,
    ContentProjectionModule,
    MultiSlotContentProjectionModule,
    ContentChildrenModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ZonesTriggerChangedetectionComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    DataFromObservableComponent,
    RxjsPrimerComponent,
    HotVsColdObservableComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    FormsStylingComponent
  ]
})
export class AdvancedModule { }
