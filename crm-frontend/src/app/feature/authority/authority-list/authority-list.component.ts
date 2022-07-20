import { Component, OnInit } from '@angular/core';
import { Authority } from '../authority';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-authority-list',
  templateUrl: './authority-list.component.html'
})
export class AuthorityListComponent implements OnInit {


  constructor(
    private authorityService: AuthorityService
  ) { }

  authoritys: Authority[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.authorityService.findAll().subscribe(
      (response) => {
        this.authoritys = response;
      }
    );
  }

  findByName(term: string): void {
    if (term.length===0) {
      this.findAll();
    }
    if (term.length>=2){
      this.authorityService.findByName(term).subscribe(
        (response) => this.authoritys = response
       )
    }

  }

}
