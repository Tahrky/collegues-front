import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { CollegueMatriculeNomPrenomsRoles } from './models/CollegueMatriculeNomPrenomsRoles';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit {

  collegueConnecte:CollegueMatriculeNomPrenomsRoles;
  estConnecte: boolean;

  constructor (private _service:AuthentificationService) {
  }

  ngOnInit(): void { 
    this._service.prendreAbonnement ().subscribe (collegue => {
      this.collegueConnecte = collegue;
    }, err => console.log (err));

    this._service.prendreAbonnementConnexion ().subscribe (connexion => this.estConnecte = connexion, err => console.log (err));
  }

  disconnect () {
    this._service.deconnexion ().subscribe (()=> {}, err => console.log(err));
  }
}
