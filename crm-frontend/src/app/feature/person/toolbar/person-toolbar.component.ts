import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person-toolbar',
  templateUrl: './person-toolbar.component.html'
})
export class PersonToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }

}
