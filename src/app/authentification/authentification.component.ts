import { Component, OnInit } from '@angular/core';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';
import { Collegue } from '../models/Collegue';
import { AuthentificationService } from '../services/authentification.service';
import { RouterLink, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  user:UtilisateurMailMotDePasse = new UtilisateurMailMotDePasse ('aa@a.a', 'pass1');
  Collegue:Collegue;

  constructor(private _srv:AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  submit () {
    this._srv.authentification(this.user).
    pipe(
      flatMap(col => this._srv.getMe())
    ).subscribe(collegue => {
        this._srv.collegueEnCours = collegue;
        this.router.navigate([`accueil`]);
      }, err => console.log (err));
  }

}
