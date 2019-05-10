import { Component, OnInit } from '@angular/core';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { Collegue } from '../models/Collegue';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  user:UtilisateurMailMotDePasse = new UtilisateurMailMotDePasse ('aa@a.a', 'pass1');
  Collegue:Collegue;

  constructor(private _srv:AuthentificationService) { }

  ngOnInit() {
  }

  submit () {
    this._srv.authentification(this.user).subscribe (()=>{}, err => console.log (err));
  }

}
