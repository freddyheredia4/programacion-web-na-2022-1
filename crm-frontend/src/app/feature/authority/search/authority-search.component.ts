import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authority } from '../authority';
import { AuthorityService } from '../authority.service';

@Component({
  selector: 'app-authority-search',
  templateUrl: './authority-search.component.html'
})
export class AuthoritySearchComponent implements OnInit {

  constructor(
    private authorityService: AuthorityService
  ) { }

  @Output() authorityEmiter = new EventEmitter<Authority>();
  autorities: Authority[] = [];

  ngOnInit(): void {
  }

  findByName(term: string):void {
    
    if (term.length>=2){
      this.authorityService.findByName(term).subscribe(
        (response) => {
          console.log(term + " "+ response);
          this.autorities = response
        }
      )
    }
    if (term.length===0){
      this.autorities = [];
    }
    
  }

  onSelect(authority: Authority): void{
    this.authorityEmiter.emit(authority);
  }

}
