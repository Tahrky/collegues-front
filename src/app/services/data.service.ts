import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AbstractControl } from "@angular/forms";

import { environment } from '../../environments/environment';

import { Get } from '../get';
import { Collegue } from '../models/Collegue';
import { tap } from 'rxjs/operators';
import { CollegueMatriculePhoto } from '../models/CollegueMatriculePhoto';
import { CollegueMatriculeMessage } from '../models/CollegueMatriculeMessage'
import { Note } from '../models/Note';

const URL_BACKEND = environment.backendUrl + 'collegues';

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
  subjectNote:Subject<Note []> = new Subject();
  
  constructor (private _serveur:HttpClient) {
  }

  // Gestion des collègues

  recupererCollegues (): Observable<Collegue[]> {
    return this._serveur.get<Collegue[]> (`${URL_BACKEND}/collegues`, {withCredentials: true});
  }

  recupererMatriculeParNom (nomSaisie:string) :Observable<Get[]>{
    if (nomSaisie.length == 0)
    {
      return this._serveur.get<Get[]> (`${URL_BACKEND}/matricules`, {withCredentials: true});
    }
    else 
    {
      return this._serveur.get<Get[]> (`${URL_BACKEND}?nom=${nomSaisie.toLowerCase ()}`, {withCredentials: true});
    }
  }

  prendreAbonnement(): Observable<Collegue> {
		return this.subject.asObservable();
  }

  recupererCollegueParMatricule (matricule:string){
    return this._serveur.get<Collegue> (`${URL_BACKEND}/${matricule.toLowerCase ()}`, {withCredentials: true})
    .pipe ( tap (collegue => this.subject.next(collegue)));
  }

  modifEmail (collegue:Collegue) {
    return this._serveur.patch<Collegue> (`${URL_BACKEND}/${collegue.matricule.toLowerCase ()}`, collegue, {withCredentials: true});
  }

  envoyerCollegue(collegue:Collegue){
    return this._serveur.post(`${URL_BACKEND}`, collegue, {withCredentials: true});
  }

  existEmail (email:AbstractControl) {
    return this._serveur.post(`${URL_BACKEND}/verifMail`, email.value, {withCredentials: true});
  }

  recupererPhotos (matricule:string) :Observable<CollegueMatriculePhoto []>{
    return this._serveur.get<CollegueMatriculePhoto []> (`${URL_BACKEND}/photos`, {withCredentials: true});
  }

  // Gestion des notes

  prendreAbonnementNote(): Observable<Note []> {
		return this.subjectNote.asObservable();
  }

  recupererNotesParMatricule (matricule: string){
    return this._serveur.get<Note []> (`${URL_BACKEND}/notes/${matricule}`, {withCredentials: true})
    .pipe ( tap (note => this.subjectNote.next(note)));
  }

  ajoutNote (matricule:string, message:string) {
    return this._serveur.post<boolean> (`${URL_BACKEND}/ajoutNote`, new CollegueMatriculeMessage (matricule, message), {withCredentials: true});
  }
  
  supprNote(id: number) {
    return this._serveur.post<boolean> (`${URL_BACKEND}/supprNote`, id, {withCredentials: true});
  }
}
