import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CollegueFromGalerieComponent } from './collegue-from-galerie/collegue-from-galerie.component';
import { CollegueComponent } from './collegue/collegue.component';
import { GalerieComponent } from './galerie/galerie.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'collegues', component: CollegueComponent },
    { path: 'collegue/:matricule', component: CollegueFromGalerieComponent},
    { path: 'galerie', component: GalerieComponent },

    { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];