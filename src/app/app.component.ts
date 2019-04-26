import { Component } from '@angular/core';
import { Collegue } from './models/Collegue';
import { ColleguesMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'collegues-front';
  collegues:ColleguesMock = new ColleguesMock ();

  whenButtonPressed(leTexte: string) {
      alert (leTexte);
  }


}
