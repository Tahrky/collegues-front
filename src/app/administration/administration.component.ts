import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable,  } from 'rxjs';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  title = 'collegues-front';
  collegues :Observable<Collegue []>;
  collegueAbonnement: Observable<Collegue>;
  tabCollegues:Collegue [] = new Array ();

  constructor (private _service:DataService) {
  }

  ngOnInit(): void {
      this.collegues = this._service.recupererCollegues ();
      this.collegues.subscribe (collegues => this.tabCollegues = collegues,
                                error => console.log (error.message));
      
      this.collegueAbonnement = this._service.prendreAbonnement ();
      this.collegueAbonnement.subscribe (collegue => {
        this.tabCollegues = [];
        this.tabCollegues.push (collegue)}
      ); 
    }

}
