import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationPublicComponent } from './formation-public/formation-public.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechFormationsComponent } from './rech-formations/rech-formations.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'accueil', component: AcceuilComponent },
  { path: 'formations', component: FormationPublicComponent },
  { path: 'formations/formation-details/:id', component: DetailsComponent },
  {
    path: 'rechercher-formation',
    component: RechFormationsComponent,
  },
  {
    path: 'rechercher-formation/formation-details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
