import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilisateurMailMotDePasse } from '../models/UtilisateurMailMotDePasse';

const URL_BACKEND = environment.backendUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
    
    constructor (private _serveur:HttpClient) {
    }

    authentification (email:string, motDePasse:string) {
      return this._serveur.post (`${URL_BACKEND}/auth`, new UtilisateurMailMotDePasse (email, motDePasse));
    }
}