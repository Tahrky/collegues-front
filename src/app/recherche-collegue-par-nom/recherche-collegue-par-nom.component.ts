import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css'],
  providers: [
    DataService
  ]
})
export class RechercheCollegueParNomComponent implements OnInit {

  varMatriculeMock = new Array ();
  matricule = new Array ();

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }

  afficherMatricule (saisie) {
    this.matricule = this._srv.afficherMatriculeParNom (saisie);
  }

}
