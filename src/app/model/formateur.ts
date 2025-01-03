export class Formateur {
    constructor(
      private _id: number,
      private _nom: string,
      private _prenom: string,
      private _email: string,
      private _telephone: string,
      private _numeroCarteIdentite: string,
      private _photo: string,
      private _cv: string,
      private _specialites: string[]
    ) {}
  
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
  
    public get nom(): string {
      return this._nom;
    }
    public set nom(value: string) {
      this._nom = value;
    }
  
    public get prenom(): string {
      return this._prenom;
    }
    public set prenom(value: string) {
      this._prenom = value;
    }
  
    public get email(): string {
      return this._email;
    }
    public set email(value: string) {
      this._email = value;
    }
  
    public get telephone(): string {
      return this._telephone;
    }
    public set telephone(value: string) {
      this._telephone = value;
    }
  
    public get numeroCarteIdentite(): string {
      return this._numeroCarteIdentite;
    }
    public set numeroCarteIdentite(value: string) {
      this._numeroCarteIdentite = value;
    }
  
    public get photo(): string {
      return this._photo;
    }
    public set photo(value: string) {
      this._photo = value;
    }
  
    public get cv(): string {
      return this._cv;
    }
    public set cv(value: string) {
      this._cv = value;
    }
  
    public get specialites(): string[] {
      return this._specialites;
    }
    public set specialites(value: string[]) {
      this._specialites = value;
    }
  }
  