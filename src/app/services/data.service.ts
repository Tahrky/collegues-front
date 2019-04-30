import { Injectable } from '@angular/core';
import {matriculeMock} from '../mock/matricule.mock';
import {ColleguesMock} from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  varMatriculeMock = new matriculeMock ();
  varColleguesMock = new ColleguesMock ();

  recupererCollegues () {
    return this.varColleguesMock.tab;
  }

  afficherMatriculeParNom (saisie) {
    return this.varMatriculeMock.rechercherParNom (saisie);
  }
}
