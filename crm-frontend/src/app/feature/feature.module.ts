import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/person-toolbar/person-toolbar.component';


@NgModule({
  declarations: [
  
  
    PersonToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
