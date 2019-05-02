import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs'
import { Get } from '../get';
import { Collegue } from '../models/collegue';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  URL_BACKEND = environment.backendUrl;

  constructor (private _serveur:HttpClient) {
  }

  recupererCollegues () {
    return this._serveur.get<Collegue[]> (`${this.URL_BACKEND}/matricules`);
  }

  recupererMatriculeParNom (nomSaisie:string) :Observable<Get[]>{
    return this._serveur.get<Get[]> (`${this.URL_BACKEND}?nom=${nomSaisie}`);
  }

  recupererCollegueParMatricule (matricule:string) :Observable<Collegue>{
    return this._serveur.get<Collegue> (`${this.URL_BACKEND}/${matricule}`);
  }
}
