import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorityService } from '../../authority/authority.service';
import { Authority } from '../../authority/authority';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = this.reset();

  constructor(
    private personService: PersonService,
    private activedRoute: ActivatedRoute,
    private authorityService: AuthorityService
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
        this.reset();
      } 
    )
  }

  findById(id: number): void {
    this.personService.findById(id)
    .subscribe(
      (reponse: Person) => {
        this.currentPerson = reponse;
        this.currentPerson.authorities.forEach(
          (item) => {
            this.authorityService.findById(item.authorityId).subscribe(
              (responseAuth:Authority) => item.name = responseAuth.name
            )
          }
        )
      }
    )
  }

  delete():void{
    this.personService.deleteById(this.currentPerson.id)
    .subscribe(
      () => {
        this.reset();
      }
    )
  }

  reset(){
    return this.currentPerson = {
      id: 0,
      name: "",
      dni: "",
      enabled: false,
      cityId: 0,
      authorities: []
    };
  }

  addAuthority(newAuthority: Authority): void {
    
    this.currentPerson.authorities.push(
      {
        authorityId: newAuthority.authorityId,
        name: newAuthority.name
      }
    )
  }

}
