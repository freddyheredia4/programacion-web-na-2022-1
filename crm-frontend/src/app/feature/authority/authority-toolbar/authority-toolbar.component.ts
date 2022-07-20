import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authority-toolbar',
  templateUrl: './authority-toolbar.component.html'
})
export class AuthorityToolbarComponent implements OnInit {

  constructor() { }

  @Input() currentName: string = "";
  @Output() termEmitter= new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSearch(term: string):void {
    this.termEmitter.emit(term);
  }


}
