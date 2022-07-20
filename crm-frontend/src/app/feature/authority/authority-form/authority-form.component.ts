import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authority } from '../authority';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-authority-form',
  templateUrl: './authority-form.component.html'
})
export class AuthorityFormComponent implements OnInit {

  currentAuthority: Authority = this.reset();

  constructor(
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
    this.authorityService.save(this.currentAuthority)
    .subscribe(
      (response) => {
        this.reset();
      } 
    )
  }

  findById(id: number): void {
    this.authorityService.findById(id)
    .subscribe(
      (reponse: Authority) => {
        this.currentAuthority = reponse;
      }
    )
  }


  reset(){
    return this.currentAuthority = {
      authorityId: 0,
      name: ""
    };
  }

}
