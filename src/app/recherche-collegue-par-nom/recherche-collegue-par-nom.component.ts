import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataService } from '../services/data.service';
import { Get } from '../get';
import { Observable } from 'rxjs';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabMatricules = new Array ();
  matricule:Observable<Get []>;

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }
  rechercherMatriculeParNom (saisie) {
    this.tabMatricules = [];
    this.matricule = this._srv.recupererMatriculeParNom (saisie);
    this.matricule.subscribe (
      matricules => matricules.forEach (matricule => this.tabMatricules.push (matricule)),
      error => this.tabMatricules.push (error.message));
  }

  rechercherCollegueParMatricule (matricule) {
    this._srv.recupererCollegueParMatricule (matricule).subscribe (()=>{}, err => {console.log (err.message)});                          
  }

}
