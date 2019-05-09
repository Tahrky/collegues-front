import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Note } from '../models/Note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note:string = "Vous pouvez écrire ici une petite note pour votre collègue.";
  @Input () matricule;
  tabNoteObservable:Observable<Note []> = new Observable ();
  tabNote:Note[] = new Array <Note> ();
  messageEnvoye:boolean = false;

  constructor(private _service:DataService) { }

  ngOnInit() {
    this.tabNoteObservable = this._service.prendreAbonnementNote ();
    this.tabNoteObservable.subscribe (note => this.tabNote = note, err => console.log (err));
    setTimeout (() => this._service.recupererNotesParMatricule (this.matricule).subscribe (), 100);
  }

  submit () {
    this._service.ajoutNote (this.matricule, this.note).subscribe (retour => {
      this.messageEnvoye=retour;
      this._service.recupererNotesParMatricule (this.matricule).subscribe ();
    }, err => console.log (err));
    
    setTimeout (() => this.messageEnvoye = false, 4000);
  }

  supprNote(id:number) {
    this._service.supprNote (id).subscribe (() => this._service.recupererNotesParMatricule (this.matricule).subscribe (), err => (console.log (err)));
    
  }
}
