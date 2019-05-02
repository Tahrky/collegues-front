import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Get} from './get';
import { Observable } from 'rxjs';
import { Collegue } from './models/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {

  constructor (private _service:DataService) {
  }

  title = 'collegues-front';
  collegues :Observable<Collegue []>;
  tabCollegues:Collegue [] = new Array ();

  ngOnInit(): void {
    this.collegues = this._service.recupererCollegues ();
    this.collegues.subscribe (collegues => this.tabCollegues = collegues,
                              error => console.log (error.message));
  }

}
