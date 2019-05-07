import { Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { CollegueFromGalerieComponent } from './collegue-from-galerie/collegue-from-galerie.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './apropos/apropos.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'administration', component: AdministrationComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'collegue/:matricule', component: CollegueFromGalerieComponent},
    { path: 'apropos', component: AProposComponent},

    { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];