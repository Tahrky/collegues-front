import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

import { Get } from '../get';
import { Collegue } from '../models/Collegue';
import { tap} from 'rxjs/operators';

const URL_BACKEND = environment.backendUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  observable = new Observable ();
  subject:Subject<Collegue> = new Subject();
  
  constructor (private _serveur:HttpClient) {
  }

  prendreAbonnement(): Observable<Collegue> {
		return this.subject.asObservable();
  }

  recupererCollegues () {
    return this._serveur.get<Collegue[]> (`${URL_BACKEND}/matricules`);
  }

  recupererMatriculeParNom (nomSaisie:string) :Observable<Get[]>{
    return this._serveur.get<Get[]> (`${URL_BACKEND}?nom=${nomSaisie.toLowerCase ()}`);
  }

  recupererCollegueParMatricule (matricule:string) :Observable<Collegue>{
    return this._serveur.get<Collegue> (`${URL_BACKEND}/${matricule.toLowerCase ()}`)
    .pipe (
      tap (
        collegue => { 
          this.subject.next(collegue);
        }
      )
    );
  }

  modifEmail (collegue:Collegue) {
    return this._serveur.patch<Collegue> (`${URL_BACKEND}/${collegue.matricule.toLowerCase ()}`, collegue);
  }

  envoyerCollegue(collegue:Collegue){
    return this._serveur.post(`${URL_BACKEND}`, collegue);
 }
}
