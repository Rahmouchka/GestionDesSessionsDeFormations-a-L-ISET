import { Injectable } from '@angular/core';
import { Formateur } from '../model/formateur';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private formateurs = [
    new Formateur(1, 'Ahmed', 'Haddad', 'ahmed@gmail.com','95555555', '123987456', 'photo1.jpg', 'CV1.pdf', ['JavaScript', 'Angular']),
    new Formateur(2, 'Nadia', 'Salah', 'nadia@gmail.com','93333333', '321654987', 'photo2.jpg', 'CV2.pdf', ['HTML', 'CSS']),
    new Formateur(3, 'Yassine', 'Gharbi', 'yassine@gmail.com','95553333', '741258369', 'photo3.jpg', 'CV3.pdf', ['Python', 'Django'])
  ]; 
  formateursEdited= new Subject<Formateur[]>;
  
  constructor() { }
  
  getFormateurs(): Formateur[] {
    return [...this.formateurs];
  }

  addFormateur(nom: string, prenom: string, email: string, numeroTel: string, numeroCarteIdentite: string, photo: string, cv: string, specialites: string[]) {
    const newFormateur = new Formateur(
      this.formateurs[this.formateurs.length - 1].id + 1,
      nom,
      prenom,
      email,
      numeroTel,
      numeroCarteIdentite,
      photo,
      cv,
      specialites
    );
    this.formateurs = [...this.formateurs, newFormateur];
  }
  
  editFormateur(formateur: Formateur) {
    this.formateurs = this.formateurs.map(f => f.id === formateur.id ? formateur : f);
  }
  
  deleteFormateur(id: number) {
    this.formateurs = this.formateurs.filter(f => f.id !== id);
    this.formateursEdited.next([...this.formateurs]);
  }
}
