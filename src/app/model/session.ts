import { Candidat } from "./candidat";
import { Formateur } from "./formateur";
import { Formation } from "./formation";

export class Session {
    constructor(
      private _id: number,
      private _dateDebut: Date,
      private _dateFin: Date,
      private _description: string,
      private _formation: Formation,
      private _formateurs: Formateur[],
      private _candidats: Candidat[]
    ) {}
  
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
  
    public get dateDebut(): Date {
      return this._dateDebut;
    }
    public set dateDebut(value: Date) {
      this._dateDebut = value;
    }
  
    public get dateFin(): Date {
      return this._dateFin;
    }
    public set dateFin(value: Date) {
      this._dateFin = value;
    }
  
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    }
  
    public get formation(): Formation {
      return this._formation;
    }
    public set formation(value: Formation) {
      this._formation = value;
    }
  
    public get formateurs(): Formateur[] {
      return this._formateurs;
    }
    public set formateurs(value: Formateur[]) {
      this._formateurs = value;
    }
  
    public get candidats(): Candidat[] {
      return this._candidats;
    }
    public set candidats(value: Candidat[]) {
      this._candidats = value;
    }
  }
  