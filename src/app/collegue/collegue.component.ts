import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input () col:String;
  @Output() pressButton = new EventEmitter<string>();

  spread () {
    this.pressButton.emit ("Vous voulez modifiez un collegue");
  }

  constructor() { }

  ngOnInit() {
  }
}
