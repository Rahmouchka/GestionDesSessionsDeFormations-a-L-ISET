import { Injectable } from '@angular/core';
import { Formation } from '../model/formation';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formations = [
    new Formation(1, 'Développement Web', 'Formation sur les bases du développement web', 40, 'programme1.pdf', 'débutant', ['HTML', 'CSS', 'JavaScript'], ['Informatique']),
    new Formation(2, 'Angular Avancé', 'Perfectionnement sur Angular et RxJS', 30, 'programme2.pdf', 'avancé', ['Angular', 'RxJS'], ['Informatique', 'Développement']),
    new Formation(3, 'Introduction à Python', 'Apprendre les bases de Python pour la data science', 35, 'programme3.pdf', 'intermédiaire', ['Python', 'Data Science'], ['Informatique'])
  ];

  formationsEdited = new Subject<Formation[]>;

  constructor() { }

  getFormations(): Formation[] {
    return [...this.formations];
  }

  addFormation(titre: string, description: string, chargeHoraire: number, programme: string, niveau: string, motsCles: string[], categories: string[]) {
    const newFormation = new Formation(
      this.formations[this.formations.length - 1].id + 1,
      titre,
      description,
      chargeHoraire,
      programme,
      niveau,
      motsCles,
      categories
    );
    this.formations = [...this.formations, newFormation];
  }
  getFormationById(id: number): Formation | undefined {
    return this.formations.find(formation => formation.id === id);
  }
  
  editFormation(formation: Formation) {
    this.formations = this.formations.map(f => f.id === formation.id ? formation : f);
  }

  deleteFormation(id: number) {
    this.formations = this.formations.filter(f => f.id !== id);
    this.formationsEdited.next([...this.formations]);
  }
}
