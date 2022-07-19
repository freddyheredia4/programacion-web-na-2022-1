import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = {
    id: 0,
    name: "",
    dni: "",
    enabled: false,
    cityId: 0
  };

  constructor(
    private personService: PersonService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string;
         if (params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
         }
      }
    )
  }

  save():void{
    this.personService.save(this.currentPerson)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentPerson = {
          id: 0,
          name: "",
          dni: "",
          enabled: false,
          cityId: 0
        };
      } 
    )
  }

  findById(id: number): void {
    this.personService.findById(id)
    .subscribe(
      (reponse: Person) => {
        this.currentPerson = reponse;
      }
    )
  }

  delete():void{
    this.personService.deleteById(this.currentPerson.id)
    .subscribe(
      () => {
        this.currentPerson = {
          id: 0,
          name: "",
          dni: "",
          enabled: false,
          cityId: 0
        };
      }
    )
  }


}
