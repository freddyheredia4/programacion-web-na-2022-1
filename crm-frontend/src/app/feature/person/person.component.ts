import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = {
    personId: 0,
    name: "",
    dni: ""
  };

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  save():void{
    this.personService.save(this.currentPerson)
    .subscribe(
      (response) => {
        console.log("registro guardar");
      } 
    )
  }

}
