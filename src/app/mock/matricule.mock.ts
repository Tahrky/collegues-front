import { ColleguesMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

export class matriculeMock {

    colleguesMock = new ColleguesMock ();
    colleguesList = this.colleguesMock.tab;

    constructor () {
    }

    rechercherParNom (nom:String) {
        return this.colleguesList.filter (c => c.nom == nom).map (c => c.matricule);
    }
}
