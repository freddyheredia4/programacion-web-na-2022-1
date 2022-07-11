import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = {
    id: 0,
    name: "",
    dni: ""
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
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + id);
          this.findById(parseInt(id));
         }
      }
    )
  }

  save():void{
    this.personService.save(this.currentPerson)
    .subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentPerson = {
          id: 0,
          name: "",
          dni: ""
        };
      } 
    )
  }

  findById(id: number): void {
    this.personService.findById(id)
    .subscribe(
      (reponse: Person) => {
        this.currentPerson = reponse;
        console.log("lectura del id"+this.currentPerson.id);
      }
    )
  }

  delete():void{
    this.personService.deleteById(this.currentPerson.id)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentPerson = {
          id: 0,
          name: "",
          dni: ""
        };
      }
    )
  }

}
