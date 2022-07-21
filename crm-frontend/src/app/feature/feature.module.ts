import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/form/person.component';
import { PersonListComponent } from './person/list/person-list.component';
import { CityComboboxComponent } from './city/city-combobox/city-combobox.component';
import { AuthoritySearchComponent } from './authority/search/authority-search.component';


@NgModule({
  declarations: [
  
    PersonComponent,
    PersonToolbarComponent,
    PersonListComponent,
    CityComboboxComponent,
    AuthoritySearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
