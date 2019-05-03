import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input () col:Collegue;
  valeurBouton:String = "modifier";
  edition:boolean = false;

  spread () {
    this.edition = !this.edition;

    this.valeurBouton == "modifier" ? this.valeurBouton = "valider" : this.valeurBouton = "modifier";
  }

  constructor() { }

  ngOnInit() {
  }

  submit () {

  }
}
