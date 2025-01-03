import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechFormationsComponent } from './rech-formations/rech-formations.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AcceuilComponent,
    RechFormationsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
