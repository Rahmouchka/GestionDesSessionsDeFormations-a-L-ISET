import { Injectable } from '@angular/core';
import { Candidat } from '../model/candidat';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private candidats =[
    new Candidat(1, 'Ali', 'Ben Hassen', 'ali@gmail.com', '123456789', 'photo1.jpg', 'Ali123'),
    new Candidat(2, 'Leila', 'Khadhra', 'leila@gmail.com', '987654321', 'photo2.jpg', 'Leila123'),
    new Candidat(3, 'Omar', 'Jaziri', 'omar@gmail.com', '456123789', 'photo3.jpg', 'Omar123')
  ];
  
  candidatsEdited= new Subject<Candidat[]>;

  constructor() { }
  getCandidats():Candidat[]{
    return [...this.candidats];
  }
  addCandidat(nom:string,prenom:string,email:string,numeroCarteIdentite:string,photo:string,motDePasse:string){
    const newCandidat=new Candidat(
      this.candidats[this.candidats.length-1].id +1,
      nom,
      prenom,
      email,
      numeroCarteIdentite,
      photo,
      motDePasse
    );
    this.candidats=[...this.candidats,newCandidat]
  }
  getCandidatById(id: number): Candidat | undefined {
    return this.candidats.find(candidat => candidat.id === id);
  }
  
  editCandidat(candidat:Candidat){
    this.candidats=this.candidats.map(
      c=>c.id === candidat.id?candidat:c
    )
  }
  deleteCandidat(id:number){
    this.candidats=this.candidats.filter(c=>c.id!==id);
    this.candidatsEdited.next([...this.candidats]);
  }
}
