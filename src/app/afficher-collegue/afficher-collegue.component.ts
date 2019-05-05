import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-afficher-collegue',
  templateUrl: './afficher-collegue.component.html',
  styleUrls: ['./afficher-collegue.component.css']
})
export class AfficherCollegueComponent implements OnInit {

  @Input () col:Collegue;
  colAModifier:Collegue;
  valeurBouton:String = "modifier";
  edition:boolean = false;
  @Output () ajouterCollegue = new EventEmitter<boolean>();
  

  constructor(private _srv:DataService) { }

  ngOnInit() {
    this.colAModifier = new Collegue (this.col.matricule, this.col.nom, this.col.prenoms, this.col.email, this.col.dateDeNaissance, this.col.photoUrl);
  }

  spread () {
    this.edition = !this.edition;
    this.valeurBouton == "modifier" ? this.valeurBouton = "valider" : this.valeurBouton = "modifier";
  }

  ajoutCollegue () {
    this.ajouterCollegue.emit(true);
  }

  submit () {
    if (this.col.email != this.colAModifier.email || this.col.photoUrl != this.colAModifier.photoUrl) {
      this.col.email = this.colAModifier.email ;
      this.col.photoUrl = this.colAModifier.photoUrl;
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
