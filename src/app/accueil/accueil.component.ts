import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable,  } from 'rxjs';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'collegues-front';
  collegues :Observable<Collegue []>;
  collegue: Observable<Collegue>;
  tabCollegues:Collegue [] = new Array ();

  constructor (private _service:DataService) {
  }

  ngOnInit(): void {
      this.collegues = this._service.recupererCollegues ();
      this.collegues.subscribe (collegues => this.tabCollegues = collegues,
                                error => console.log (error.message));
      this.collegue = this._service.prendreAbonnement ();
      this.collegue.subscribe (collegue => {
        this.tabCollegues = [];
        this.tabCollegues.push (collegue)}
      ); 
    }

}
