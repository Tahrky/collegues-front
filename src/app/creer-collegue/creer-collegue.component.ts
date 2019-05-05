import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})

export class CreerCollegueComponent implements OnInit {

  col = new Collegue("","","","","", "");
  creationOk = "";
  @Output () ajouterCollegue = new EventEmitter<boolean>();

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }

  submit () {
    this._srv.envoyerCollegue (this.col).subscribe ( (collegue:Collegue) => {
      this.creationOk = "Collègue ajouté, il va s'afficher à l'écran dans un instant.";
      setTimeout (() => {
        this.ajouterCollegue.emit (false);
        this._srv.recupererCollegueParMatricule(collegue.matricule).subscribe (()=>{}, err => {console.log (err.message)});
      }, 5000);
      
    }, err => console.log (err));
  } 
}
