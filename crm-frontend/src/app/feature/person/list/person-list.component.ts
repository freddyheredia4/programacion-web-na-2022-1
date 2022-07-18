import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  persons: Person[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.personService.findAll().subscribe(
      (response) => {
        this.persons = response;
      }
    );
  }

}
