import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-combobox',
  templateUrl: './city-combobox.component.html'
})
export class CityComboboxComponent implements OnInit {

  cities: City[] = [];

  constructor(
    private cityService: CityService
  ) { }

  @Output() currentCityId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.cityService.findAll().subscribe(
      (response) => this.cities = response
    )
  }

  onChange(value: string):void {
    this.currentCityId.emit(parseInt(value));
  }

}
