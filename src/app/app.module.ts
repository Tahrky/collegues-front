import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { AfficherCollegueComponent } from './afficher-collegue/afficher-collegue.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { GalerieComponent } from './galerie/galerie.component';
import { CollegueFromGalerieComponent } from './collegue-from-galerie/collegue-from-galerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    AfficherCollegueComponent,
    EmailValidatorDirective,
    AdministrationComponent,
    GalerieComponent,
    CollegueFromGalerieComponent,
    AccueilComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
