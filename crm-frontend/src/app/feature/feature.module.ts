import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';
import { CityComboComponent } from './city/city-combo/city-combo.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';



@NgModule({
  declarations: [
  
    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    CityComboComponent,
    AuthoritySearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
