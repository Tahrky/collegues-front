import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueMatriculePhoto } from '../models/CollegueMatriculePhoto';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})

export class GalerieComponent implements OnInit {
  tabCollegues:CollegueMatriculePhoto [] = new Array ();

  constructor(private _service:DataService, private _router:Router) { }

  ngOnInit() {
    this._service.recupererCollegues ().subscribe ( collegues => this.tabCollegues = collegues,
                                                    error => console.log (error.message));
  }
}
