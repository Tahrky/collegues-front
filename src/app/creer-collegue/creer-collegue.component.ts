import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  col = new Collegue("","","","","", "");

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }

  submit () {
    this._srv.envoyerCollegue (this.col).subscribe ( collegue => console.log(collegue),
                                                     err => console.log (err));
    }
      
  }
