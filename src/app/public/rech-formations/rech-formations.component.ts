import { Component, OnInit } from '@angular/core';
import { Formation } from '../../model/formation';
import { FormationService } from '../../services/formation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rech-formations',
  templateUrl: './rech-formations.component.html',
  styleUrl: './rech-formations.component.css',
})
export class RechFormationsComponent implements OnInit {
  formations: Formation[] = [];
  searchTerm: string = '';

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {}

  searchFormations(): void {
    this.formations = this.formationService.searchFormations(this.searchTerm);
  }
}
