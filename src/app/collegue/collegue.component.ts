import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  ajoutCollegue:boolean = false;
  @Input () collegue:Collegue;

  constructor() { }

  ngOnInit() {
  }
}
