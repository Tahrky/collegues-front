import { Component, OnInit } from '@angular/core';
import {matriculeMock} from '../mock/matricule.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  varMatriculeMock = new matriculeMock ();
  matricule = new Array ();

  constructor() { }

  ngOnInit() {
  }

  afficherMatricule (saisie) {
    this.matricule = this.varMatriculeMock.rechercherParNom (saisie);
  }

}
