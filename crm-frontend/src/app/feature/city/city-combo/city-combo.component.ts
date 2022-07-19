import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-combo',
  templateUrl: './city-combo.component.html'
})
export class CityComboComponent implements OnInit {

  constructor(
    private cityService: CityService
  ) { }

  cities: City[] = [];
  @Output() currentCityId = new EventEmitter<number>();
  @Input() id: number = 0;

  ngOnInit(): void {
    this.findAll();
    if (this.id!=0){
      console.log("seleccionando: "+ this.id);
    }
  }

  findAll():void {
    this.cityService.findAll().subscribe(
      (response)=> this.cities = response
    )
  }

  onChange(value:string):void {
    this.currentCityId.emit(parseInt(value));
  }

}
