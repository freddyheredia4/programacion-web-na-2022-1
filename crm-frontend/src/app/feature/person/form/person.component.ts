import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorityService } from '../../authority/authority.service';
import { Authority } from '../../authority/authority';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  currentPerson: Person = this.resetPerson();

  constructor(
    private personService: PersonService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private authorityService: AuthorityService
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
        this.currentPerson = this.resetPerson();
        this.route.navigate(['/layout/person-list']);
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
              (auth:Authority) => item.name = auth.name
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
        console.log("Registro eliminado");
        this.currentPerson = this.resetPerson();
      }
    )
  }

  resetPerson(){
    return this.currentPerson = {
      id: 0,
      name: "",
      dni: "",
      enabled: false,
      cityId: 0,
      authorities: []
    };
  }
  
  onSelect(authority:Authority): void {
    this.currentPerson.authorities.push(authority);
  }

  removeAuthority(id: number){
    this.currentPerson.authorities = 
    this.currentPerson.authorities.filter(
      (item) => item.authorityId != id
    )
  }

}
