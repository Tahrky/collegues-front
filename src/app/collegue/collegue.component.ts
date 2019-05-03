import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input () col:Collegue;
  colAModifier:Collegue;
  valeurBouton:String = "modifier";
  edition:boolean = false;
  ajoutCollegue:boolean = false;

  constructor(private _srv:DataService) { }

  ngOnInit() {
    this.colAModifier = new Collegue (this.col.matricule, this.col.nom, this.col.prenoms, this.col.email, this.col.dateDeNaissance, this.col.photoUrl);
  }

  spread () {
    this.edition = !this.edition;
    this.valeurBouton == "modifier" ? this.valeurBouton = "valider" : this.valeurBouton = "modifier";
  }

  submit () {
    if (this.col.email != this.colAModifier.email || this.col.photoUrl != this.colAModifier.photoUrl) {
      this.col.email = this.colAModifier.email ;
      this.col.photoUrl = this.colAModifier.photoUrl
      this._srv.modifEmail (this.col).subscribe ( collegue => console.log(collegue),
                                                  err => console.log (err));
    }
      
  }

  retablirEmail(retablir:boolean) {
    if (retablir) {
      this.colAModifier.email = this.col.email;
    }
  }

  retablirPhotoUrl(retablir:boolean) {
    if (retablir) {
      this.colAModifier.photoUrl = this.col.photoUrl;
    }
  }
}
