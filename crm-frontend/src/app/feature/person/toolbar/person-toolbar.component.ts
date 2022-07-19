import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person-toolbar',
  templateUrl: './person-toolbar.component.html'
})
export class PersonToolbarComponent implements OnInit {

  constructor() { }

  @Input() currentName: string = "";
  @Output() termEmitter= new EventEmitter<string>();

  ngOnInit(): void {
  }

  onSearch(term: string):void {
    this.termEmitter.emit(term);
  }

}
