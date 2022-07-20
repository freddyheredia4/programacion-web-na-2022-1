import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';
import { CityComboComponent } from './city/city-combo/city-combo.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';
import { AuthorityFormComponent } from './authority/authority-form/authority-form.component';
import { AuthorityListComponent } from './authority/authority-list/authority-list.component';
import { AuthorityToolbarComponent } from './authority/authority-toolbar/authority-toolbar.component';



@NgModule({
  declarations: [
  
    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    CityComboComponent,
    AuthoritySearchComponent,
    AuthorityFormComponent,
    AuthorityListComponent,
    AuthorityToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
