import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../model/formation';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-formation-public',
  templateUrl: './formation-public.component.html',
  styleUrl: './formation-public.component.css',
})
export class FormationPublicComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formations = this.formationService.getFormations();
  }
  
}
