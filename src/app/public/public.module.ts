import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechFormationsComponent } from './rech-formations/rech-formations.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormationPublicComponent } from './formation-public/formation-public.component';

@NgModule({
  declarations: [
    AcceuilComponent,
    DetailsComponent,
    RechFormationsComponent,
    NavbarComponent,
    FormationPublicComponent,
  ],
  imports: [CommonModule, PublicRoutingModule, FormsModule, RouterModule],
})
export class PublicModule {}
