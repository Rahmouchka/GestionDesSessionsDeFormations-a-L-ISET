export class Formation {
    constructor(
      private _id: number,
      private _titre: string,
      private _description: string,
      private _chargeHoraire: number,
      private _programme: string,
      private _niveauDifficulte: string,
      private _motsCles: string[],
      private _categories: string[]
    ) {}
  
    public get id(): number {
      return this._id;
    }
    public set id(value: number) {
      this._id = value;
    }
  
    public get titre(): string {
      return this._titre;
    }
    public set titre(value: string) {
      this._titre = value;
    }
  
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    }
  
    public get chargeHoraire(): number {
      return this._chargeHoraire;
    }
    public set chargeHoraire(value: number) {
      this._chargeHoraire = value;
    }
  
    public get programme(): string {
      return this._programme;
    }
    public set programme(value: string) {
      this._programme = value;
    }
  
    public get niveauDifficulte(): string {
      return this._niveauDifficulte;
    }
    public set niveauDifficulte(value: string) {
      this._niveauDifficulte = value;
    }
  
    public get motsCles(): string[] {
      return this._motsCles;
    }
    public set motsCles(value: string[]) {
      this._motsCles = value;
    }
  
    public get categories(): string[] {
      return this._categories;
    }
    public set categories(value: string[]) {
      this._categories = value;
    }
  }
  