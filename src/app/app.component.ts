import { Component } from '@angular/core';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'collegues-front';
  collegue1 = new Collegue ("1", "Nom", "Prenoms", "email@mail.com", "date", 
  "https://s2.qwant.com/thumbr/0x0/5/f/3533c02d067aa13bf04c26eb3193a02d9d8f8c2f205b5b7a239a66eaddc99e/Popcorn_Large-Lid_shutterstock_71515753-1.jpg?u=https%3A%2F%2Fwww.nostalgiaproducts.com%2Fwp-content%2Fuploads%2F2017%2F08%2FPopcorn_Large-Lid_shutterstock_71515753-1.jpg&q=0&b=1&p=0&a=1");

  collegue2 = new Collegue ("2", "Paul", "Gurpratap Singh", "email@mail.com", "1987-9-5", 
  "https://s1.qwant.com/thumbr/0x0/b/2/f3aa8ab4c0cb8b3c89c7e5798ab1fb11e5d8e05339fa98cd101f292cd229e9/dieu.jpg?u=http%3A%2F%2Flesociologue.com%2Fwp-content%2Fuploads%2F2013%2F10%2Fdieu.jpg&q=0&b=1&p=0&a=1");
}
