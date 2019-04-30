import { Collegue } from '../models/Collegue';

export class ColleguesMock {

    public tab = new Array ();

    constructor () {
        this.tab.push (new Collegue ("1", "nom", "Prenoms", "email@mail.com", "0548-6-6", 
        "https://s2.qwant.com/thumbr/0x0/5/f/3533c02d067aa13bf04c26eb3193a02d9d8f8c2f205b5b7a239a66eaddc99e/Popcorn_Large-Lid_shutterstock_71515753-1.jpg?u=https%3A%2F%2Fwww.nostalgiaproducts.com%2Fwp-content%2Fuploads%2F2017%2F08%2FPopcorn_Large-Lid_shutterstock_71515753-1.jpg&q=0&b=1&p=0&a=1"));
    
        this.tab.push (new Collegue ("2", "paul", "Gurpratap Singh", "email@mail.com", "1987-9-5", 
        "https://s1.qwant.com/thumbr/0x0/b/2/f3aa8ab4c0cb8b3c89c7e5798ab1fb11e5d8e05339fa98cd101f292cd229e9/dieu.jpg?u=http%3A%2F%2Flesociologue.com%2Fwp-content%2Fuploads%2F2013%2F10%2Fdieu.jpg&q=0&b=1&p=0&a=1"));
    
        this.tab.push (new Collegue ("3", "paul", "Petit", "email@mail.com", "1947-1-5", 
        "https://4.bp.blogspot.com/-7PiHFWz7KA4/T7LBcPobzII/AAAAAAAABsU/W1_U3oFaPz4/s400/rossignol%2Bjaponais.jpg"));
    
        this.tab.push (new Collegue ("4", "paul", "Richard", "email@mail.com", "1947-4-5", 
        "https://s2.qwant.com/thumbr/0x380/6/4/108b78f45d39b997f6e3576e0a2c8068e0be0991b7acca8d08b3f4e6330894/7769048639_un-lionceau-en-colombie-le-25-octobre-2012-illustration.jpg?u=http%3A%2F%2Fmedia.rtl.fr%2Fonline%2Fimage%2F2014%2F0122%2F7769048639_un-lionceau-en-colombie-le-25-octobre-2012-illustration.jpg&q=0&b=1&p=0&a=1"));
    
        this.tab.push (new Collegue ("5", "marti", "Nicolas", "email@mail.com", "1906-12-5", 
        "https://s2.qwant.com/thumbr/0x380/f/a/a87025070569ee061b6556a195f2e2f1bf9cff42f524a45eee8bedf8e621f1/OgBOhKk.png?u=http%3A%2F%2Fi.imgur.com%2FOgBOhKk.png&q=0&b=1&p=0&a=1"));
    }
}
