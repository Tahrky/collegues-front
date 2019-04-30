import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {

  constructor (private _srv:DataService) {
  }

  title = 'collegues-front';
  collegues = this._srv.recupererCollegues ();
}
