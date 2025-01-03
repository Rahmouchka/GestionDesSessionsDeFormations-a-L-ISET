import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';


@NgModule({
  declarations: [
    ListeCandidatsComponent,
    AddCandidatComponent,
    EditCandidatComponent
  ],
  imports: [
    CommonModule,
    CandidatsRoutingModule
  ]
})
export class CandidatsModule { }
