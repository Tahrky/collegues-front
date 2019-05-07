import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatriculeMessage } from '../models/MatriculeMessage'
import { Note } from '../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note:string = "";
  @Input () matricule;
  tabNote:Note[] = new Array <Note> ();

  constructor(private _service:DataService) { }

  ngOnInit() {
    this._service.recupererNotesParMatricule (this.matricule).subscribe (note => {
      this.tabNote = note;
    }, err => console.log (err));
  }

  submit () {
    this.note = document.getElementById('textarea').textContent;
    this._service.ajoutNote (this.matricule, this.note).subscribe (() => {}, err => console.log (err));
  }
}
