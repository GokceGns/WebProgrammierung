

export class Zutat{
  zutatname: string;
  menge: string;
  einheit: string;
  kategorie: string;

  constructor(mZutatname, mKategorie, mMenge, mEinheit){
    this.zutatname = mZutatname;
    this.einheit = mEinheit;
    this.kategorie = mKategorie;
    this.menge = mMenge;
  }
}
