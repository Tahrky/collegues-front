import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { flatMap, timeout, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})

export class CreerCollegueComponent implements OnInit {

  col = new Collegue("","","","","");
  creationOk = "";
  @Output () ajouterCollegue = new EventEmitter<boolean>();

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }

  spread () {
    this.ajouterCollegue.emit (false);
  }

  submit () {
    this._srv.envoyerCollegue (this.col)
    .pipe(
      tap(() =>  this.creationOk = "Collègue ajouté, il va s'afficher à l'écran dans un instant."), 
      delay(2000),
      tap(() =>  this.spread ()),
      flatMap( (collegue: Collegue) =>this._srv.recupererCollegueParMatricule(collegue.matricule)))
      .subscribe ((col)=>{}, err => console.log (err.message));
  } 
}
