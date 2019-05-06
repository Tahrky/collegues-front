import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-collegue-from-galerie',
  templateUrl: './collegue-from-galerie.component.html',
  styleUrls: ['./collegue-from-galerie.component.css']
})
export class CollegueFromGalerieComponent implements OnInit {

  @Input () col:Collegue;
  matricule: string;

  constructor(private _service:DataService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
       const matricule = params.get('matricule');
       this._service.recupererCollegueParMatricule (matricule).subscribe (col => this.col = col);
   });
  }
}